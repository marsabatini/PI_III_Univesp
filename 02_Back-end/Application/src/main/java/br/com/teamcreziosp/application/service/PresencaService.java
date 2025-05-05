package br.com.teamcreziosp.application.service;

import br.com.teamcreziosp.application.model.Aluno;
import br.com.teamcreziosp.application.model.Aula;
import br.com.teamcreziosp.application.model.Presenca;
import br.com.teamcreziosp.application.repository.AlunoRepository;
import br.com.teamcreziosp.application.repository.AulaRepository;
import br.com.teamcreziosp.application.repository.PresencaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class PresencaService {

    @Autowired
    private PresencaRepository presencaRepository;

    @Autowired
    private AulaRepository aulaRepository;

    @Autowired
    private AlunoRepository alunoRepository;

    public void registrarPresenca(Integer idAluno, Integer idAula) throws Exception {
        Optional<Aula> buscarAula = aulaRepository.findById(idAula);
        Optional<Aluno> buscarAluno = alunoRepository.findById(idAluno);

        if(buscarAula.isPresent() && buscarAluno.isPresent()) {
            Aula aula = buscarAula.get();
            Aluno aluno = buscarAluno.get();
            if(buscarAula.get().getAlunosInscritos().contains(aluno)) {

                LocalDateTime dataHoraAula = aula.getDataHora();
                LocalDateTime dataHoraAtual = LocalDateTime.now();

                if (!dataHoraAtual.isBefore(dataHoraAula)) {
                    Presenca presenca = new Presenca(aula, aluno, LocalDateTime.now());
                    presencaRepository.save(presenca);
                } else {
                    throw new Exception("A presença só pode ser registrada após o início da aula.");
                }
            } else {
                throw new Exception("Aluno não cadastrado na aula.");
            }
        } else {
            throw new Exception("Aula ou aluno não existem.");
        }
    }
}
