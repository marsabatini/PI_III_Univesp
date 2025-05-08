package br.com.teamcreziosp.application.security;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.Objects;

@AllArgsConstructor
@Getter
public enum Role {

    ADMIN (1, "ROLE_ADMIN"),
    ALUNO(2, "ROLE_ALUNO"),
    CONVIDADO(3, "ROLE_CONVIDADO"),
    EXPERIMENTAL(4, "ROLE_EXPERIMENTAL"),
    PROFESSOR(5, "ROLE_PROFESSOR"),
    TREINADOR(6, "ROLE_TREINADOR");

    private Integer code;
    private String description;

    public static Role toEnum(Integer code) {

        if(Objects.isNull(code))
            return null;

        for(Role role : Role.values()) {
            if(code.equals(role.getCode()))
                return role;
        }

        throw new IllegalArgumentException("Invalid code: " + code);
    }
}
