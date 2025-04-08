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
    private String sexo;

    @NotBlank(message = "Campo obrigatório.")
    private String telefone;

    @NotBlank(message = "Campo obrigatório.")
    private String rg;

//    @CPF(message = "CPF inválido.")
    @NotBlank(message = "Campo obrigatório.")
    private String cpf;

    private String graduacao;

    private String exameMedico;

    private String aulas_prox_grad;

    private String plano;

    private String statusPlano;

    @NotBlank(message = "Campo obrigatório.")
    private String endereco;

    @NotBlank(message = "Campo obrigatório.")
    private String numEndereco;

    @NotBlank(message = "Campo obrigatório.")
    private String cidade;

    @NotBlank(message = "Campo obrigatório.")
    private String cep;

}
