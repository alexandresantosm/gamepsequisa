package br.com.devsuperior.gamepesquisa.resources;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.devsuperior.gamepesquisa.dto.RecordDTO;
import br.com.devsuperior.gamepesquisa.dto.RecordInsertDTO;
import br.com.devsuperior.gamepesquisa.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordResource {

	@Autowired
	private RecordService recordService;
	
	@GetMapping
	public ResponseEntity<Page<RecordDTO>> findAll(
			@RequestParam(value = "initialDate", defaultValue = "") String initialDate,
			@RequestParam(value = "lastDate", defaultValue = "") String lastDate,
			@RequestParam(value = "page", defaultValue = "0") Integer page,
			@RequestParam(value = "linesPerPage", defaultValue = "12") Integer linesPerPage,
			@RequestParam(value = "orderBy", defaultValue = "moment") String orderBy,
			@RequestParam(value = "direction", defaultValue = "DESC") String direction) {
		
		Instant minDate = ("".equals(initialDate)) ? null : Instant.parse(initialDate);
		Instant maxDate = ("".equals(lastDate)) ? null : Instant.parse(lastDate);
		
		if(linesPerPage == 0) {
			linesPerPage = Integer.MAX_VALUE;
		}
		
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		
		Page<RecordDTO> recordsDTO = recordService.findByMoments(minDate, maxDate, pageRequest);
		
		return ResponseEntity.ok(recordsDTO);
	}
	
	@PostMapping
	public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO recordInsertDTO) {
		RecordDTO recordDTO = recordService.insert(recordInsertDTO);
		
		return ResponseEntity.ok(recordDTO);
	}
}
