package br.com.teamcreziosp.application.security.config;

import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration{


    private final JwtAuthenticationFilter jwtAuthFilter;
    private final AuthenticationProvider authenticationProvider;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

        // ===> REFATORAR: acrescentar rotas.
        // ===> REFATORAR: acrescentar Roles nos RequestMatchers!!!
        // ===> REFATORAR: o endpoint cadastrofuncionario está funcionando, porém não com uma hasRole específica
        return http.
                httpBasic(AbstractHttpConfigurer::disable)
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(authHttpRequest -> authHttpRequest
                        .requestMatchers("/api/index",
                                        "/api/cadastro",
                                        "/api/login",
                                        "/api/aulaexperimental",
                                        "/api/aulaexperimental/consulta/query={email}",
                                        "/api/aulaexperimental/atualiza={email}",
                                        "/api/files/upload",
                                        "api/aulaexperimental/atualiza={email}",
                                        "/adm/alunos/{id}",
                                        "/adm/aulas",
                                        "/adm/aulas/{id}",
                                        "/adm/aulas/adicionaraluno/{idAula}/{idAluno}",
                                        "/adm/aulas/removeraluno/{idAula}/{idAluno}",
                                        "/adm/aulas/alunosinscritosnaaula/{idAula}",
                                        "/adm/aulas/aulasdoaluno/{idAluno}",
                                        "/api/funcionarios/{id}"
                                        ) //===> REFATORAR: permitir apenas Roles EXPERIMENTAL
                                        .permitAll()
                        .requestMatchers("/api/agenda").hasAuthority("EXPERIMENTAL")
                        .requestMatchers("/api/aluno/agenda").hasAuthority("ALUNO")
                        .requestMatchers("/api/cadastrofuncionario").hasAuthority("ADMIN")
                        .requestMatchers("/adm/alunos").hasAuthority("ADMIN")
                        .requestMatchers("/api/funcionarios").hasAuthority("ADMIN"))  //===> Endpoint funciona, mas acesso por hasRole não.
                        // COM hasAuthority() FUNCIONOU!

                .cors(Customizer.withDefaults())
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

}
