package org.group19.backend.services;


import org.group19.backend.models.AuthenticationResponse;
import org.group19.backend.models.User;
import org.group19.backend.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;



@Service
public class AuthenticationService {

	
	private final UserRepository repository;
	private final PasswordEncoder passwordEncoder;
	private final JwtService jwtService;
	private final AuthenticationManager authenticationManager;
	
	
	public AuthenticationService(UserRepository repository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager authenticationManager) {
		this.repository = repository;
		this.passwordEncoder = passwordEncoder;
		this.jwtService = jwtService;
		this.authenticationManager = authenticationManager;
	}
	
	public AuthenticationResponse register(User request) {
		User user = new User();
		user.setUsername(request.getUsername());
		user.setEmail(request.getEmail());
		user.setPassword(passwordEncoder.encode(request.getPassword()));
		
		user.setRole(request.getRole());
		
		user = repository.save(user);
		
		String token = jwtService.generateToken(user);
		
		return new AuthenticationResponse(token,
				user.getUsername(),
	            user.getEmail(),
	            user.getRole().name());
	}
	
	public AuthenticationResponse authenticate(User request) {
		authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(
								request.getUsername(),
								request.getPassword()
							)
				);
		
		User user = repository.findByUsername(request.getUsername()).orElseThrow();
		String token = jwtService.generateToken(user);
		return new AuthenticationResponse(token,
				user.getUsername(),
	            user.getEmail(),
	            user.getRole().name());
		
	}

	public AuthenticationManager getAuthenticationManager() {
		return authenticationManager;
	}
}
