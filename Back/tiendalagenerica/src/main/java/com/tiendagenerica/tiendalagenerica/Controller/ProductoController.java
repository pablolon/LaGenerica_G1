package com.tiendagenerica.tiendalagenerica.Controller;

public class ProductoController {

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	@PostMapping("/productos")
	public ResponseEntity<Producto> createProducto(@RequestBody Producto product) {
		try {
			Producto _producto = productoRepository.save(
					new Producto(product.getCodigoproducto(), product.getIvacompra(), product.getNitproveedor(), product.getNombreproducto(),
							product.getPreciocompra(), product.getPrecioventa()));
			return new ResponseEntity<>(_producto, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	
}
