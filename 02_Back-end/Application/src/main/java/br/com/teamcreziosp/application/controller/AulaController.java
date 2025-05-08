package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.model.Aluno;
import br.com.teamcreziosp.application.model.Aula;
import br.com.teamcreziosp.application.model.Funcionario;
import br.com.teamcreziosp.application.repository.AlunoRepository;
import br.com.teamcreziosp.application.repository.AulaRepository;
import br.com.teamcreziosp.application.repository.FuncionarioRepository;
import br.com.teamcreziosp.application.responses.AulaResponse;
import br.com.teamcreziosp.application.service.PresencaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/adm")
public class AulaController {

    @Autowired
    private AulaRepository aulaRepository;

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private PresencaService presencaService;

    @GetMapping("/aulas")
    public List<AulaResponse> findAll() {
        List<Aula> todasAsAulas = aulaRepository.findAll();
        List<AulaResponse> aulaResponses = new ArrayList<>();

        todasAsAulas.forEach(aula -> {
            aulaResponses.add(new AulaResponse(aula));
        });

        return aulaResponses;
    }

    @PostMapping("/aulas")
    @ResponseStatus(HttpStatus.CREATED)
    public void save(@RequestBody Aula aula) {
        Optional<Funcionario> funcionario = funcionarioRepository.findById(aula.getFuncionario().getId());

        if (funcionario.isPresent()) {
            aula.setFuncionario(funcionario.get());
            aulaRepository.save(aula);
        } else {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Professor não encontrado");
        }
    }

    @GetMapping("/aulas/{id}")
    public Optional<Aula> findById(@PathVariable(value = "id") Integer id) {
        return aulaRepository.findById(id);
    }

    @DeleteMapping("/aulas/{id}")
    public ResponseEntity<String> delete(@PathVariable(value = "id") Integer id) {
        Optional<Aula> buscarAula = aulaRepository.findById(id);

        if (buscarAula.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aula não encontrada.");
        }

        Aula aula = buscarAula.get();
        aulaRepository.delete(aula);
        return ResponseEntity.status(HttpStatus.OK).body("Aula excluída com sucesso.");
    }

    @PutMapping("/aulas")
    public Aula update(@RequestBody Aula aula) {
        return aulaRepository.save(aula);
    }

    //adicionar restricao de quantidade de alunos
    @PostMapping("/aulas/adicionaraluno/{idAluno}/{idAula}")
    public ResponseEntity<String> adicionarAluno(
            @PathVariable(value = "idAula") Integer idAula,
            @PathVariable(value = "idAluno") Integer idAluno)
    {
        Optional<Aula> buscarAula = aulaRepository.findById(idAula);
        if (buscarAula.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aula não encontrada.");
        }

        Optional<Aluno> buscarAluno = alunoRepository.findById(idAluno);
        if (buscarAluno.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aluno não encontrado.");
        }

        Aula aula = buscarAula.get();
        Aluno aluno = buscarAluno.get();

        if (!aula.getAlunosInscritos().contains(aluno)) {
            aluno.getAulasInscritas().add(aula);
            alunoRepository.save(aluno);

            return ResponseEntity.ok("Aluno inscrito com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Aluno já está inscrito nesta aula.");
        }
    }
    
    @DeleteMapping("/aulas/removeraluno/{idAluno}/{idAula}")
    public ResponseEntity<String> removerAluno(
            @PathVariable(value = "idAula") Integer idAula,
            @PathVariable(value = "idAluno") Integer idAluno)
    {
        Optional<Aula> buscarAula = aulaRepository.findById(idAula);
        if (buscarAula.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aula não encontrada.");
        }

        Optional<Aluno> buscarAluno = alunoRepository.findById(idAluno);
        if (buscarAluno.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Aluno não encontrado.");
        }

        Aula aula = buscarAula.get();
        Aluno aluno = buscarAluno.get();

        if (aula.getAlunosInscritos().contains(aluno)) {
            aluno.getAulasInscritas().remove(aula);
            alunoRepository.save(aluno);
            return ResponseEntity.ok("Aluno removido com sucesso.");
        } else {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Aluno não está inscrito nesta aula.");
        }
    }

    //buscar alunos inscritos em uma aula
    @GetMapping("/aulas/alunosinscritosnaaula/{idAula}")
    public ResponseEntity<List<String>> alunosInscritosNaAula(@PathVariable(value = "idAula") Integer idAula) {
        Optional<Aula> buscarAula = aulaRepository.findById(idAula);
        if (buscarAula.isEmpty()) {
            ArrayList<String> mensagemRetorno = new ArrayList<>();
            mensagemRetorno.add("Aula não encontrada");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(mensagemRetorno);
        }

        Aula aula = buscarAula.get();

        List<Aluno> alunosInscritos = aula.getAlunosInscritos();

        List<String> nomesAlunosInscritos =
                alunosInscritos
                        .stream()
                        .map(aluno -> (aluno.getNome() + " " + aluno.getSobrenome()))
                        .toList();

        return ResponseEntity.status(HttpStatus.OK).body(nomesAlunosInscritos);
    }

    //buscar quais aulas o aluno está inscrito: retorna uma lista com ID das aulas
    @GetMapping("/aulas/aulasdoaluno/{idAluno}")
    public ResponseEntity<List<AulaResponse>> aulasDoAluno(@PathVariable(value = "idAluno") Integer idAluno) {
        Optional<Aluno> buscarAluno = alunoRepository.findById(idAluno);

        if (buscarAluno.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        Aluno aluno = buscarAluno.get();
        List<Aula> aulasInscritas = aluno.getAulasInscritas();

        if (aulasInscritas.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        List<AulaResponse> aulasResponse = new ArrayList<>();

        aulasInscritas.forEach(aula -> aulasResponse.add(new AulaResponse(aula)));

        return ResponseEntity.status(HttpStatus.OK).body(aulasResponse);
    }

    @PostMapping("/aulas/registrarpresenca/{idAluno}/{idAula}")
    public ResponseEntity<String> registrarPresenca(
            @PathVariable(value = "idAluno") Integer idAluno,
            @PathVariable(value = "idAula") Integer idAula)
    {
        try {
            presencaService.registrarPresenca(idAluno, idAula);
            return ResponseEntity.ok("Presença confirmada com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }
}
