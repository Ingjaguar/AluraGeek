const camposformulario = document.querySelectorAll("[required]");

camposformulario.forEach((campo) => {
    campo.addEventListener("blur",() => verificarCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

function verificarCampo(campo) {
    const mensajeError = campo.parentNode.querySelector(".mensaje-error");
    const validarInput = campo.checkValidity();

    if (!validarInput) {
        if (campo.name == "Nombre" || campo.name == "Precio") {
            mensajeError.textContent = `Debe ingresar un ${campo.name}`;            
        } else {
            mensajeError.textContent = `Debe ingresar una ${campo.name}`;
        }
    } else {
        mensajeError.textContent = "";
    }
}