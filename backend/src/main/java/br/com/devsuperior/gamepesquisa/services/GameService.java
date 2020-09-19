package br.com.devsuperior.gamepesquisa.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.devsuperior.gamepesquisa.dto.GameDTO;
import br.com.devsuperior.gamepesquisa.entities.Game;
import br.com.devsuperior.gamepesquisa.repositories.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository gameRepository;
	
	@Transactional(readOnly = true)
	public List<GameDTO> findAll() {
		List<Game> games = gameRepository.findAll();
		
		return games.stream().map(game -> new GameDTO(game)).collect(Collectors.toList());
	}
}
