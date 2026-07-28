---
name: rediseno-de-proyectos
description: Actualiza sitios web y aplicaciones existentes a una calidad premium. Audita el diseño actual, identifica patrones genéricos de IA y aplica estándares de diseño de alto nivel sin romper la funcionalidad.
---

# Habilidad de Rediseño de Proyectos

## Cómo Funciona

Al aplicarse a un proyecto existente, sigue esta secuencia:

1. **Escanear** — Lee el código del proyecto. Identifica el framework, el método de estilos (CSS Vanilla, Tailwind, etc.) y los patrones de diseño actuales.
2. **Diagnosticar** — Ejecuta la auditoría a continuación. Lista cada patrón genérico, punto débil y estado faltante.
3. **Corregir** — Aplica mejoras objetivas sobre el código existente. No reescribas desde cero. Mejora lo que ya existe.

## Auditoría de Diseño

### Tipografía

Corrige estos problemas comunes:

- **Fuentes genéricas o desalineadas.** Reemplaza por fuentes con carácter (`Geist`, `Outfit`, `Plus Jakarta Sans`, `Poppins`).
- **Encabezados sin presencia.** Aumenta el tamaño, ajusta el espaciado entre letras (`tracking-tight`) y reduce el alto de línea.
- **Párrafos demasiado anchos.** Limita el ancho de párrafo a un máximo recomendable (~65 caracteres por línea).
- **Subtítulos.** Evita el exceso de MAYÚSCULAS en todos los textos.

### Color y Superficies

- **Fondos negro puro `#000000`.** Reemplaza por negro carbón oscuro o azul/gris espacial profundo (`#090d16`, `#0f172a`).
- **Colores de acento sobresaturados.** Mantén la saturación por debajo del 80%.
- **Evitar degradados "estilo IA" chillones.** Utiliza bases neutras limpias con un único color de acento bien definido.
- **Sombras suaves.** Las sombras deben ser difusas y coincidir con la tonalidad del fondo.

### Maquetación

- **Estabilidad del Viewport:** Reemplaza `height: 100vh` por `min-height: 100dvh` para evitar saltos en navegadores móviles (iOS Safari).
- **Grillas Responsivas:** Utiliza CSS Grid para estructuras multicolumna estables.
- **Espacio de Respiración:** Duplica el espaciado interno si los componentes se ven apretados. Permite que el diseño respire.
