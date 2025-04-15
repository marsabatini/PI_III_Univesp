package br.com.teamcreziosp.application.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
@DiscriminatorValue("administrador")
public class Adm extends Funcionario {


}
