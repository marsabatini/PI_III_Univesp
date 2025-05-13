package br.com.teamcreziosp.application.security.auth;

import br.com.teamcreziosp.application.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {

    private String token;

    Integer id;

    String nomeSobrenome;

    String telefone;

    String email;

    String dataNascimento;

    Character sexo;

    String cargo;

    Role role;
}
