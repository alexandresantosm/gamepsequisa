package br.com.devsuperior.gamepesquisa.entities;

import java.io.Serializable;

import br.com.devsuperior.gamepesquisa.entities.enums.Platform;

public class Game implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String title;
	private Platform platform;
	
	public Game() {}

	public Game(Long id, String title, Platform platform) {
		super();
		this.id = id;
		this.title = title;
		this.platform = platform;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Platform getPlatform() {
		return platform;
	}

	public void setPlatform(Platform platform) {
		this.platform = platform;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Game other = (Game) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}
	
}