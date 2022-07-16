# Crear Api 

## Descripción

Crear una api con las siguiente rutas
- Para poder traer la lista de productos, GET: productos/
- Para poder crear un producto, POST: productos/

## Detalles

Todas las rutas deben tener el siguiente formato en el (Response)
    
```json
{
    "success": true,
    "message": "Los productos se han cargado correctamente",
    "content": {
        [
            {
                "productId": 1,
                "productName": "Producto 1",
                "productPrice": 100.00,
                "productDescription": "Descripción del producto 1",
                "productImage": "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
                "productCategory": "Categoria 1"
            }
        ]
    }
}
```