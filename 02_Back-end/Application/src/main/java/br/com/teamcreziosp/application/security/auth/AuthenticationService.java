package br.com.teamcreziosp.application.security.auth;

import br.com.teamcreziosp.application.model.*;
import br.com.teamcreziosp.application.repository.AlunoExperimentalRepository;
import br.com.teamcreziosp.application.repository.AlunoRepository;
import br.com.teamcreziosp.application.repository.FuncionarioRepository;
import br.com.teamcreziosp.application.security.Role;
import br.com.teamcreziosp.application.security.config.JwtService;
import br.com.teamcreziosp.application.service.exceptions.UserNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.List;


@Service
@RequiredArgsConstructor
public class AuthenticationService implements UserDetails {

    private final AlunoRepository alunoRepository;
    private final AlunoExperimentalRepository alunoExperimentalRepository;
    private final FuncionarioRepository funcionarioRepository;

    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;


    // EXPLICAÇÃO: Este método realizar o cadastro dos alunos.
    public AuthenticationResponse cadastro(RegisterRequestAluno request){

        var aluno = Aluno.builder()
                .nome(request.getNome())
                .sobrenome(request.getSobrenome())
                .dataNascimento(request.getDataNascimento())
                .email(request.getEmail())
                .senha(passwordEncoder.encode(request.getSenha()))
                .sexo(request.getSexo())
                .telefone(request.getTelefone())
                .rg(request.getRg())
                .cpf(request.getCpf())
                .endereco(request.getEndereco())
                .numEndereco(request.getNumEndereco())
                .cidade(request.getCidade())
                .cep(request.getCep())
                .role(Role.ALUNO)
                .build();

        alunoRepository.save(aluno);

        var jwtToken = jwtService.generateToken(aluno);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }

    // EXPLICAÇÃO: Este método realizar o cadastro dos alunos que farão uma aula experimental.
    public AuthenticationResponse cadastroAlunoExperimental(RegisterRequestAlunoExperimental request){

        var alunoExperimental = AlunoExperimental.builder()
                .nomeCompleto(request.getNomeCompleto())
                .email(request.getEmail())
                .telefone(request.getTelefone())
                .role(Role.EXPERIMENTAL)
                .build();

        alunoExperimentalRepository.save(alunoExperimental);

        var jwtToken = jwtService.generateToken(alunoExperimental);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .build();
    }


    // EXPLICAÇÃO: Esse método cadastra os funcionários, instanciando-os conforme
    // seus cargos e, consequentemente, conforme suas ROLES.
    // Pode-se notar que, aqui, ainda existe uma limitação, afinal este método
    // depende sempre e apenas de cargos específicos. O ideial é, futuramente,
    // implementar um método que permita o administrar criar outros cargos e,
    // consequentemente, instaciar novos tipos de funcionários.
    public AuthenticationResponse cadastroFuncionario(RegisterRequestFuncionario request){




        Funcionario funcionario = switch (request.getCargo()) {
            case "Administrador" -> Adm.builder()
                    .nome(request.getNome())
                    .sobrenome(request.getSobrenome())
                    .dataNascimento(request.getDataNascimento())
                    .email(request.getEmail())
                    .senha(passwordEncoder.encode(request.getSenha()))
                    .sexo(request.getSexo())
                    .telefone(request.getTelefone())
                    .rg(request.getRg())
                    .cpf(request.getCpf())
                    .cargo(request.getCargo())
                    .role(Role.ADMIN)
                    .build();
            case "Professor" -> Professor.builder()
                    .nome(request.getNome())
                    .sobrenome(request.getSobrenome())
                    .dataNascimento(request.getDataNascimento())
                    .email(request.getEmail())
                    .senha(passwordEncoder.encode(request.getSenha()))
                    .sexo(request.getSexo())
                    .telefone(request.getTelefone())
                    .rg(request.getRg())
                    .cpf(request.getCpf())
                    .cargo(request.getCargo())
                    .role(Role.PROFESSOR)
                    .build();
            case "Treinador" -> Treinador.builder()
                    .nome(request.getNome())
                    .sobrenome(request.getSobrenome())
                    .dataNascimento(request.getDataNascimento())
                    .email(request.getEmail())
                    .senha(passwordEncoder.encode(request.getSenha()))
                    .sexo(request.getSexo())
                    .telefone(request.getTelefone())
                    .rg(request.getRg())
                    .cpf(request.getCpf())
                    .cargo(request.getCargo())
                    .role(Role.TREINADOR)
                    .build();
            default -> throw new IllegalArgumentException("Cargo de funcionário inválido: " + request.getCargo());
        };

        funcionarioRepository.save(funcionario);

        var jwtToken = jwtService.generateToken(funcionario);

        //precisava definir a variável cargo para voltar quando realizava o cadastro para usar no front
        String cargo = funcionario.getCargo();

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .cargo(cargo)
                .build();
    }


