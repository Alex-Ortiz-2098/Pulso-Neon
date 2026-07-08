import { obtenerCarrito } from "./storage.js";
import { actualizarContador, mostrarMensaje } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mantiene el contador del carrito
    const carrito = obtenerCarrito();
    actualizarContador(carrito);

    // 2. Validación y envío controlado del formulario
    const formulario = document.querySelector("form");
    
    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            // FRENAMOS EL ENVÍO AUTOMÁTICO SIEMPRE AL PRINCIPIO
            evento.preventDefault(); 

            const nombre = formulario.querySelector("input[name='nombre'], input[type='text']");
            const email = formulario.querySelector("input[name='email'], input[type='email']");

            // Validar campos vacíos
            if (!nombre?.value.trim() || !email?.value.trim()) {
                mostrarMensaje("⚠️ Por favor, completa todos los campos para contactar a soporte.");
                return; // Cortamos la ejecución aquí si hay error
            }

            // Validar formato de correo
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email.value)) {
                mostrarMensaje("⚠️ Por favor, ingresa un correo electrónico válido.");
                return;
            }

            // SI TODO ESTÁ PERFECTO:
            // 1. Mostramos el mensaje al usuario
            mostrarMensaje("¡Validación exitosa! Conectando con el soporte de Pulso Neon... ⚡");
            
            // 2. Esperamos un segundo para que lea y RECIÉN AHÍ enviamos el formulario a Formspree
            setTimeout(() => {
                formulario.submit();
            }, 1000); // 1000 milisegundos = 1 segundo de pausa
        });
    }
});