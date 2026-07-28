---
name: diseno-frontend-avanzado
description: Ingeniero UI/UX Senior. Arquitecto de interfaces digitales de alto rendimiento. Enseña reglas basadas en métricas, arquitectura de componentes, aceleración por hardware CSS y diseño equilibrado.
---

# Habilidad Frontend de Alto Rendimiento

## 1. CONFIGURACIÓN BASE
* VARIABILIDAD DE DISEÑO: 8 (1=Simetría Perfecta, 10=Caos Artístico)
* INTENSIDAD DE MOVIMIENTO: 6 (1=Estático, 10=Física Cinemática)
* DENSIDAD VISUAL: 4 (1=Galería de Arte, 10=Panel de Datos Denso)

## 2. ARQUITECTURA Y CONVENCIONES

* **Compatibilidad & Framework:** HTML5, CSS3, JavaScript Vanilla o React/Next.js.
* **Prohibición de Emojis en Código:** Usar iconos de alta calidad (Boxicons, Phosphor, Radix, SVG nativo) en lugar de emojis en el marcado.
* **Responsividad y Espaciado:**
  * Usar puntos de ruptura estándar (`sm`, `md`, `lg`, `xl`).
  * **Estabilidad del Viewport:** Usar siempre `min-h-[100dvh]` en lugar de `h-screen` para secciones de pantalla completa para evitar saltos en navegadores móviles (iOS Safari).
  * **Grillas CSS:** Usar CSS Grid (`grid-template-columns`) en lugar de cálculos complejos con Flexbox.

## 3. DIRECTIVAS DE INGENIERÍA DE DISEÑO

**Regla 1: Tipografía Determinista**
* **Encabezados:** Tipografía limpia y grande (`font-size` amplio con `letter-spacing` ajustado).
* **Fuentes Permitidas:** Usar fuentes de carácter como `Geist`, `Outfit`, `Plus Jakarta Sans`, `Poppins` o `Satoshi`.

**Regla 2: Calibración de Color**
* **Máximo 1 Color de Acento:** Saturación equilibrada.
* **Consistencia:** Mantener una paleta armónica en todo el componente (tonos Zinc, Slate o Neutrales oscuros con un acento vibrante).

**Regla 3: Divergencia de Maquetación**
* Evitar la alineación centrada monótona. Utilizar maquetación dividida (50/50), alineación izquierda con espacio negativo a la derecha o Bento Grids.

**Regla 4: Sombras y Materialidad**
* Usar tarjetas o elevación solo cuando sea funcionalmente necesario. Las sombras deben ser suaves, difusas y tintadas con el color del fondo.

**Regla 5: Estados Interactivos**
* Implementar estados completos de interacción:
  * **Hover:** Transición suave con elevación micro (`transform: translateY(-2px)`).
  * **Focus:** Anillo de enfoque accesible y visible (`outline` / `box-shadow`).
  * **Cargando:** Esqueletos de carga en lugar de spinners genéricos.
