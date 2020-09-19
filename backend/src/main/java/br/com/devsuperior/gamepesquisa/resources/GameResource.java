package br.com.devsuperior.gamepesquisa.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devsuperior.gamepesquisa.entities.Game;
import br.com.devsuperior.gamepesquisa.repositories.GameRepository;

@RestController
@RequestMapping(value = "/games")
public class GameResource {

	
	@GetMapping
	public ResponseEntity<List<Game>> findAll() {
		List<Game> games = gameRepository.findAll();
		
		return ResponseEntity.ok(games);
	}
}
