---
name: diseno-visual-de-lujo
description: Enseña a la IA a diseñar como una agencia de desarrollo web de alto nivel. Define fuentes exactas, espaciados, sombras, estructuras de tarjetas y animaciones que hacen que un sitio web parezca de lujo. Bloquea todos los patrones genéricos o feos por defecto.
---

# Habilidad del Agente: Arquitecto UI/UX y Coreógrafo de Animaciones

## 1. Directiva Principal
- **Objetivo:** Diseñar experiencias digitales de nivel de agencia internacional, no solo páginas web simples. La salida debe transmitir profundidad táctil, ritmo espacial cinemático, micro-interacciones pulidas y animaciones fluidas e impecables.
- **Mandato de Variabilidad:** NUNCA generar exactamente el mismo diseño o estética dos veces seguidas. Combinar dinámicamente diferentes arquetipos de maquetación y textura manteniendo el lenguaje de diseño premium.

## 2. DIRECTIVA "CERO ABSOLUTO" (PATRONES PROHIBIDOS)
Si el código generado incluye CUALQUIERA de los siguientes elementos, el diseño falla instantáneamente:
- **Fuentes Prohibidas:** Inter, Roboto, Arial, Open Sans, Helvetica. (Usar fuentes de calidad como `Geist`, `Clash Display`, `Outfit`, `Plus Jakarta Sans` o `Poppins`).
- **Iconos Prohibidos:** Iconos gruesos o genéricos. Usar líneas finas y precisas (por ejemplo, Phosphor Light, Boxicons finos, Lucide).
- **Bordes y Sombras Prohibidas:** Bordes grises sólidos de 1px por defecto. Sombras oscuras y duras (`shadow-md`, `rgba(0,0,0,0.3)`).
- **Disposiciones Prohibidas:** Barras de navegación pegajosas pegadas sin margen al borde superior. Grillas simétricas aburridas de 3 columnas estilo Bootstrap sin grandes espacios vacíos.
- **Movimiento Prohibido:** Transiciones estándar `linear` o `ease-in-out`. Cambios de estado instantáneos sin interpolación.

## 3. MOTOR DE VARIABILIDAD CREATIVA

### A. Arquetipos de Estilo y Textura
1. **Cristal Etéreo (SaaS / IA / Tech):** Fondo negro OLED profundo (`#050505`) con degradados radiales sutiles (esferas de luz purpúreas/azules en el fondo). Tarjetas traslúcidas con `backdrop-blur-2xl` y bordes finos sutiles.
2. **Lujo Editorial (Estilo de Vida / Agencia):** Tonos crema cálidos (`#FDFBF7`), verde sabio atenuado o tonos espresso profundos. Fuentes Serif variables de alto contraste para titulares principales.
3. **Estructuralismo Suave (Consumidor / Salud / Portafolio):** Fondos gris plateado o completamente blancos. Tipografía audaz. Componentes flotantes con sombras ambientales suaves y muy difundidas.

### B. Arquetipos de Maquetación
1. **Bento Asimétrico:** Una grilla CSS estilo masonry con tamaños de tarjeta variados (por ejemplo, `col-span-8` junto a `col-span-4`) para romper la monotonía visual.
2. **Split Editorial:** Tipografía amplia en la mitad izquierda con tarjetas interactivas o imágenes en la derecha.

## 4. MICRO-ESTÉTICA Y COMPONENTES

### A. Arquitectura Anidada ("Doble Marco")
No colocar tarjetas o contenedores planos sobre el fondo. Deben parecer piezas de hardware pulido:
- **Carcasa Exterior:** Un `div` contenedor con un fondo sutil (`bg-white/5`), borde fino (`border border-white/10`), relleno (`p-2`) y radio grande (`rounded-3xl`).
- **Núcleo Interior:** El contenedor de contenido real con su propio color de fondo y radio concéntrico calculado.

### B. Botones con Iconos Anidados
- Los botones principales deben ser pildoras redondeadas (`rounded-full`) con espaciado amplio.
- Si un botón tiene un icono o flecha (↗), este va dentro de su propio contenedor circular traslúcido.

## 5. COREOGRAFÍA DE MOVIMIENTO
Usar siempre curvas de animación física en CSS (por ejemplo, `transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1)`).
