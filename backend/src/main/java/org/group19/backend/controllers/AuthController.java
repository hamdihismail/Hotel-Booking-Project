package org.group19.backend.controllers;


import org.group19.backend.models.AuthenticationResponse;
import org.group19.backend.models.User;
import org.group19.backend.services.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    
    public AuthController(AuthenticationService authService) {
		this.authService = authService;
	}

	private final AuthenticationService authService;
	
	@PostMapping("/register")
	public ResponseEntity<AuthenticationResponse> register(@RequestBody User request){
		return ResponseEntity.ok(authService.register(request));
	}

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody User request){
		return ResponseEntity.ok(authService.authenticate(request));
	}
}
