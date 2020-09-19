package br.com.devsuperior.gamepesquisa.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.devsuperior.gamepesquisa.dto.RecordDTO;
import br.com.devsuperior.gamepesquisa.dto.RecordInsertDTO;
import br.com.devsuperior.gamepesquisa.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordResource {

	@Autowired
	private RecordService recordService;
	
	@PostMapping
	public ResponseEntity<RecordDTO> insert(@RequestBody RecordInsertDTO recordInsertDTO) {
		RecordDTO recordDTO = recordService.insert(recordInsertDTO);
		
		return ResponseEntity.ok(recordDTO);
	}
}
