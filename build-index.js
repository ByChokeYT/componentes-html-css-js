const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const SITE_URL = 'https://bychokeyt.github.io/componentes-html-css-js';

const categoryConfig = {
  'acordeones': { label: 'Acordeones', icon: 'bx-layer' },
  'banners': { label: 'Banners', icon: 'bx-news' },
  'barras-laterales': { label: 'Barras Laterales', icon: 'bx-sidebar' },
  'barras-navegacion': { label: 'Barras de Navegación', icon: 'bx-navigation' },
  'carruseles': { label: 'Carruseles', icon: 'bx-images' },
  'controles': { label: 'Controles UI', icon: 'bx-toggle-left' },
  'deslizadores': { label: 'Deslizadores', icon: 'bx-slider-alt' },
  'desplegables': { label: 'Desplegables', icon: 'bx-caret-down-circle' },
  'gsap': { label: 'GSAP Motion', icon: 'bx-movie-play' },
  'inicios-sesion': { label: 'Inicios de Sesión', icon: 'bx-lock-alt' },
  'menus': { label: 'Menús', icon: 'bx-menu' },
  'modales': { label: 'Modales', icon: 'bx-window-open' },
  'paneles-de-control': { label: 'Paneles de Control', icon: 'bx-pie-chart-alt-2' },
  'paralaje': { label: 'Paralaje', icon: 'bx-landscape' },
  'pies-de-pagina': { label: 'Pies de Página', icon: 'bx-dock-bottom' },
  'registros': { label: 'Registros', icon: 'bx-user-plus' },
  'tablas': { label: 'Tablas', icon: 'bx-table' },
  'tarjetas': { label: 'Tarjetas UI', icon: 'bx-id-card' },
  'trucos': { label: 'Trucos CSS', icon: 'bx-magic-wand' },
  'widgets': { label: 'Widgets', icon: 'bx-grid-alt' }
};

// Known custom names for specific items
const customNames = {
  'inicio-sesion-1': 'Inicio de Sesión 1 (Slide Card)',
  'inicio-sesion-2': 'Inicio de Sesión 2 (Modern Split & Social Auth)',
  'inicio-sesion-3': 'Inicio de Sesión 3',
  'inicio-sesion-4': 'Inicio de Sesión 4 (Geometric Switcher)',
  'inicio-sesion-5': 'Inicio de Sesión 5 (Sliding Dark Auth)',
  'inicio-sesion-6': 'Inicio de Sesión 6 (Hero Pill Switcher)',
  'inicio-sesion-7': 'Inicio de Sesión 7 (SaaS Glass Auth)',
  'inicio-sesion-8': 'Inicio de Sesión 8 (Wave Fluid Auth)',
  'inicio-sesion-9': 'Inicio de Sesión 9 (Kinetic Cyber Auth)',
  'barra-lateral-1': 'Barra Lateral 1 (Accordion Menu)',
  'barra-lateral-4': 'Barra Lateral 4 (Avatar & Status)',
  'carrusel-1': 'Carrusel 1 (Galería 3D)',
  'carrusel-2': 'Carrusel 2 (Modern Product)',
  'banner-1': 'Banner Hero 1',
  'banner-2': 'Banner Hero 2 (Video Background)',
  'gsap-1': 'Animación GSAP 1 (Scroll & Motion)',
  'gsap-2': 'Animación GSAP 2 (Interactive Motion)',
  'deslizador-1': 'Deslizador 1 (Range / Swiper)',
  'sticky-sidebar': 'Barra Lateral Fija (Sticky CSS)',
  'widget-css-1': 'Widget de Métricas (CSS)',
  'dashboard-1': 'Dashboard Panel de Control (CSS)'
};

