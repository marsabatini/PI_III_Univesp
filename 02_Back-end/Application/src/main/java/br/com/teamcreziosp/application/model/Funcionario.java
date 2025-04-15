package br.com.teamcreziosp.application.model;


import br.com.teamcreziosp.application.security.Role;
import br.com.teamcreziosp.application.security.config.ValidPassword;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import jakarta.persistence.GeneratedValue;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import lombok.*;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@JsonIdentityInfo(generator = ObjectIdGenerators.PropertyGenerator.class, property = "id")
@Table(name = "Funcionario", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "tipo", discriminatorType = DiscriminatorType.STRING)
public class Funcionario implements UserDetails {

    @Id
    @GeneratedValue
    private Integer id;

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
    private String sexo;

    @NotBlank(message = "Campo obrigatório.")
    private String telefone;

    @NotBlank(message = "Campo obrigatório.")
    private String rg;

    @CPF(message = "CPF inválido.")
    @NotBlank(message = "Campo obrigatório.")
    private String cpf;

    @NotBlank(message = "Campo obrigatório.")
    private String cargo;

    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return senha;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked(){
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired(){
        return true;
    }

    @Override
    public boolean isEnabled(){
        return true;
    }
}
