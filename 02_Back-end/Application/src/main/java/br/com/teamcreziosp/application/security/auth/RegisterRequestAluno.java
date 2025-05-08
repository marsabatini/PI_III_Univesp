package br.com.teamcreziosp.application.security.auth;

import br.com.teamcreziosp.application.security.config.ValidPassword;
import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import org.hibernate.validator.constraints.br.CPF;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class RegisterRequestAluno {

    @NotBlank(message = "Campo obrigatório.")
    private String nome;

    @NotBlank(message = "Campo obrigatório.")
    private String sobrenome;

    @NotBlank(message = "Campo obrigatório.")
    private String dataNascimento;

    @Email(message = "E-mail inválido.")
    @NotBlank(message = "Campo obrigatório.")
    private String email;

    @ValidPassword
    @NotBlank(message = "Campo obrigatório.")
    private String senha;

    private Character sexo;

    @NotBlank(message = "Campo obrigatório.")
    private String telefone;

    @NotBlank(message = "Campo obrigatório.")
    private String rg;

    @NotBlank(message = "Campo obrigatório.")
    private String cpf;

    private String endereco;
    private String numero;
    private String complemento;
    private String bairro;
    private String cidade;
    private String estado;
    private String cep;
}
