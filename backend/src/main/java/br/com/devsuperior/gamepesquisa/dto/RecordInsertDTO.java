package br.com.devsuperior.gamepesquisa.dto;

import java.io.Serializable;

public class RecordInsertDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String game;
	private Integer age;
	private Long gameId;
	
	public RecordInsertDTO() {}

	public String getGame() {
		return game;
	}

	public void setGame(String game) {
		this.game = game;
	}

	public Integer getAge() {
		return age;
	}

	public void setAge(Integer age) {
		this.age = age;
	}

	public Long getGameId() {
		return gameId;
	}

	public void setGameId(Long gameId) {
		this.gameId = gameId;
	}

}
