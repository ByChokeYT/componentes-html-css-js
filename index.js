const componentsData = [
  // Inicios de Sesión
  { id: 'inicio-sesion-1', name: 'Inicio de Sesión 1 (Slide Card)', category: 'inicios-sesion', path: 'inicios-sesion/inicio-sesion-1/index.html', tags: ['login', 'auth', 'form', 'slider'] },
  { id: 'inicio-sesion-2', name: 'Inicio de Sesión 2 (Modern Split & Social Auth)', category: 'inicios-sesion', path: 'inicios-sesion/inicio-sesion-2/index.html', tags: ['login', 'auth', 'form', 'social'] },
  { id: 'inicio-sesion-3', name: 'Inicio de Sesión 3', category: 'inicios-sesion', path: 'inicios-sesion/inicio-sesion-3/index.html', tags: ['login', 'auth', 'form'] },
  { id: 'inicio-sesion-4', name: 'Inicio de Sesión 4 (Geometric Switcher)', category: 'inicios-sesion', path: 'inicios-sesion/inicio-sesion-4/index.html', tags: ['login', 'auth', 'form', 'geometric'] },
  { id: 'inicio-sesion-5', name: 'Inicio de Sesión 5 (Sliding Dark Auth)', category: 'inicios-sesion', path: 'inicios-sesion/inicio-sesion-5/index.html', tags: ['login', 'auth', 'form', 'dark', 'sliding'] },
  { id: 'inicio-sesion-6', name: 'Inicio de Sesión 6 (Hero Pill Switcher)', category: 'inicios-sesion', path: 'inicios-sesion/inicio-sesion-6/index.html', tags: ['login', 'auth', 'form', 'hero', 'pill'] },
  { id: 'inicio-sesion-7', name: 'Inicio de Sesión 7 (SaaS Glass Auth)', category: 'inicios-sesion', path: 'inicios-sesion/inicio-sesion-7/index.html', tags: ['login', 'auth', 'form', 'saas', 'glass'] },
  { id: 'inicio-sesion-8', name: 'Inicio de Sesión 8 (Wave Fluid Auth)', category: 'inicios-sesion', path: 'inicios-sesion/inicio-sesion-8/index.html', tags: ['login', 'auth', 'form', 'wave', 'fluid'] },
  { id: 'inicio-sesion-9', name: 'Inicio de Sesión 9 (Kinetic Cyber Auth)', category: 'inicios-sesion', path: 'inicios-sesion/inicio-sesion-9/index.html', tags: ['login', 'auth', 'form', 'cyber', 'biometric'] },

  // Barras Laterales
  { id: 'barra-lateral-1', name: 'Barra Lateral 1 (Accordion Menu)', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-1/index.html', tags: ['sidebar', 'menu', 'navigation'] },
  { id: 'barra-lateral-2', name: 'Barra Lateral 2', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-2/index.html', tags: ['sidebar', 'menu'] },
  { id: 'barra-lateral-3', name: 'Barra Lateral 3', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-3/index.html', tags: ['sidebar', 'menu'] },
  { id: 'barra-lateral-4', name: 'Barra Lateral 4 (Avatar & Status)', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-4/index.html', tags: ['sidebar', 'menu', 'profile'] },
  { id: 'barra-lateral-5', name: 'Barra Lateral 5', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-5/index.html', tags: ['sidebar', 'menu'] },
  { id: 'barra-lateral-6', name: 'Barra Lateral 6', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-6/index.html', tags: ['sidebar', 'menu'] },
  { id: 'barra-lateral-7', name: 'Barra Lateral 7', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-7/index.html', tags: ['sidebar', 'menu'] },
  { id: 'barra-lateral-8', name: 'Barra Lateral 8', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-8/index.html', tags: ['sidebar', 'menu'] },
  { id: 'barra-lateral-9', name: 'Barra Lateral 9', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-9/index.html', tags: ['sidebar', 'menu'] },
  { id: 'barra-lateral-10', name: 'Barra Lateral 10', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-10/index.html', tags: ['sidebar', 'menu'] },
  { id: 'barra-lateral-11', name: 'Barra Lateral 11', category: 'barras-laterales', path: 'barras-laterales/barra-lateral-11/index.html', tags: ['sidebar', 'menu'] },

  // Carruseles
  { id: 'carrusel-1', name: 'Carrusel 1 (Galería 3D)', category: 'carruseles', path: 'carruseles/carrusel-1/index.html', tags: ['carousel', 'slider', 'gallery'] },
  { id: 'carrusel-2', name: 'Carrusel 2 (Modern Product)', category: 'carruseles', path: 'carruseles/carrusel-2/index.html', tags: ['carousel', 'slider', 'cards'] },

  // Banners
  { id: 'banner-1', name: 'Banner Hero 1', category: 'banners', path: 'banners/banner-1/index.html', tags: ['banner', 'hero', 'header'] },
  { id: 'banner-2', name: 'Banner Hero 2 (Video Background)', category: 'banners', path: 'banners/banner-2/index.html', tags: ['banner', 'video', 'hero'] },

  // Controles
  { id: 'control-1', name: 'Control de Interfaz 1', category: 'controles', path: 'controles/control-1/index.html', tags: ['control', 'ui', 'button'] },
  { id: 'control-2', name: 'Control de Interfaz 2', category: 'controles', path: 'controles/control-2/index.html', tags: ['control', 'ui', 'toggle'] },
  { id: 'control-3', name: 'Control de Interfaz 3', category: 'controles', path: 'controles/control-3/index.html', tags: ['control', 'ui'] },
  { id: 'control-4', name: 'Control de Interfaz 4', category: 'controles', path: 'controles/control-4/index.html', tags: ['control', 'ui'] },

  // GSAP
  { id: 'gsap-1', name: 'Animación GSAP 1 (Scroll & Motion)', category: 'gsap', path: 'gsap/gsap-1/index.html', tags: ['gsap', 'animation', 'scroll'] },
  { id: 'gsap-2', name: 'Animación GSAP 2 (Interactive Motion)', category: 'gsap', path: 'gsap/gsap-2/index.html', tags: ['gsap', 'animation'] },

  // Navegación
  { id: 'barra-navegacion-1', name: 'Barra de Navegación 1', category: 'barras-navegacion', path: 'barras-navegacion/barra-navegacion-1/index.html', tags: ['navbar', 'header', 'menu'] },

  // Modales
  { id: 'modal-1', name: 'Modal Interactivo 1', category: 'modales', path: 'modales/modal-1/index.html', tags: ['modal', 'popup', 'dialog'] },

  // Pies de página
  { id: 'pie-de-pagina-1', name: 'Pie de Página 1', category: 'pies-de-pagina', path: 'pies-de-pagina/pie-de-pagina-1/index.html', tags: ['footer', 'navigation'] },

  // Tablas
  { id: 'tabla-1', name: 'Tabla de Datos 1', category: 'tablas', path: 'tablas/tabla-1/index.html', tags: ['table', 'data', 'grid'] },

  // Widgets
  { id: 'widget-1', name: 'Widget Interactivo 1', category: 'widgets', path: 'widgets/widget-1/index.html', tags: ['widget', 'card', 'stats'] },

  // Acordeones & Deslizadores
  { id: 'acordeon-1', name: 'Acordeón 1', category: 'acordeones', path: 'acordeones/acordeon-1/index.html', tags: ['accordion', 'faq', 'collapse'] },
  { id: 'deslizador-1', name: 'Deslizador 1 (Range / Swiper)', category: 'deslizadores', path: 'deslizadores/deslizador-1/index.html', tags: ['slider', 'range', 'controls'] }
];

const categoryConfig = {
  'todos': { label: 'Todos', icon: 'bx-grid-alt' },
  'inicios-sesion': { label: 'Inicios de Sesión', icon: 'bx-lock-alt' },
  'barras-laterales': { label: 'Barras Laterales', icon: 'bx-sidebar' },
  'carruseles': { label: 'Carruseles', icon: 'bx-images' },
  'banners': { label: 'Banners', icon: 'bx-news' },
  'controles': { label: 'Controles UI', icon: 'bx-toggle-left' },
  'gsap': { label: 'GSAP Motion', icon: 'bx-movie-play' },
  'barras-navegacion': { label: 'Navegación', icon: 'bx-navigation' },
  'modales': { label: 'Modales', icon: 'bx-window-open' },
  'pies-de-pagina': { label: 'Pies de Página', icon: 'bx-dock-bottom' },
  'tablas': { label: 'Tablas', icon: 'bx-table' },
  'widgets': { label: 'Widgets', icon: 'bx-layer' },
  'acordeones': { label: 'Acordeones', icon: 'bx-menu-alt-left' },
  'deslizadores': { label: 'Deslizadores', icon: 'bx-slider-alt' }
};

let currentCategory = 'todos';
let searchQuery = '';

let activeComponentPath = '';
let activeCodeLang = 'html';
const loadedCodeCache = {};

document.addEventListener('DOMContentLoaded', () => {
  const gridContainer = document.getElementById('grid-container');
  const searchInput = document.getElementById('search-input');
  const categoryFilters = document.getElementById('category-filters');
  const iconLegendGrid = document.getElementById('icon-legend-grid');
  const countNumberEl = document.getElementById('count-number');
  const modalPreview = document.getElementById('preview-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-title');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const deviceBtns = document.querySelectorAll('.device-btn');
  const modalIframeWrapper = document.getElementById('iframe-wrapper');

  const modeBtnPreview = document.getElementById('mode-btn-preview');
  const modeBtnCode = document.getElementById('mode-btn-code');
  const deviceSwitcher = document.getElementById('device-switcher');
  const codeViewerPanel = document.getElementById('code-viewer-panel');
  const codeDisplay = document.getElementById('code-display');
  const codeTabs = document.querySelectorAll('.code-tab');
  const copyCodeBtn = document.getElementById('copy-code-btn');
  const copyLangLabel = document.getElementById('copy-lang-label');

  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');

  // Keyboard shortcut Ctrl+K to search
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      searchInput.focus();
    }
    if (e.key === 'Escape' && modalPreview.classList.contains('active')) {
      closeModal();
    }
  });

  // Render Icon Reference Legend Grid
  const categoriesOnly = Object.keys(categoryConfig).filter(cat => cat !== 'todos');
  iconLegendGrid.innerHTML = categoriesOnly.map(cat => {
    const cfg = categoryConfig[cat];
    const count = componentsData.filter(c => c.category === cat).length;
    return `
      <div class="legend-chip" data-category="${cat}">
        <div class="chip-icon-box">
          <i class="bx ${cfg.icon}"></i>
        </div>
        <div class="chip-info">
          <span class="chip-name">${cfg.label}</span>
          <span class="chip-count">${count} componente${count > 1 ? 's' : ''}</span>
        </div>
      </div>
    `;
  }).join('');

  // Icon Legend click events
  iconLegendGrid.querySelectorAll('.legend-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const cat = chip.dataset.category;
      selectCategory(cat);
    });
  });

  // Render Filters Bar
  const categories = ['todos', ...new Set(componentsData.map(c => c.category))];
  categoryFilters.innerHTML = categories.map(cat => {
    const count = cat === 'todos' ? componentsData.length : componentsData.filter(c => c.category === cat).length;
    const cfg = categoryConfig[cat] || { label: cat, icon: 'bx-folder' };
    return `
      <button type="button" class="filter-btn ${cat === 'todos' ? 'active' : ''}" data-category="${cat}">
        <i class="bx ${cfg.icon}"></i> ${cfg.label} <span class="count">${count}</span>
      </button>
    `;
  }).join('');

  // Filter click events
  categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      selectCategory(btn.dataset.category);
    });
  });

  function selectCategory(cat) {
    currentCategory = cat;
    
    // Update filter buttons
    categoryFilters.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.category === cat);
    });

    // Update legend chips
    iconLegendGrid.querySelectorAll('.legend-chip').forEach(c => {
      c.classList.toggle('active', c.dataset.category === cat);
    });

    renderComponents();
  }

  // Search input event
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    renderComponents();
  });

  // Render Cards with Miniature Browser Window Frame & Icon Badges
  function renderComponents() {
    const filtered = componentsData.filter(item => {
      const matchesCategory = currentCategory === 'todos' || item.category === currentCategory;
      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery) || 
        item.category.toLowerCase().includes(searchQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery));
      return matchesCategory && matchesSearch;
    });

    if (countNumberEl) {
      countNumberEl.textContent = filtered.length;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>No se encontraron componentes</h3>
          <p>Intenta con otra búsqueda o selecciona una categoría diferente.</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map(item => {
      const cfg = categoryConfig[item.category] || { label: item.category, icon: 'bx-folder' };
      return `
        <div class="component-card" data-id="${item.id}">
          <!-- Mockup Header Bar -->
          <div class="mockup-header">
            <div class="mockup-dots">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <div class="mockup-address">${item.path}</div>
          </div>

          <!-- Preview Frame -->
          <div class="card-preview">
            <iframe src="${item.path}" loading="lazy" title="${item.name}"></iframe>
            <div class="preview-overlay">
              <button type="button" class="btn btn-primary open-preview-btn" data-path="${item.path}" data-name="${item.name}">
                <i class="bx bx-show-alt"></i> Ver en vivo
              </button>
              <button type="button" class="btn btn-secondary open-code-btn" data-path="${item.path}" data-name="${item.name}">
                <i class="bx bx-code-alt"></i> Código
              </button>
            </div>
          </div>

          <!-- Info Area -->
          <div class="card-info">
            <div class="card-title-row">
              <h4>${item.name}</h4>
              <span class="badge"><i class="bx ${cfg.icon}"></i> ${cfg.label}</span>
            </div>

            <div class="card-footer">
              <button type="button" class="path-btn copy-path-btn" data-path="${item.path}" title="Copiar ruta de la carpeta">
                📋 <span>${item.path}</span>
              </button>
              <a href="${item.path}" target="_blank" class="icon-link" title="Abrir en pestaña nueva">
                <i class="bx bx-export"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach preview modal triggers
    gridContainer.querySelectorAll('.open-preview-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(btn.dataset.path, btn.dataset.name, 'preview');
      });
    });

    // Attach open code modal triggers
    gridContainer.querySelectorAll('.open-code-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openModal(btn.dataset.path, btn.dataset.name, 'code');
      });
    });

    // Attach copy path triggers
    gridContainer.querySelectorAll('.copy-path-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.dataset.path;
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Ruta copiada: ${text}`);
        }).catch(() => {
          showToast(`Ruta: ${text}`);
        });
      });
    });
  }

  // Toast Notification
  function showToast(msg) {
    toastMsg.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => {
      toast.classList.remove('active');
    }, 2800);
  }

  // Modal Mode Switcher (Preview vs Code)
  modeBtnPreview.addEventListener('click', () => {
    modeBtnPreview.classList.add('active');
    modeBtnCode.classList.remove('active');
    deviceSwitcher.style.display = 'flex';
    modalIframeWrapper.style.display = 'block';
    codeViewerPanel.classList.remove('active');
  });

  modeBtnCode.addEventListener('click', () => {
    modeBtnCode.classList.add('active');
    modeBtnPreview.classList.remove('active');
    deviceSwitcher.style.display = 'none';
    modalIframeWrapper.style.display = 'none';
    codeViewerPanel.classList.add('active');
    loadComponentCode(activeComponentPath, activeCodeLang);
  });

  // Code Lang Tabs (HTML / CSS / JS)
  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      codeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCodeLang = tab.dataset.lang;
      copyLangLabel.textContent = activeCodeLang.toUpperCase();
      loadComponentCode(activeComponentPath, activeCodeLang);
    });
  });

  // Copy Code Button
  copyCodeBtn.addEventListener('click', () => {
    const code = codeDisplay.textContent;
    if (!code || code.startsWith('//') || code === 'Cargando código...') return;
    navigator.clipboard.writeText(code).then(() => {
      showToast(`¡Código ${activeCodeLang.toUpperCase()} copiado al portapapeles!`);
    });
  });

  // Load Component Source Code
  function loadComponentCode(htmlPath, lang) {
    const dir = htmlPath.substring(0, htmlPath.lastIndexOf('/'));
    let file = 'index.html';
    if (lang === 'css') file = 'styles.css';
    if (lang === 'js') file = 'main.js';

    const fullPath = `${dir}/${file}`;

    if (loadedCodeCache[fullPath]) {
      codeDisplay.textContent = loadedCodeCache[fullPath];
      return;
    }

    codeDisplay.textContent = `Cargando ${file}...`;

    fetch(fullPath)
      .then(res => {
        if (!res.ok) throw new Error('Archivo no disponible');
        return res.text();
      })
      .then(text => {
        loadedCodeCache[fullPath] = text;
        codeDisplay.textContent = text;
      })
      .catch(err => {
        codeDisplay.textContent = `// El archivo ${file} no está disponible para este componente.`;
      });
  }

  // Modal Functionality
  function openModal(path, name, initialMode = 'preview') {
    activeComponentPath = path;
    modalIframe.src = path;
    modalTitle.textContent = name;
    modalPreview.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (initialMode === 'code') {
      modeBtnCode.click();
    } else {
      modeBtnPreview.click();
    }
  }

  function closeModal() {
    modalPreview.classList.remove('active');
    modalIframe.src = '';
    document.body.style.overflow = '';
  }

  closeModalBtn.addEventListener('click', closeModal);
  modalPreview.addEventListener('click', (e) => {
    if (e.target === modalPreview) closeModal();
  });

  // Device Responsive Switcher
  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const device = btn.dataset.device;
      modalIframeWrapper.className = `iframe-wrapper ${device}`;
    });
  });

  // Initial Render
  renderComponents();
});
