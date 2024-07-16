async function listarProductos() {
    try {
        const conexion = await fetch("http://localhost:3001/videos");
        const conexionConvertida = conexion.json();
        console.log(conexionConvertida);
        return conexionConvertida;        
    } catch (error) {
        console.log(error);
    }
}
//FUNCION PARA AGREGAR PRODUCTOS
async function subirProducto(titulo,precio,imagen,id) {
    const conexion = await fetch("http://localhost:3001/videos", {
        method:"POST",
        headers: { "Content-type": "application/json"},
        body: JSON.stringify({
            titulo:titulo,
            precio:precio,
            imagen:imagen,
            id:id
        })
    });
    const conexionJSON = conexion.json();
    if (!conexion.ok) {
        throw new Error("Error al subir el producto");
    }
    return conexionJSON;
}
// ELIMINAR PRODUCTOS
async function borrarProducto(id) {
    
    const conexion = await fetch(`http://localhost:3001/videos/${id}`, {
        method: 'DELETE',
        headers: { "Content-type": "application/json" }
    });

    if (!conexion.ok) {
        //alert("Error al eliminar producto")
        throw new Error("Error al eliminar producto");
    }
    //alert("Item eliminado")
    console.log("Item eliminado");
    return conexion;    
}

export const conexionAPI = {
    listarProductos, subirProducto, borrarProducto
};

/*
VIDEO: https://www.youtube.com/watch?v=IX2hbrMWqpc
Desde el minuto 37 - 01,05,00
https://github.com/YurleidisLF/Alura-Geek/blob/main/js/borrarProducto.js
https://github.com/gbmarr/AluraGeek/blob/main/js/showProducts.js
*/