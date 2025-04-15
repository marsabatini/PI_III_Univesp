package br.com.teamcreziosp.application.controller;

import br.com.teamcreziosp.application.model.Aluno;
import br.com.teamcreziosp.application.repository.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/adm")
public class AlunoController {

    @Autowired
    private AlunoRepository alunoRepository;

    @GetMapping("/alunos")
    public List<Aluno> findAll() {
        return alunoRepository.findAll();
    }

    @PostMapping("/alunos")
    public void save(@RequestBody Aluno aluno) {
        alunoRepository.save(aluno);
    }

    @GetMapping("/alunos/{id}")
    public Optional<Aluno> findById(@PathVariable(value = "id") Integer id) {
        return alunoRepository.findById(id);
    }

    @DeleteMapping("/alunos")
    public void delete(@RequestBody Aluno aluno) {
        alunoRepository.delete(aluno);
    }

    @PutMapping("/alunos")
    public Aluno update(@RequestBody Aluno aluno) {
        return alunoRepository.save(aluno);
    }
}
