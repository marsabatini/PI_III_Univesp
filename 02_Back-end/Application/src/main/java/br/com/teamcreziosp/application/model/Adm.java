package br.com.teamcreziosp.application.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.EqualsAndHashCode;

@EqualsAndHashCode(callSuper = true)
@Data
@Entity
@DiscriminatorValue("administrador")  // define o tipo específico da entidade (subclasse)
public class Adm extends Funcionario {


}
