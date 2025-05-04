package br.com.teamcreziosp.application.security.auth;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


/*
*   EXPLICAÇÃO
*
*   Esta classe (CONTROLLER) é exclusiva para os ENDPOINTS de cadastro
*   e autenticação (login) a fim de diminuir a complexidade dos Controllers
*   de cada entidade (funcionários, alunos e alunos experimentais).
*   Além disso, ela concentra métodos exclusivos do Spring Security,
*   estabelecendo, de certo modo, um ecossistema próprio juntamente com
*   seus repositories, requests e services.
*
* */


@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    // ===> REFATORAR: a validaçao está funcionando, mas as mensagens de erro
    // de cada campo ainda não estão sendo retornadas, conforme os @Valids.
    // Porém, as Valitations estão funcionando.

    @PostMapping("/cadastroaluno")
    public ResponseEntity<AuthenticationResponse> cadastroAluno(@Valid @RequestBody RegisterRequestAluno request){

        return ResponseEntity.ok(service.cadastroAluno(request));
    }

    @PostMapping("/aulaexperimental")
    public ResponseEntity<AuthenticationResponse> cadastroAlunoExperimental(@Valid @RequestBody RegisterRequestAlunoExperimental request){

        return ResponseEntity.ok(service.cadastroAlunoExperimental(request));
    }

    @PostMapping("/cadastrofuncionario")
    public ResponseEntity<AuthenticationResponse> cadastroFuncionario(@Valid @RequestBody RegisterRequestFuncionario request){

        return ResponseEntity.ok(service.cadastroFuncionario(request));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@Valid @RequestBody AuthenticationRequest request){

        return ResponseEntity.ok(service.login(request));
    }

    @GetMapping("/ping")
    public ResponseEntity<String> ping(){
        return ResponseEntity.ok("pong");
    }
}
