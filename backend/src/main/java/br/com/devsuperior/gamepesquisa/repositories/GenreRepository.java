package br.com.devsuperior.gamepesquisa.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.devsuperior.gamepesquisa.entities.Genre;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Long> {

}
