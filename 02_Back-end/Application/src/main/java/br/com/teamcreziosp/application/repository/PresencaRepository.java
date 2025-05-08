package br.com.teamcreziosp.application.repository;

import br.com.teamcreziosp.application.model.Presenca;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PresencaRepository extends JpaRepository<Presenca, Integer> {
}
