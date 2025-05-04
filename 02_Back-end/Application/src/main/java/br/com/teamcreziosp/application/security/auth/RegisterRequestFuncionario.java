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
public class RegisterRequestFuncionario {

    @NotBlank(message = "Campo obrigatório.")
    @Pattern(regexp = "^[A-Z]+(.)*")
    private String nome;

    @NotBlank(message = "Campo obrigatório.")
    @Pattern(regexp = "^[A-Z]+(.)*")
    private String sobrenome;

    @Column(name = "data_nasc")
    @NotBlank(message = "Campo obrigatório.")
    private String dataNascimento;

    @Email(message = "E-mail inválido.")
    @Column(unique = true)
    @NotBlank(message = "Campo obrigatório.")
    private String email;

    @ValidPassword
    @NotBlank(message = "Campo obrigatório.")
    private String senha;

    @NotBlank(message = "Campo obrigatório.")
    private Character sexo;

    @NotBlank(message = "Campo obrigatório.")
    private String telefone;

    @NotBlank(message = "Campo obrigatório.")
    private String rg;

    @CPF(message = "CPF inválido.")
    @NotBlank(message = "Campo obrigatório.")
    private String cpf;

    @NotBlank(message = "Campo Obrigatório.")
    private String cargo;

    private String endereco;
    private String numero;
    private String complemento;
    private String bairro;
    private String cidade;
    private String estado;
    private String cep;
}
