import { agregarAlCarrito } from "./funcionesCarrito.js";
import { obtenerCarrito } from "./storage.js";
import { actualizarContador } from "./ui.js";

const renderizarProductos = () => {
    const contenedor = document.getElementById("contenedor-tarjetas");
    if (!contenedor) return;

    fetch("./data/productos.json")
        .then((response) => response.json())
        .then((data) => {
            contenedor.innerHTML = ""; // Limpiamos por si había algo escrito
            data.forEach((producto) => {
                // Creamos la tarjeta principal
                const tarjeta = document.createElement("article");
                tarjeta.classList.add("tarjeta-producto");

                // Estructura interna adaptada a tu diseño neón
                tarjeta.innerHTML = `
                    <img class="tarjeta-producto__imagen" src="${producto.img}" alt="${producto.nombre}">
                    <div class="tarjeta-producto__info">
                        <p class="tarjeta-producto__catalogo">${producto.categoria || 'Hardware'}</p>
                        <h4 class="tarjeta-producto__titulo">${producto.nombre}</h4>
                        <div class="tarjeta-producto__fila-inferior">
                            <p class="tarjeta-producto__precio">$${producto.precio.toLocaleString("es-AR")}</p>
                            <button class="tarjeta-producto__button" aria-label="agregar productos" type="button">
                                <img src="./icon/add-shopping.png" alt="Agregar al Carrito">
                            </button>
                        </div>
                    </div>
                `;

                // Activamos el clic del botón agregar al carrito
                const boton = tarjeta.querySelector(".tarjeta-producto__button");
                boton.addEventListener("click", () => {
                    agregarAlCarrito(producto);
                });

                contenedor.appendChild(tarjeta);
            });
        })
        .catch((error) => console.log("Error cargando productos:", error));
};

document.addEventListener("DOMContentLoaded", () => {
    const carrito = obtenerCarrito();
    actualizarContador(carrito);
    renderizarProductos();
    // --- LÓGICA PARA EL PRODUCTO DE LANZAMIENTO ---
const btnLanzamiento = document.getElementById("btn-lanzamiento");

if (btnLanzamiento) {
    btnLanzamiento.addEventListener("click", () => {
        // Creamos el objeto del teclado exclusivo
        const productoExclusivo = {
            id: "lanzamiento-1",
            nombre: "REDRAGON K552 KUMARA",
            precio: 85000, // Puedes cambiarlo por el precio que prefieras
            img: "img/Teclado Redragon K552 Kumara.png", // Asegúrate de que la ruta sea correcta
            categoria: "Lanzamiento Exclusivo"
        };
        
        // ¡Lo mandamos al carrito!
        agregarAlCarrito(productoExclusivo);
    });
}
});