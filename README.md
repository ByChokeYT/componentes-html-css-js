# 🚀 UI Components Hub — Biblioteca Maestra de Componentes Web (110 Componentes)

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-blue?style=for-the-badge)](LICENSE)

Una colección completa, unificada y modular de **110 componentes de interfaz de usuario (UI)** creados con tecnologías web nativas (**HTML5, CSS3, Vanilla JavaScript y animaciones GSAP**), listos para prototipar e integrar en cualquier proyecto web.

---

## 🌟 Características Principales

- ⚡ **Zero-Dependencies (Vanilla Web):** No requiere Node.js, React, Vue ni procesos de compilación complejos (`npm run build`). Funciona directamente en el navegador.
- 🎯 **110 Componentes Organizados:** 39 componentes interactivos con Vanilla JS y 71 componentes en Pure CSS3.
- 📱 **Visor Responsivo Multi-Dispositivo:** Modal con previsualización en tiempo real para **Escritorio (100%)**, **Tablet (768px)** y **Móvil (375px)**.
- 💻 **Inspección y Copiado de Código en 1 Clic:** Visor integrado para copiar al portapapeles código HTML, CSS o JS al instante.
- 🔍 **Búsqueda y Filtros Rápidos:** Búsqueda en vivo con atajo de teclado (`⌘K` o `/`), filtrado por tecnología (*Todos*, *Con JavaScript*, *Pure CSS*) y selector de 20 categorías con iconos de referencia rápida.
- 📦 **Indexación Automática:** Incluye script `build-index.js` para auto-generar datos y catálogo de componentes.

---

## 📂 Categorías de Componentes (20 Categorías • 110 Componentes)

| Categoría | Ruta | Cantidad | Descripción |
| :--- | :--- | :---: | :--- |
| 🔐 **Inicios de Sesión** | [`/inicios-sesion/`](./inicios-sesion/) | 23 | Formularios de Login, Auth moderno, Dark split, Glassmorphism y Biometría. |
| 📊 **Barras Laterales** | [`/barras-laterales/`](./barras-laterales/) | 19 | Navbars y sidebars colapsables, perfiles, menú acordeón y variantes CSS. |
| 🦶 **Pies de Página** | [`/pies-de-pagina/`](./pies-de-pagina/) | 15 | Footers estructurados, mapas de enlaces, newsletters y redes sociales. |
| 🧭 **Barras de Navegación** | [`/barras-navegacion/`](./barras-navegacion/) | 10 | Headers superiores responsivos, menús con dropdowns y estilos minimalistas. |
| 🪪 **Tarjetas UI** | [`/tarjetas/`](./tarjetas/) | 10 | Tarjetas de perfil, productos, pricing, glass cards y micro-animaciones. |
| 📝 **Registros** | [`/registros/`](./registros/) | 4 | Formularios de creación de cuenta y signup con validación visual. |
| 🎛️ **Controles UI** | [`/controles/`](./controles/) | 4 | Botones animados, toggles, switches interactivos y checkboxes creativos. |
| 🗂️ **Acordeones** | [`/acordeones/`](./acordeones/) | 3 | Acordeones de imágenes, menús colapsables y secciones FAQ. |
| 🎠 **Carruseles** | [`/carruseles/`](./carruseles/) | 3 | Carruseles 3D, sliders interactivos y tarjetas de productos. |
| 🔽 **Desplegables** | [`/desplegables/`](./desplegables/) | 3 | Menús desplegables multinivel y dropdown selectores. |
| 🍔 **Menús** | [`/menus/`](./menus/) | 3 | Menús hamburguesa animados y barras de navegación compactas. |
| 🚩 **Banners** | [`/banners/`](./banners/) | 2 | Encabezados Hero con fondos dinámicos e integración de video. |
| 🎬 **GSAP Motion** | [`/gsap/`](./gsap/) | 2 | Animaciones avanzadas controladas por scroll y eventos del cursor. |
| 🌄 **Efectos Paralaje** | [`/paralaje/`](./paralaje/) | 2 | Efectos de profundidad visual parallax en scroll. |
| 🧩 **Widgets** | [`/widgets/`](./widgets/) | 2 | Tarjetas de estadísticas, métricas y contadores (versiones JS y CSS). |
| 🪟 **Modales** | [`/modales/`](./modales/) | 1 | Ventana modal emergente con animaciones de entrada y overlay blur. |
| 📊 **Paneles de Control** | [`/paneles-de-control/`](./paneles-de-control/) | 1 | Dashboard UI estructurado con panel analítico. |
| 🎚️ **Deslizadores** | [`/deslizadores/`](./deslizadores/) | 1 | Slider de rango interactivo con control deslizante fluido. |
| 📋 **Tablas** | [`/tablas/`](./tablas/) | 1 | Tabla de datos elegante con estilos para paneles administrativos. |
| 🪄 **Trucos CSS** | [`/trucos/`](./trucos/) | 1 | Técnicas avanzadas como Sticky Sidebar y posicionamiento puro. |

---

## 🖥️ Cómo Ejecutar el Catálogo Interactivo

### 1. Abrir directamente
Abre el archivo [`index.html`](./index.html) en tu navegador preferido o utiliza extensiones como **Live Server** en VSCode.

### 2. Auto-Indexar nuevos componentes
Si agregas nuevas carpetas o componentes, ejecuta:
```bash
node build-index.js
```
El script escaneará automáticamente todas las carpetas, actualizará los metadatos y pre-empaquetará el código fuente en `code-data.js` y `components-data.js`.

---

## 🛠️ Tecnologías Utilizadas

- **HTML5 Semántico:** Estructura limpia y accesible.
- **CSS3 Moderno:** Variables CSS, Glassmorphism, CSS Grid, Flexbox y micro-animaciones fluidas.
- **Vanilla JavaScript (ES6+):** Manipulación limpia del DOM sin dependencias externas.
- **GSAP (GreenSock):** Librería para animaciones de alto rendimiento.
- **Google Fonts & Iconos:** Plus Jakarta Sans, Outfit, Fira Code y Boxicons.

---

## 📜 Licencia

Este proyecto está bajo la Licencia MIT. ¡Siéntete libre de utilizarlo, modificarlo y compartirlo en tus proyectos!