function formatName(folder, cat) {
  if (customNames[folder]) return customNames[folder];

  // Translations and clean titles
  const prefixes = [
    { p: 'inicio-sesion-', r: 'Inicio de Sesión ' },
    { p: 'login-', r: 'Inicio de Sesión CSS ' },
    { p: 'barra-lateral-', r: 'Barra Lateral ' },
    { p: 'sidebar-', r: 'Barra Lateral CSS ' },
    { p: 'barra-navegacion-', r: 'Barra de Navegación ' },
    { p: 'navbar-', r: 'Barra de Navegación CSS ' },
    { p: 'pie-de-pagina-', r: 'Pie de Página ' },
    { p: 'footer-', r: 'Pie de Página CSS ' },
    { p: 'accordion-', r: 'Acordeón CSS ' },
    { p: 'acordeon-', r: 'Acordeón ' },
    { p: 'carrusel-', r: 'Carrusel ' },
    { p: 'carousel-', r: 'Carrusel CSS ' },
    { p: 'control-', r: 'Control UI ' },
    { p: 'dropdown-', r: 'Desplegable CSS ' },
    { p: 'signup-', r: 'Registro CSS ' },
    { p: 'card-', r: 'Tarjeta CSS ' },
    { p: 'parallax-', r: 'Paralaje CSS ' },
    { p: 'menu-', r: 'Menú CSS ' },
    { p: 'modal-', r: 'Modal ' },
    { p: 'tabla-', r: 'Tabla ' },
    { p: 'banner-', r: 'Banner ' },
    { p: 'widget-', r: 'Widget ' }
  ];

  for (const { p, r } of prefixes) {
    if (folder.startsWith(p)) {
      const num = folder.replace(p, '');
      return `${r}${num}`;
    }
  }

  return folder.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

function build() {
  const components = [];
  const codeBundle = {};
  const ignoredDirs = ['.git', '.claude', '.agents', '.qoder', '.windsurf', 'node_modules'];

  const categories = fs.readdirSync(rootDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !ignoredDirs.includes(d.name) && !d.name.startsWith('.'))
    .map(d => d.name)
    .sort();

  for (const cat of categories) {
    const catPath = path.join(rootDir, cat);
    const subfolders = fs.readdirSync(catPath, { withFileTypes: true })
      .filter(s => s.isDirectory())
      .map(s => s.name)
      .sort((a, b) => {
        return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
      });

    for (const sub of subfolders) {
      const subPath = path.join(catPath, sub);
      const htmlPath = path.join(subPath, 'index.html');
      if (!fs.existsSync(htmlPath)) continue;

      const files = fs.readdirSync(subPath);
      const jsFiles = files.filter(f => f.endsWith('.js') && f !== 'build-index.js');
      const cssFiles = files.filter(f => f.endsWith('.css'));

      const hasJS = jsFiles.length > 0;
      const techType = hasJS ? 'js' : 'css';

      const relHtml = `${cat}/${sub}/index.html`;
      const relCss = cssFiles.length > 0 ? `${cat}/${sub}/${cssFiles[0]}` : `${cat}/${sub}/styles.css`;
      const relJs = jsFiles.length > 0 ? `${cat}/${sub}/${jsFiles[0]}` : null;

      // Extract title from HTML if possible
      let pageTitle = '';
      try {
        const htmlContent = fs.readFileSync(htmlPath, 'utf8');
        codeBundle[relHtml] = htmlContent;

        const m = htmlContent.match(/<title>(.*?)<\/title>/i);
        if (m && m[1].trim() && m[1].trim().toLowerCase() !== 'document') {
          pageTitle = m[1].trim();
        }
      } catch (e) {}

      // CSS content
      if (cssFiles.length > 0) {
        try {
          const cssContent = fs.readFileSync(path.join(subPath, cssFiles[0]), 'utf8');
          codeBundle[`${cat}/${sub}/${cssFiles[0]}`] = cssContent;
          codeBundle[`${cat}/${sub}/styles.css`] = cssContent;
        } catch (e) {}
      }

      // JS content
      if (jsFiles.length > 0) {
        try {
          const jsContent = fs.readFileSync(path.join(subPath, jsFiles[0]), 'utf8');
          codeBundle[`${cat}/${sub}/${jsFiles[0]}`] = jsContent;
          codeBundle[`${cat}/${sub}/main.js`] = jsContent;
          codeBundle[`${cat}/${sub}/script.js`] = jsContent;
        } catch (e) {}
      }

      const formattedName = formatName(sub, cat);
      const displayName = pageTitle && !formattedName.includes('(') ? `${formattedName} — ${pageTitle}` : formattedName;

      const tags = [
        cat,
        sub,
        techType,
        hasJS ? 'javascript' : 'css puro',
        hasJS ? 'interactivo' : 'estilizado',
        categoryConfig[cat]?.label?.toLowerCase() || cat,
        ...sub.split('-')
      ];

      components.push({
        id: `${cat}-${sub}`,
        name: displayName,
        category: cat,
        folder: sub,
        path: relHtml,
        tech: techType, // 'js' | 'css'
        hasJS: hasJS,
        jsFile: relJs,
        cssFile: relCss,
        tags: Array.from(new Set(tags))
      });
    }
  }

  // Write code-data.js
  const codeDataContent = `// Archivo generado automáticamente por build-index.js (${new Date().toISOString()})\n` +
    `window.COMPONENTS_CODE = ${JSON.stringify(codeBundle, null, 2)};\n`;
  fs.writeFileSync(path.join(rootDir, 'code-data.js'), codeDataContent, 'utf8');

  // Write components-data.js
  const compDataContent = `// Archivo generado automáticamente por build-index.js (${new Date().toISOString()})\n` +
    `window.COMPONENTS_DATA = ${JSON.stringify(components, null, 2)};\n` +
    `window.CATEGORY_CONFIG = ${JSON.stringify(categoryConfig, null, 2)};\n`;
  fs.writeFileSync(path.join(rootDir, 'components-data.js'), compDataContent, 'utf8');

  // Generate SEO sitemap.xml
  const today = new Date().toISOString().split('T')[0];
  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  sitemapXml += `  <url>\n    <loc>${SITE_URL}/</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n`;

  for (const comp of components) {
    sitemapXml += `  <url>\n    <loc>${SITE_URL}/${comp.path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }
  sitemapXml += `</urlset>\n`;
  fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');

  // Generate robots.txt
  const robotsTxt = `# robots.txt para UI Components Hub\nUser-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`;
  fs.writeFileSync(path.join(rootDir, 'robots.txt'), robotsTxt, 'utf8');

  console.log(`\n========================================`);
  console.log(`✅ INDEXACIÓN Y SEO EXITOSOS`);
  console.log(`Total componentes: ${components.length}`);
  console.log(`- Con JavaScript: ${components.filter(c => c.hasJS).length}`);
  console.log(`- Pure CSS: ${components.filter(c => !c.hasJS).length}`);
  console.log(`- Total Categorías: ${categories.length}`);
  console.log(`- Archivos en code-data.js: ${Object.keys(codeBundle).length}`);
  console.log(`- URLs en sitemap.xml: ${components.length + 1}`);
  console.log(`- robots.txt generado`);
  console.log(`========================================\n`);
}

build();