    // EXPLICAÇÃO: Realiza o login tanto do funcionário quanto do aluno
    // a partir de um único endpoint.
    public AuthenticationResponse login(AuthenticationRequest request){

        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getEmail(),
                request.getSenha())
        );

        // quando a pessoa fazer login vai retornar o JSON com esses dados, para retornar na tela de perfil
        Integer id;
        String nomeSobrenome;
        String telefone;
        String statusPlano;
        String dataNascimento;
        String sexo;
        String plano;
        String email;
        String graduacao;
        String aulasProxGrad;
        String exameMedico;
        String role;
        UserDetails userEmail;

        var aluno = alunoRepository.findByEmail(request.getEmail());
        var funcionario = funcionarioRepository.findByEmail(request.getEmail());


        if(funcionario.isPresent()){
            id = funcionario.get().getId();
            nomeSobrenome = funcionario.get().getNome() + " " +funcionario.get().getSobrenome();
            telefone = funcionario.get().getTelefone();
            statusPlano = null;
            dataNascimento = funcionario.get().getDataNascimento();
            sexo = funcionario.get().getSexo();
            plano = null;
            email = funcionario.get().getEmail();
            exameMedico = null;
            graduacao = null;
            aulasProxGrad = null;
            role = funcionario.get().getRole().toString();
            userEmail = funcionario.get();
        } else if(aluno.isPresent()){
            id = aluno.get().getId();
            nomeSobrenome = aluno.get().getNome() + " " + aluno.get().getSobrenome();
            telefone = aluno.get().getTelefone();
            dataNascimento = aluno.get().getDataNascimento();
            sexo = aluno.get().getSexo();
            plano = aluno.get().getPlano();
            email = aluno.get().getEmail();
            exameMedico = aluno.get().getExameMedico();
            graduacao = aluno.get().getGraduacao();
            aulasProxGrad = aluno.get().getAulas_prox_grad();
            statusPlano = aluno.get().getStatusPlano();
            role = aluno.get().getRole().toString();
            userEmail = aluno.get();
        } else {
            // Apesar de reduntante, pois a classe ApplicationConfig lança a mesma exception,
            // este trecho de código reforça a captura da excetion caso seja lançada.
            throw new UserNotFoundException("Usuário não encontrado.");
        }

        var jwtToken = jwtService.generateToken(userEmail);

        return AuthenticationResponse.builder()
                .token(jwtToken)
                .id(id)
                .nomeSobrenome(nomeSobrenome)
                .telefone(telefone)
                .email(email)
                .dataNascimento(dataNascimento)
                .sexo(sexo)
                .plano(plano)
                .statusPlano(statusPlano)
                .graduacao(graduacao)
                .aulas_prox_graduacao(aulasProxGrad)
                .exameMedico(exameMedico)
                .role(Role.valueOf(role))
                .build();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getPassword() {
        return "";
    }

    @Override
    public String getUsername() {
        return "";
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
