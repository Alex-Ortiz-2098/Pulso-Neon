import { obtenerCarrito } from "./storage.js";
import { eliminarProducto, vaciarCarrito } from "./funcionesCarrito.js";
import { actualizarContador } from "./ui.js";

const renderizarCarrito = () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    
    const contenedor = document.getElementById("contenedor-carrito");
    const divAcciones = document.getElementById("acciones-carrito");
    if (!contenedor || !divAcciones) return;

    contenedor.innerHTML = "";
    divAcciones.innerHTML = "";

    if (!carrito.length) {
        contenedor.innerHTML = `<p style="font-size: 2rem; text-align: center; color: var(--color-primario); width: 100%;">Tu carrito en Pulso Neon está vacío 👾</p>`;
        return;
    }

    // 1. DIBUJAMOS LOS PRODUCTOS Y ARREGLAMOS LA IMAGEN
    carrito.forEach((producto, index) => {
        const tarjeta = document.createElement("article");
        tarjeta.classList.add("tarjeta-producto");
        tarjeta.style.flexDirection = "row";
        tarjeta.style.alignItems = "center";
        tarjeta.style.justifyContent = "space-between";
        tarjeta.style.padding = "1rem 2rem";

        // SOLUCIÓN IMAGEN: Le agregamos el "../" para que salga de la carpeta pages y encuentre la imagen
        const rutaImagen = producto.img.startsWith("../") ? producto.img : `../${producto.img}`;

        tarjeta.innerHTML = `
            <div style="display: flex; align-items: center; gap: 2rem;">
                <img src="${rutaImagen}" alt="${producto.nombre}" style="width: 8rem; height: 8rem; object-fit: cover; border-radius: 0.5rem;">
                <div>
                    <h4 class="tarjeta-producto__titulo" style="font-size: 1.6rem;">${producto.nombre}</h4>
                    <p class="tarjeta-producto__precio" style="font-size: 1.6rem;">$${producto.precio.toLocaleString("es-AR")}</p>
                </div>
            </div>
            <button class="btn btn--secundario" style="border-color: var(--color-terciario); color: var(--color-terciario);">Eliminar</button>
        `;

        const btnEliminar = tarjeta.querySelector("button");
        btnEliminar.addEventListener("click", () => {
            eliminarProducto(index);
            renderizarCarrito(); // Recarga la página para actualizar el Total
        });

        contenedor.appendChild(tarjeta);
    });

    // 2. CÁLCULO DEL PRECIO TOTAL PENDIENTE PARA EL TP
    // Sumamos todos los precios del carrito con un reduce
    const precioTotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);

    const tituloTotal = document.createElement("h3");
    tituloTotal.style.color = "var(--color-primario)";
    tituloTotal.style.fontFamily = "var(--fuente-titulo)";
    tituloTotal.style.fontSize = "2.5rem";
    tituloTotal.style.marginBottom = "1.5rem";
    tituloTotal.textContent = `TOTAL: $${precioTotal.toLocaleString("es-AR")} ⚡`;

   // 1. Botón para COMPRAR (Simulación)
    const btnComprar = document.createElement("button");
    btnComprar.classList.add("btn", "btn--primario");
    btnComprar.style.marginBottom = "1rem";
    btnComprar.textContent = "Finalizar Compra 🚀";
    
    // AGREGA ESTO PARA DEPURAR (ver si el botón responde)
    btnComprar.onclick = () => {
        console.log("¡Click detectado!");
        alert("¡Compra realizada con éxito! Gracias por confiar en Pulso Neon. 👾");
        
        vaciarCarrito();
        renderizarCarrito();
    };

    // 2. Botón para vaciar (Ya lo teníamos)
    const btnVaciar = document.createElement("button");
    btnVaciar.classList.add("btn", "btn--secundario");
    btnVaciar.textContent = "Vaciar Carrito";
    btnVaciar.addEventListener("click", () => {
        vaciarCarrito();
        renderizarCarrito();
    });

    // Agregamos ambos al contenedor de acciones
    divAcciones.appendChild(btnComprar);
    divAcciones.appendChild(btnVaciar);
};

document.addEventListener("DOMContentLoaded", () => {
    renderizarCarrito();
});