package br.com.devsuperior.gamepesquisa.repositories;

import java.time.Instant;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import br.com.devsuperior.gamepesquisa.entities.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Long> {

	@Query("SELECT record FROM Record record WHERE "
			+ "(coalesce(:initialDate, null) IS NULL OR record.moment >= :initialDate) AND "
			+ "(coalesce(:lastDate, null) IS NULL OR record.moment <= :lastDate)")
	Page<Record> findByMoments(Instant initialDate, Instant lastDate, Pageable pageable);

}
