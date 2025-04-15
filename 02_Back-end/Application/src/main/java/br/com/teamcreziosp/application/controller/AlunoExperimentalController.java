package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.model.AlunoExperimental;
import br.com.teamcreziosp.application.repository.AlunoExperimentalRepository;
import br.com.teamcreziosp.application.service.AlunoExperimentalService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/aulaexperimental")
@RequiredArgsConstructor
public class AlunoExperimentalController {

    private final AlunoExperimentalRepository repository;
    private final AlunoExperimentalService service;

    // ===> REFATORAR: implementar o Service aqui com suas regras de negócio específicas.
    @GetMapping(path = "/consulta/query={email}")
    public ResponseEntity<Iterable<AlunoExperimental>> consulta(@Valid @PathVariable String email){
        return ResponseEntity.ok(repository.findByEmail(email));
    }

    // Criar enpoint para ATUALIZAR dia e horário para aula experimental
    @PatchMapping("/atualiza={email}")
    public ResponseEntity<AlunoExperimental> atualiza(@PathVariable String email, @RequestBody AlunoExperimental alunoExperimental){
        return ResponseEntity.ok(service.atualizarAlunoExperimental(email, alunoExperimental));
    }
}
