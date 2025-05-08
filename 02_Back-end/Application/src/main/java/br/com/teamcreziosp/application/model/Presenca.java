package br.com.teamcreziosp.application.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Entity
public class Presenca {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "aula_id")
    private Aula aula;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "aluno_id")
    private Aluno aluno;

    private LocalDateTime horarioRegistro;

    public Presenca(Aula aula, Aluno aluno, LocalDateTime horarioRegistro) {
        this.aula = aula;
        this.aluno = aluno;
        this.horarioRegistro = horarioRegistro;
    }
}
