package br.com.teamcreziosp.application.model;

import br.com.teamcreziosp.application.security.Role;
import br.com.teamcreziosp.application.security.config.ValidPassword;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import org.hibernate.validator.constraints.br.CPF;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "Aluno", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class Aluno implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Integer id;

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

    @Column(name = "telefone")
    @NotBlank(message = "Campo obrigatório.")
    private String telefone;

    @NotBlank(message = "Campo obrigatório.")
    private String rg;

//    @CPF(message = "CPF inválido.")
    @NotBlank(message = "Campo obrigatório.")
    private String cpf;

    private String graduacao;

    private String plano;

    private String statusPlano;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Endereco endereco;

    @Enumerated(EnumType.STRING)
    private Role role;

    @JsonIgnore
    @ManyToMany
    @JoinTable(
            name = "aluno_aula",
            joinColumns = @JoinColumn(name = "aluno_id"),
            inverseJoinColumns = @JoinColumn(name = "aula_id")
    )
    private List<Aula> aulasInscritas = new ArrayList<>();

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
