package br.com.teamcreziosp.application.model;

import br.com.teamcreziosp.application.enums.Modalidade;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Aula implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @NotNull(message = "Campo obrigatório.")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm")
    private LocalDateTime dataHora;

    @Enumerated(EnumType.ORDINAL)
    @NotNull(message = "Campo obrigatório.")
    private Modalidade modalidade;

    @ManyToOne
    @JoinColumn(name = "funcionario_id")
    @JsonIdentityReference(alwaysAsId = true)  // indica que ao serializar o objeto, o Jackson deve usar apenas o ID
    private Funcionario funcionario;

    @NotNull(message = "Campo obrigatório.")
    private Integer qtddLimiteAlunos;

    @JsonIgnore
    @ManyToMany(mappedBy = "aulasInscritas")
    private List<Aluno> alunosInscritos = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "aula", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Presenca> presencas = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of();
    }

    @Override
    public String getPassword() {
        return "";
    }

    @Override
    public String getUsername() {
        return "";
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
