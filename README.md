# ⚡ Pulso Neón - Aplicación Web E-Commerce

Pulso Neón es una plataforma de e-commerce gamer. Este proyecto evoluciona desde una base estática hacia una **aplicación web dinámica**, integrando lógica de programación, persistencia de datos y consumo de APIs.

## 🚀 Funcionalidades Dinámicas Implementadas
* **Catálogo Dinámico:** Los productos se renderizan automáticamente mediante `Fetch API` consumiendo un archivo JSON (`data/productos.json`).
* **Carrito de Compras Funcional:** * Agregar productos desde el catálogo o la sección de lanzamiento.
    * Visualización de lista de productos, cálculo de precios y totales.
    * Eliminación individual de productos y vaciado total del carrito.
* **Persistencia de Datos:** Uso de `localStorage` para que los productos agregados al carrito se mantengan incluso al recargar o cerrar el navegador.
* **Validación de Formularios:** Validación en tiempo real (campos obligatorios y formato de correo electrónico) antes del envío a Formspree.

## 🛠️ Tecnologías Utilizadas
* **Frontend:** HTML5 (Semántico), CSS3 (Flexbox, Grid, Responsive Design).
* **Lógica:** JavaScript (ES6 Modules, DOM Manipulation, Fetch API, LocalStorage).
* **Integraciones:** Formspree API (gestión de formularios).

## 📸 Vistas del Proyecto

A continuación, se detalla la adaptación visual de la interfaz en diferentes dispositivos:

### Vista de Escritorio (Desktop)
**Página Principal (Catálogo de Productos):**
![Vista Principal Escritorio](https://github.com/user-attachments/assets/0babc3a7-e882-4c55-b0ef-320a59435f3c)
![Vista de Catalogo](https://github.com/user-attachments/assets/6e8c3c15-721e-4043-9c09-628a8f9f8907)


**Página de Contacto:**
![Vista Contacto Escritorio](https://github.com/user-attachments/assets/f770b30b-0db3-48ba-b671-05d0207f7d55)


### Vista Móvil / Tablet (Responsive)
**Adaptación de la Interfaz:**
![Vista Móvil Pagina Principal](https://github.com/user-attachments/assets/e38ecde4-ab96-4615-8583-0c5eb9fca848)
![Vista Móvil Contacto](https://github.com/user-attachments/assets/26dc7f59-574b-4cee-ac4d-7f38a70bc3ce)



## 📦 Instalación y Uso Local
Al ser un proyecto Front-End, no requiere de la instalación de dependencias complejas. Para visualizar y probar el proyecto en un entorno local, seguí estos pasos:

1. Clonar el repositorio en tu equipo:
   ```bash
   git clone [https://github.com/TuUsuario/pulso-neon.git](https://github.com/TuUsuario/pulso-neon.git)

2. Abrir el archivo `index.html` en tu navegador web de preferencia, o ejecutarlo a través de una extensión como Live Server en tu editor de código.

## 📂 Estructura del Proyecto
La arquitectura fue modularizada para separar la lógica del carrito, el almacenamiento y la interfaz:

## 📂 Estructura del Proyecto
La arquitectura fue modularizada para separar la lógica del carrito, el almacenamiento y la interfaz:

```text
Pulso-Neon/
├── index.html
├── pages/
│   ├── contacto.html
│   └── carrito.html
├── css/
│   └── style.css
├── data/
│   └── productos.json
├── js/
│   ├── index.js
│   ├── carrito.js
│   ├── contacto.js
│   ├── funcionesCarrito.js
│   ├── ui.js
│   └── storage.js
└── assets/
    ├── img/
    └── icon/

## 🤝 Contribución
Las sugerencias y contribuciones para mejorar la eficiencia del código o la experiencia de usuario son bienvenidas. Siéntete libre de hacer un *fork* del repositorio y enviar un *pull request*.

## 📬 Contacto y Redes

**Alex Matías Ortiz**  
*Desarrollador Front-End*

* 📧 Email: [mati2000418@gmail.com](mailto:mati2000418@gmail.com)
* 💼 LinkedIn: [Alex-Ortiz](https://www.linkedin.com/in/alex-mat%C3%ADas-ortiz/)
* 💻 GitHub: [@Alex-Ortiz-2098](https://github.com/Alex-Ortiz-2098)

---
*Este proyecto forma parte de mi portafolio técnico, orientado a demostrar habilidades prácticas en maquetación web, interactividad y estándares de la industria.*
