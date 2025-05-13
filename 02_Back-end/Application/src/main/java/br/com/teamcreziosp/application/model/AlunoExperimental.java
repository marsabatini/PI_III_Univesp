package br.com.teamcreziosp.application.model;


import br.com.teamcreziosp.application.enums.Role;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;
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
@Table(name = "Aluno_Experimental", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class AlunoExperimental implements UserDetails {

    @Id
    @GeneratedValue
    private Integer id;

    @NotBlank(message = "Campo obrigatório.")
    @Pattern(regexp = "^[A-Z]+(.)*")
    private String nomeCompleto;

    @Email(message = "E-mail inválido.")
    @Column(unique = true)
    @NotBlank(message = "Campo obrigatório.")
    private String email;

    @Column(name = "telefone")
    @NotBlank(message = "Campo obrigatório.")
    private String telefone;

    @Enumerated(EnumType.STRING)
    private Role role;

    private String modalidade;

    private String diaAula;

    private String horaAula;

    private boolean presenca;

    private int avaliacao;      // ===> REFATORAR: 1 a 5 estrelinhas

    @Size(min = 20, max = 500, message = "Seu comentário deve conter entre 50 e 500 caracteres.")
    private String comentario;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getPassword() {
        return "";
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

}
