package org.group19.backend.models;

public class AuthenticationResponse {

	
	private String token;
	private String username;
    private String email;
    private String role;
    
    public AuthenticationResponse() {}

	public AuthenticationResponse(String token, String username, String email, String role) {
		super();
		this.token = token;
		this.username = username;
		this.email = email;
		this.role = role;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public AuthenticationResponse(String token) {
		super();
		this.token = token;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}
	
	
}
