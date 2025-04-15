package br.com.teamcreziosp.application.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "endereco")
public class Endereco {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Campo obrigatório.")
    private String endereco;

    @NotBlank(message = "Campo obrigatório.")
    private String numero;

    @NotBlank(message = "Campo obrigatório.")
    private String complemento;

    @NotBlank(message = "Campo obrigatório.")
    private String bairro;

    @NotBlank(message = "Campo obrigatório.")
    private String cidade;

    @NotBlank(message = "Campo obrigatório.")
    private String estado;

    @NotBlank(message = "Campo obrigatório.")
    private String cep;
}
