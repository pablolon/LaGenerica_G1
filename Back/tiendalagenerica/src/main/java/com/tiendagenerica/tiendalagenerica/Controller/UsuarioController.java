package com.tiendagenerica.tiendalagenerica.Controller;

public class UsuarioController {

	
	
	
	
	
	
	@PostMapping("/usuarios")
	public ResponseEntity<Usuario> createUsuario(@RequestBody Usuario user) {
		try {
			Usuario _usuario = usuarioRepository.save(
					new Usuario(user.getUsername(), user.getPassword(), user.getNombre_completo(), user.getEmail()));
			return new ResponseEntity<>(_usuario, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
