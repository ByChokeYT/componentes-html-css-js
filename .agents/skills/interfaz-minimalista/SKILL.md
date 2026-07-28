---
name: interfaz-minimalista
description: Interfaces limpias de estilo editorial. Paleta monocromática cálida, contraste tipográfico, grillas bento planas y tonos pastel atenuados. Sin degradados excesivos ni sombras pesadas.
---

# Habilidad: Arquitectura UI Minimalista Utilitaria

## 1. Resumen del Protocolo
Generación de interfaces web ultra-minimalistas estilo editorial, inspiradas en plataformas de trabajo de alto nivel (como Notion o Linear). Aplica paletas monocromáticas cálidas, jerarquías tipográficas cuidadas, amplio espacio negativo y arquitectura plana sin elementos recargados.

## 2. Restricciones Negativas (Elementos Prohibidos)
- NO usar fuentes genéricas como Arial o Times New Roman.
- NO usar sombras pesadas o de alto contraste (`shadow-lg`). Las sombras deben ser difusas y casi imperceptibles (< 0.05 de opacidad).
- NO usar fondos con colores primarios saturados (sin rojos o azules brillantes en el hero).
- NO usar degradados o neones excesivos.
- NO usar emojis en el marcado. Reemplazar por SVG nativos o fuentes de iconos limpias.

## 3. Arquitectura Tipográfica
- **Cuerpo y UI:** `font-family: 'Plus Jakarta Sans', 'Geist Sans', 'Switzer', sans-serif`.
- **Encabezados Editoriales:** `font-family: 'Playfair Display', 'Instrument Serif', 'Outfit', serif`.
- **Código y Metadatos:** `font-family: 'Fira Code', 'Geist Mono', monospace`.
- **Color de Texto:** El cuerpo de texto nunca debe ser negro puro (`#000000`), usar carbón suave (`#111111` o `#1e293b`) con `line-height` de `1.6`.

## 4. Paleta de Colores (Monocromo Cálido + Pasteles Suaves)
- **Fondo / Lienzo:** Blanco puro `#FFFFFF` o Hueso Cálido `#F7F6F3` / `#090d16`.
- **Superficie de Tarjetas:** `#FFFFFF` o `#121929`.
- **Bordes:** Gris ultra-ligero `#EAEAEA` o `rgba(255,255,255,0.08)`.
