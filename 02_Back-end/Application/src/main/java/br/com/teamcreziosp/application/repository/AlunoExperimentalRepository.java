package br.com.teamcreziosp.application.repository;

import br.com.teamcreziosp.application.model.AlunoExperimental;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AlunoExperimentalRepository extends JpaRepository<AlunoExperimental, Integer> {

    Iterable<AlunoExperimental> findByEmail(String email);

}
