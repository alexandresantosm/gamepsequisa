package br.com.devsuperior.gamepesquisa.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.devsuperior.gamepesquisa.dto.RecordDTO;
import br.com.devsuperior.gamepesquisa.dto.RecordInsertDTO;
import br.com.devsuperior.gamepesquisa.entities.Game;
import br.com.devsuperior.gamepesquisa.entities.Record;
import br.com.devsuperior.gamepesquisa.repositories.GameRepository;
import br.com.devsuperior.gamepesquisa.repositories.RecordRepository;

@Service
public class RecordService {

	@Autowired
	private RecordRepository recordRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	
	@Transactional(readOnly = true)
	public Page<RecordDTO> findByMoments(Instant initialDate, Instant lastDate, PageRequest pageRequest) {

		return recordRepository.findByMoments(initialDate, lastDate, pageRequest).map(record -> new RecordDTO(record));
	}
	
	@Transactional
	public RecordDTO insert(RecordInsertDTO recordInsertDTO) {
		Record record = new Record();
		
		record.setName(recordInsertDTO.getName());
		record.setMoment(Instant.now());
		record.setAge(recordInsertDTO.getAge());
		
		Game game = gameRepository.getOne(recordInsertDTO.getGameId());
		record.setGame(game);
		
		record = recordRepository.save(record);
		
		return new RecordDTO(record);
	}

}
