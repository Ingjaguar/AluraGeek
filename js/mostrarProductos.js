import { conexionAPI } from "./conexionAPI.js";

const lista = document.querySelector("[data-card]");

// CREAR PRODUCTOS
export default function crearCard(id,titulo,precio,imagen){
    const producto = document.createElement("li");
    //producto.setAttribute("id", "card")
    producto.className ="card card-compact w-full md:w-64 shadow-xl mt-4 justify-center"
    producto.innerHTML=
        `
        <figure>
            <img src="${imagen}" alt="imagen class="rounded-xl"/>
        </figure>
        <div class="card-body">
            <h2 class="card-title">${titulo}</h2>
            <p>${precio}</p>
            <button class="btn btn-primary justify-end">Buy Now</button>
            <button id="deleteButton" class="btn btn-error" data-id="${id} onclick = ${eliminaProducto(id) } ">Delete</button>
        </div>
        `
    
    /* const btnDelete = document.querySelectorAll("[data-id]").attributes;
    console.log(btnDelete); */
    /* btnDelete.addEventListener('click', () => {
        conexionAPI.borrarProducto(id);
    }) */
    
    return producto;
}

//const botones = document.querySelectorAll("[data-id]").values;
//console.log(botones);
/* 
botones.forEach(elemento => {
    const btn = elemento.getAttribute('data-id');
    console.log(btn);
})

btn.addEventListener('click', async function () {
    const itemId = this.getAttribute('data-id');
    try {
        const message = await borrarCard(itemId);
        console.log(message);
        // Aquí puedes actualizar la UI para reflejar que el ítem fue eliminado
    } catch (error) {
        console.error('Error:', error.message);
    }
}); */


//const btnesBorrar = document.querySelectorAll("[data-id]");
/* const listaAPI = await conexionAPI.listarProductos();
console.log(listaAPI);

listaAPI.forEach(btn => {
    const id = document.querySelector("[data-id]");
    console.log("ID del botón: " + id);



    /* btn.addEventListener("click", (evento) => {
        evento.preventDefault();
        eliminaProducto(id);
    }) 
}); */

async function eliminaProducto(id) {
    //Conexion API
    /* const listaAPI = await conexionAPI.listarProductos();
    console.log(listaAPI);
    
    listaAPI.forEach(product => {
        //console.log("Producto: ",product.id)
        const btn = elemento.getAttribute('data-id').value;
        console.log(btn);
        
    }) */
    conexionAPI.borrarProducto(id) 
    
}
//eliminaProducto();

async function listaProductos(){
    //Conexion API
    const listaAPI = await conexionAPI.listarProductos();
    //Listar productos
    listaAPI.forEach(product => lista.appendChild( //Appendchild agrega elementos
        crearCard(
            product.id,
            product.titulo,
            product.precio,
            product.imagen            
        )));
    /* 
    try {
        //Conexion API
        const listaAPI = await conexionAPI.listarProductos();
        //Listar productos
        listaAPI.forEach(product => lista.appendChild( //Appendchild agrega elementos
            crearCard(
                product.titulo,
                product.precio,
                product.imagen,
                product.id
            )));
    } catch (erorr) {
        //Enviar mensaje de Error
        lista.innerHTML = '<h1 class="text-2xl my-4">Ha ocurrido un error de conexión</h1>'
    }*/
    
}
listaProductos();