import { conexionAPI } from "./conexionAPI.js";

//ELIMINAR PRODUCTO
async function borrarCard(id) {
    try {
        await conexionAPI.borrarProducto(id);
    } catch (error) {
        console.log(error);
    }
}
//borrarCard(id);
const botones = document.querySelectorAll("[data-id]");

console.log(botones);

/* botones.forEach(elemento => {
    const btn = elemento.getAttribute('data-id');
    console.log(btn);
}) */