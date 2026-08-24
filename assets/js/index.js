/**
 * UI Components Hub — Showcase Interactivo de 110 Componentes Web
 * Vanilla JavaScript (ES6+) con soporte para Favoritos, Descarga ZIP,
 * Visor de Código Resaltado con Prism.js y Modo Responsivo.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements Selection
  const gridContainer = document.getElementById('grid-container');
  const searchInput = document.getElementById('search-input');
  const searchClearBtn = document.getElementById('search-clear-btn');
  const categoryFilters = document.getElementById('category-filters');
  const iconLegendGrid = document.getElementById('icon-legend-grid');
  const legendToggleBtn = document.getElementById('legend-toggle-btn');
  const legendToggleIcon = document.getElementById('legend-toggle-icon');
  const countNumberEl = document.getElementById('count-number');
  const resultsBadge = document.getElementById('results-badge');
  const sortSelect = document.getElementById('sort-select');
  const viewGridBtn = document.getElementById('view-grid-btn');
  const viewListBtn = document.getElementById('view-list-btn');

  // Header Actions
  const headerFavBtn = document.getElementById('header-fav-btn');
  const favCountBadge = document.getElementById('fav-count-badge');
  const helpShortcutsBtn = document.getElementById('help-shortcuts-btn');
  const shortcutsModal = document.getElementById('shortcuts-modal');
  const closeShortcutsBtn = document.getElementById('close-shortcuts-btn');

  // Preview Modal Elements
  const modalPreview = document.getElementById('preview-modal');
  const modalIframe = document.getElementById('modal-iframe');
  const modalTitle = document.getElementById('modal-title');
  const modalPathChip = document.getElementById('modal-path-chip');
  const modalOpenNewTabBtn = document.getElementById('modal-open-newtab-btn');
  const modalReloadBtn = document.getElementById('modal-reload-btn');
  const modalFavToggleBtn = document.getElementById('modal-fav-toggle-btn');
  const modalFavIcon = document.getElementById('modal-fav-icon');
  const modalDownloadZipBtn = document.getElementById('modal-download-zip-btn');
  const closeModalBtn = document.getElementById('close-modal-btn');
  const modalDotClose = document.getElementById('modal-dot-close');
  const modalDotExpand = document.getElementById('modal-dot-expand');
  const deviceBtns = document.querySelectorAll('.device-btn');
  const modalIframeWrapper = document.getElementById('iframe-wrapper');

  // Code Viewer Elements
  const modeBtnPreview = document.getElementById('mode-btn-preview');
  const modeBtnCode = document.getElementById('mode-btn-code');
  const deviceSwitcher = document.getElementById('device-switcher');
  const codeViewerPanel = document.getElementById('code-viewer-panel');
  const codeDisplay = document.getElementById('code-display');
  const codeTabs = document.querySelectorAll('.code-tab');
  const codeTabJs = document.getElementById('code-tab-js');
  const copyCodeBtn = document.getElementById('copy-code-btn');
  const copyLangLabel = document.getElementById('copy-lang-label');
  const htmlSizeTag = document.getElementById('html-size-tag');
  const cssSizeTag = document.getElementById('css-size-tag');
  const jsSizeTag = document.getElementById('js-size-tag');

  // Tech Filter Pills
  const techPills = document.querySelectorAll('.tech-pill');
  const techAllCount = document.getElementById('tech-all-count');
  const techJsCount = document.getElementById('tech-js-count');
  const techCssCount = document.getElementById('tech-css-count');
  const techFavCount = document.getElementById('tech-fav-count');

  // Hero Stats
  const statTotalNum = document.getElementById('stat-total-num');
  const statJsNum = document.getElementById('stat-js-num');
  const statCssNum = document.getElementById('stat-css-num');
  const statTotalBtn = document.getElementById('stat-total-btn');
  const statJsBtn = document.getElementById('stat-js-btn');
  const statCssBtn = document.getElementById('stat-css-btn');

  // Toast & Scroll Top
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-msg');
  const toastIcon = document.getElementById('toast-icon');
  const scrollTopBtn = document.getElementById('scroll-top-btn');

  // App Data & State
  const allComponents = window.COMPONENTS_DATA || [];
  const categoryConfig = window.CATEGORY_CONFIG || {};

  let currentCategory = 'todos';
  let currentTech = 'all'; // 'all' | 'js' | 'css' | 'fav'
  let currentSort = 'default';
  let currentView = localStorage.getItem('ui_view_mode') || 'grid';
  let searchQuery = '';

  let activeComponent = null;
  let activeCodeLang = 'html';
  const loadedCodeCache = {};

  // Favorites Management with LocalStorage
  function getFavorites() {
    try {
      return JSON.parse(localStorage.getItem('ui_fav_components') || '[]');
    } catch (e) {
      return [];
    }
  }

  function saveFavorites(favs) {
    try {
      localStorage.setItem('ui_fav_components', JSON.stringify(favs));
    } catch (e) {}
    updateFavoritesBadges();
  }

  function isFavorite(id) {
    const favs = getFavorites();
    return favs.includes(id);
  }

  function toggleFavorite(id) {
    let favs = getFavorites();
    if (favs.includes(id)) {
      favs = favs.filter(f => f !== id);
      showToast('Eliminado de favoritos', 'bx-star');
    } else {
      favs.push(id);
      showToast('¡Añadido a favoritos!', 'bxs-star');
    }
    saveFavorites(favs);
    renderComponents();
    if (activeComponent && activeComponent.id === id) {
      updateModalFavButton(id);
    }
  }

  function updateFavoritesBadges() {
    const count = getFavorites().length;
    if (favCountBadge) favCountBadge.textContent = count;
    if (techFavCount) techFavCount.textContent = count;
  }

  // Initialize Statistics
  const totalCount = allComponents.length;
  const jsCount = allComponents.filter(c => c.hasJS).length;
  const cssCount = allComponents.filter(c => !c.hasJS).length;

  if (techAllCount) techAllCount.textContent = totalCount;
  if (techJsCount) techJsCount.textContent = jsCount;
  if (techCssCount) techCssCount.textContent = cssCount;

  if (statTotalNum) statTotalNum.textContent = totalCount;
  if (statJsNum) statJsNum.textContent = jsCount;
  if (statCssNum) statCssNum.textContent = cssCount;

  updateFavoritesBadges();

  // Set Initial View Mode
  if (currentView === 'list') {
    gridContainer.classList.add('list-view');
    viewListBtn.classList.add('active');
    viewGridBtn.classList.remove('active');
  }

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    // Search focus: Cmd/Ctrl + K or '/'
    if (((e.ctrlKey || e.metaKey) && e.key === 'k') || (e.key === '/' && document.activeElement !== searchInput)) {
      e.preventDefault();
      searchInput.focus();
      searchInput.select();
    }
    // Close modal: Esc
    if (e.key === 'Escape') {
      if (shortcutsModal.classList.contains('active')) {
        closeShortcutsModal();
      } else if (modalPreview.classList.contains('active')) {
        closeModal();
      }
    }
    // Shortcuts help: '?'
    if (e.key === '?' && document.activeElement !== searchInput) {
      e.preventDefault();
      openShortcutsModal();
    }
    // Filter favorites: 'f' or 'F'
    if ((e.key === 'f' || e.key === 'F') && document.activeElement !== searchInput && !modalPreview.classList.contains('active')) {
      e.preventDefault();
      selectTech(currentTech === 'fav' ? 'all' : 'fav');
    }

    // Modal active shortcuts
    if (modalPreview.classList.contains('active')) {
      if (e.key === '1') setDeviceView('desktop');
      if (e.key === '2') setDeviceView('tablet');
      if (e.key === '3') setDeviceView('mobile');
      if (e.key === 'c' || e.key === 'C') modeBtnCode.click();
      if (e.key === 'p' || e.key === 'P' || e.key === 'v' || e.key === 'V') modeBtnPreview.click();
    }
  });

  // Search input handler
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    searchClearBtn.classList.toggle('active', searchQuery.length > 0);
    renderComponents();
  });

  searchClearBtn.addEventListener('click', () => {
    searchInput.value = '';
    searchQuery = '';
    searchClearBtn.classList.remove('active');
    searchInput.focus();
    renderComponents();
  });

  // Logo Click Handler (Reset filters & scroll to top)
  const logoRefreshBtn = document.getElementById('logo-refresh-btn');
  if (logoRefreshBtn) {
    logoRefreshBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchInput.value = '';
      searchQuery = '';
      searchClearBtn.classList.remove('active');
      selectCategory('todos');
      selectTech('all');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Tech Filter Pills
  techPills.forEach(pill => {
    pill.addEventListener('click', () => {
      selectTech(pill.dataset.tech);
    });
  });

  headerFavBtn.addEventListener('click', () => {
    selectTech(currentTech === 'fav' ? 'all' : 'fav');
  });

  if (statTotalBtn) statTotalBtn.addEventListener('click', () => selectTech('all'));
  if (statJsBtn) statJsBtn.addEventListener('click', () => selectTech('js'));
  if (statCssBtn) statCssBtn.addEventListener('click', () => selectTech('css'));

  function selectTech(tech) {
    currentTech = tech;
    techPills.forEach(p => p.classList.toggle('active', p.dataset.tech === tech));
    headerFavBtn.classList.toggle('active', tech === 'fav');
    renderCategoryFilters();
    renderLegendGrid();
    renderComponents();
  }

  // Sort Selector
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderComponents();
  });

  // View Switcher (Grid vs List)
  viewGridBtn.addEventListener('click', () => {
    currentView = 'grid';
    localStorage.setItem('ui_view_mode', 'grid');
    viewGridBtn.classList.add('active');
    viewListBtn.classList.remove('active');
    gridContainer.classList.remove('list-view');
  });

  viewListBtn.addEventListener('click', () => {
    currentView = 'list';
    localStorage.setItem('ui_view_mode', 'list');
    viewListBtn.classList.add('active');
    viewGridBtn.classList.remove('active');
    gridContainer.classList.add('list-view');
  });

  // Legend Collapse Toggle
  legendToggleBtn.addEventListener('click', () => {
    const isCollapsed = iconLegendGrid.classList.toggle('collapsed');
    legendToggleIcon.className = isCollapsed ? 'bx bx-chevron-down' : 'bx bx-chevron-up';
  });

  // Render Icon Reference Legend Grid
  function renderLegendGrid() {
    const categoriesOnly = Object.keys(categoryConfig);
    const favs = getFavorites();

    iconLegendGrid.innerHTML = categoriesOnly.map(cat => {
      const cfg = categoryConfig[cat];
      const count = allComponents.filter(c => {
        const matchesCategory = c.category === cat;
        let matchesTech = true;
        if (currentTech === 'js') matchesTech = c.hasJS;
        if (currentTech === 'css') matchesTech = !c.hasJS;
        if (currentTech === 'fav') matchesTech = favs.includes(c.id);
        return matchesCategory && matchesTech;
      }).length;

      const isActive = currentCategory === cat;
      return `
        <div class="legend-chip ${isActive ? 'active' : ''}" data-category="${cat}" style="${count === 0 ? 'opacity: 0.4;' : ''}">
          <div class="chip-icon-box">
            <i class="bx ${cfg.icon}"></i>
          </div>
          <div class="chip-info">
            <span class="chip-name">${cfg.label}</span>
            <span class="chip-count">${count} comp.</span>
          </div>
        </div>
      `;
    }).join('');

    iconLegendGrid.querySelectorAll('.legend-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const cat = chip.dataset.category;
        selectCategory(currentCategory === cat ? 'todos' : cat);
      });
    });
  }

  // Render Category Filter Buttons Bar
  function renderCategoryFilters() {
    const categories = ['todos', ...Object.keys(categoryConfig)];
    const favs = getFavorites();

    categoryFilters.innerHTML = categories.map(cat => {
      let count = 0;
      let label = 'Todos';
      let icon = 'bx-grid-alt';

      if (cat === 'todos') {
        count = allComponents.filter(c => {
          if (currentTech === 'js') return c.hasJS;
          if (currentTech === 'css') return !c.hasJS;
          if (currentTech === 'fav') return favs.includes(c.id);
          return true;
        }).length;
      } else {
        const cfg = categoryConfig[cat] || { label: cat, icon: 'bx-folder' };
        label = cfg.label;
        icon = cfg.icon;
        count = allComponents.filter(c => {
          const matchesCat = c.category === cat;
          let matchesTech = true;
          if (currentTech === 'js') matchesTech = c.hasJS;
          if (currentTech === 'css') matchesTech = !c.hasJS;
          if (currentTech === 'fav') matchesTech = favs.includes(c.id);
          return matchesCat && matchesTech;
        }).length;
      }

      const isActive = currentCategory === cat;
      return `
        <button type="button" class="filter-btn ${isActive ? 'active' : ''}" data-category="${cat}" style="${count === 0 && cat !== 'todos' ? 'opacity: 0.4;' : ''}">
          <i class="bx ${icon}"></i> ${label} <span class="count">${count}</span>
        </button>
      `;
    }).join('');

    categoryFilters.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectCategory(btn.dataset.category);
      });
    });
  }

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

  // Render Component Cards
  function renderComponents() {
    const favs = getFavorites();

    // 1. Filter
    let filtered = allComponents.filter(item => {
      const matchesCategory = currentCategory === 'todos' || item.category === currentCategory;
      
      let matchesTech = true;
      if (currentTech === 'js') matchesTech = item.hasJS;
      if (currentTech === 'css') matchesTech = !item.hasJS;
      if (currentTech === 'fav') matchesTech = favs.includes(item.id);

      const matchesSearch = !searchQuery || 
        item.name.toLowerCase().includes(searchQuery) || 
        item.category.toLowerCase().includes(searchQuery) ||
        item.folder.toLowerCase().includes(searchQuery) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery));

      return matchesCategory && matchesTech && matchesSearch;
    });

    // 2. Sort
    if (currentSort === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name, 'es'));
    } else if (currentSort === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name, 'es'));
    } else if (currentSort === 'category') {
      filtered.sort((a, b) => a.category.localeCompare(b.category, 'es'));
    } else if (currentSort === 'tech-js') {
      filtered.sort((a, b) => (b.hasJS ? 1 : 0) - (a.hasJS ? 1 : 0));
    } else if (currentSort === 'tech-css') {
      filtered.sort((a, b) => (!b.hasJS ? 1 : 0) - (!a.hasJS ? 1 : 0));
    }

    if (countNumberEl) {
      countNumberEl.textContent = filtered.length;
    }

    if (resultsBadge) {
      resultsBadge.innerHTML = `Mostrando <strong>${filtered.length}</strong> de ${allComponents.length} componentes`;
    }

    if (filtered.length === 0) {
      gridContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon"><i class="bx bx-search-alt-2"></i></div>
          <h3>No se encontraron componentes</h3>
          <p>Prueba con otros términos de búsqueda o selecciona otra categoría o filtro de tecnología.</p>
        </div>
      `;
      return;
    }

    gridContainer.innerHTML = filtered.map(item => {
      const cfg = categoryConfig[item.category] || { label: item.category, icon: 'bx-folder' };
      const isFav = favs.includes(item.id);

      const techBadge = item.hasJS 
        ? `<span class="tech-tag-badge tech-tag-js"><i class="bx bxl-javascript"></i> JS</span>`
        : `<span class="tech-tag-badge tech-tag-css"><i class="bx bxl-css3"></i> CSS</span>`;

      return `
        <div class="component-card" data-id="${item.id}">
          <!-- Mockup Header Bar -->
          <div class="mockup-header">
            <div class="mockup-dots">
              <span class="dot-red"></span>
              <span class="dot-yellow"></span>
              <span class="dot-green"></span>
            </div>
            <div class="mockup-address" title="${item.path}">
              <i class="bx bx-file"></i> ${item.path}
            </div>
            <button type="button" class="card-fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}" title="${isFav ? 'Quitar de favoritos' : 'Añadir a favoritos'}">
              <i class="bx ${isFav ? 'bxs-star' : 'bx-star'}"></i>
            </button>
          </div>

          <!-- Preview Frame -->
          <div class="card-preview">
            <iframe src="${item.path}" loading="lazy" title="${item.name}"></iframe>
            <div class="preview-overlay">
              <button type="button" class="btn btn-primary open-preview-btn" data-id="${item.id}">
                <i class="bx bx-show-alt"></i> Ver en vivo
              </button>
              <button type="button" class="btn btn-secondary open-code-btn" data-id="${item.id}">
                <i class="bx bx-code-alt"></i> Código
              </button>
            </div>
          </div>

          <!-- Info Area -->
          <div class="card-info">
            <div class="card-title-row">
              <h4>${item.name}</h4>
            </div>

            <div class="card-badges-row">
              <span class="badge"><i class="bx ${cfg.icon}"></i> ${cfg.label}</span>
              ${techBadge}
            </div>

            <div class="card-footer">
              <button type="button" class="path-btn copy-path-btn" data-path="${item.path}" title="Copiar ruta del componente">
                <i class="bx bx-folder-open"></i> <span>${item.path}</span> <i class="bx bx-copy copy-icon"></i>
              </button>

              <div class="card-actions-right">
                <button type="button" class="icon-link icon-link-download download-zip-card-btn" data-id="${item.id}" title="Descargar componente en ZIP">
                  <i class="bx bx-download"></i>
                </button>
                <a href="${item.path}" target="_blank" class="icon-link" title="Abrir en pestaña nueva">
                  <i class="bx bx-export"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach preview modal triggers
    gridContainer.querySelectorAll('.open-preview-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = allComponents.find(c => c.id === btn.dataset.id);
        if (item) openModal(item, 'preview');
      });
    });

    // Attach open code modal triggers
    gridContainer.querySelectorAll('.open-code-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = allComponents.find(c => c.id === btn.dataset.id);
        if (item) openModal(item, 'code');
      });
    });

    // Attach favorite star triggers on cards
    gridContainer.querySelectorAll('.card-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(btn.dataset.id);
      });
    });

    // Attach download ZIP triggers on cards
    gridContainer.querySelectorAll('.download-zip-card-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const item = allComponents.find(c => c.id === btn.dataset.id);
        if (item) downloadComponentZip(item);
      });
    });

    // Attach copy path triggers
    gridContainer.querySelectorAll('.copy-path-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const text = btn.dataset.path;
        navigator.clipboard.writeText(text).then(() => {
          showToast(`Ruta copiada: ${text}`, 'bx-check-circle');
        }).catch(() => {
          showToast(`Ruta: ${text}`, 'bx-check-circle');
        });
      });
    });

    // Touch & tap trigger for card previews on mobile
    gridContainer.querySelectorAll('.card-preview').forEach(preview => {
      preview.addEventListener('click', (e) => {
        if (!e.target.closest('button') && !e.target.closest('a')) {
          const card = preview.closest('.component-card');
          if (card) {
            const item = allComponents.find(c => c.id === card.dataset.id);
            if (item) openModal(item, 'preview');
          }
        }
      });
    });
  }

  // Toast Notification System
  function showToast(msg, icon = 'bx-check-circle') {
    toastMsg.textContent = msg;
    toastIcon.className = `bx ${icon} toast-icon`;
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
    if (activeComponent) {
      loadComponentCode(activeComponent, activeCodeLang);
    }
  });

  // Code Lang Tabs (HTML / CSS / JS)
  codeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      codeTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeCodeLang = tab.dataset.lang;
      copyLangLabel.textContent = activeCodeLang.toUpperCase();
      if (activeComponent) {
        loadComponentCode(activeComponent, activeCodeLang);
      }
    });
  });

  // Copy Code Button
  copyCodeBtn.addEventListener('click', () => {
    const code = codeDisplay.textContent;
    if (!code || code.startsWith('//') || code === 'Cargando código...') return;
    navigator.clipboard.writeText(code).then(() => {
      showToast(`¡Código ${activeCodeLang.toUpperCase()} copiado al portapapeles!`, 'bx-copy');
    });
  });

  // Update Size Tags on Code Tabs
  function updateCodeSizeTags(item) {
    const dir = item.path.substring(0, item.path.lastIndexOf('/'));
    const htmlCode = getFileCode(item.path);
    const cssCode = getFileCode(item.cssFile || `${dir}/styles.css`);
    const jsCode = item.hasJS ? getFileCode(item.jsFile || `${dir}/main.js`) : '';

    if (htmlSizeTag) htmlSizeTag.textContent = htmlCode ? `${htmlCode.split('\n').length} l` : '';
    if (cssSizeTag) cssSizeTag.textContent = cssCode ? `${cssCode.split('\n').length} l` : '';
    if (jsSizeTag) jsSizeTag.textContent = item.hasJS && jsCode ? `${jsCode.split('\n').length} l` : (item.hasJS ? '' : 'CSS Puro');
  }

  function getFileCode(filePath) {
    if (loadedCodeCache[filePath]) return loadedCodeCache[filePath];
    if (window.COMPONENTS_CODE && window.COMPONENTS_CODE[filePath]) {
      return window.COMPONENTS_CODE[filePath];
    }
    return '';
  }

  // Load Component Source Code with Prism.js Highlighting
  function loadComponentCode(item, lang) {
    let targetFile = item.path;
    const dir = item.path.substring(0, item.path.lastIndexOf('/'));

    if (lang === 'css') {
      targetFile = item.cssFile || `${dir}/styles.css`;
    } else if (lang === 'js') {
      if (!item.hasJS) {
        codeDisplay.className = 'language-javascript';
        codeDisplay.textContent = `// ✨ Este componente fue diseñado 100% en Pure CSS3.\n// No requiere lógica ni dependencias de JavaScript.`;
        if (window.Prism) Prism.highlightElement(codeDisplay);
        return;
      }
      targetFile = item.jsFile || `${dir}/main.js`;
    }

    const prismLang = lang === 'html' ? 'markup' : (lang === 'css' ? 'css' : 'javascript');
    codeDisplay.className = `language-${prismLang}`;

    // 1. Check in-memory cache
    if (loadedCodeCache[targetFile]) {
      codeDisplay.textContent = loadedCodeCache[targetFile];
      if (window.Prism) Prism.highlightElement(codeDisplay);
      return;
    }

    // 2. Check bundled window.COMPONENTS_CODE (works offline & file:// protocol)
    if (window.COMPONENTS_CODE && window.COMPONENTS_CODE[targetFile]) {
      const bundledCode = window.COMPONENTS_CODE[targetFile];
      loadedCodeCache[targetFile] = bundledCode;
      codeDisplay.textContent = bundledCode;
      if (window.Prism) Prism.highlightElement(codeDisplay);
      return;
    }

    // 3. Fallback to fetch API
    codeDisplay.textContent = `Cargando ${targetFile}...`;

    fetch(targetFile)
      .then(res => {
        if (!res.ok) throw new Error('Archivo no disponible');
        return res.text();
      })
      .then(text => {
        loadedCodeCache[targetFile] = text;
        codeDisplay.textContent = text;
        if (window.Prism) Prism.highlightElement(codeDisplay);
      })
      .catch(err => {
        codeDisplay.textContent = `// El archivo (${targetFile}) no está disponible.`;
      });
  }

  // 1-Click ZIP Download Engine using JSZip & FileSaver
  function downloadComponentZip(item) {
    if (!window.JSZip || !window.saveAs) {
      showToast('Preparando descarga...', 'bx-download');
    }

    const zip = new JSZip();
    const folder = zip.folder(item.folder);
    const dir = item.path.substring(0, item.path.lastIndexOf('/'));

    // HTML
    const htmlCode = getFileCode(item.path);
    folder.file('index.html', htmlCode || '<!DOCTYPE html><html><body><h1>Error</h1></body></html>');

    // CSS
    const cssPath = item.cssFile || `${dir}/styles.css`;
    const cssCode = getFileCode(cssPath);
    if (cssCode) {
      const cssFileName = cssPath.substring(cssPath.lastIndexOf('/') + 1);
      folder.file(cssFileName, cssCode);
    }

    // JS
    if (item.hasJS) {
      const jsPath = item.jsFile || `${dir}/main.js`;
      const jsCode = getFileCode(jsPath);
      if (jsCode) {
        const jsFileName = jsPath.substring(jsPath.lastIndexOf('/') + 1);
        folder.file(jsFileName, jsCode);
      }
    }

    // README inside ZIP
    folder.file('README.md', `# ${item.name}\n\nComponente UI de la biblioteca UI Components Hub.\nCategoría: ${item.category}\nTecnología: ${item.hasJS ? 'HTML5 + CSS3 + JavaScript' : 'HTML5 + Pure CSS3'}\n`);

    showToast(`Generando archivo ZIP de ${item.name}...`, 'bx-archive');

    zip.generateAsync({ type: 'blob' }).then(content => {
      saveAs(content, `${item.folder}.zip`);
      showToast(`¡Descarga completada: ${item.folder}.zip!`, 'bx-check-circle');
    }).catch(err => {
      showToast('Error al generar el ZIP', 'bx-error-circle');
    });
  }

  // Modal Functionality
  function openModal(item, initialMode = 'preview') {
    activeComponent = item;
    modalIframe.src = item.path;
    modalTitle.textContent = item.name;
    modalPathChip.textContent = item.path;
    modalOpenNewTabBtn.href = item.path;
    modalPreview.classList.add('active');
    document.body.style.overflow = 'hidden';

    updateModalFavButton(item.id);
    updateCodeSizeTags(item);

    // Configure JS tab
    if (codeTabJs) {
      if (item.hasJS) {
        codeTabJs.style.opacity = '1';
        codeTabJs.title = 'JavaScript interactivo';
      } else {
        codeTabJs.style.opacity = '0.6';
        codeTabJs.title = 'Componente Pure CSS (sin JS)';
      }
    }

    if (initialMode === 'code') {
      modeBtnCode.click();
    } else {
      modeBtnPreview.click();
    }
  }

  function updateModalFavButton(id) {
    const isFav = isFavorite(id);
    modalFavToggleBtn.classList.toggle('active', isFav);
    modalFavIcon.className = isFav ? 'bx bxs-star' : 'bx bx-star';
  }

  modalFavToggleBtn.addEventListener('click', () => {
    if (activeComponent) {
      toggleFavorite(activeComponent.id);
    }
  });

  modalReloadBtn.addEventListener('click', () => {
    if (activeComponent) {
      modalIframe.src = activeComponent.path;
      showToast('Vista previa recargada', 'bx-refresh');
    }
  });

  modalDownloadZipBtn.addEventListener('click', () => {
    if (activeComponent) {
      downloadComponentZip(activeComponent);
    }
  });

  function closeModal() {
    modalPreview.classList.remove('active');
    modalIframe.src = '';
    document.body.style.overflow = '';
    activeComponent = null;
  }

  closeModalBtn.addEventListener('click', closeModal);
  if (modalDotClose) modalDotClose.addEventListener('click', closeModal);

  if (modalDotExpand) {
    modalDotExpand.addEventListener('click', () => {
      const win = modalPreview.querySelector('.modal-window');
      if (win) win.classList.toggle('fullscreen');
    });
  }

  modalPreview.addEventListener('click', (e) => {
    if (e.target === modalPreview) closeModal();
  });

  // Device Responsive Switcher
  function setDeviceView(device) {
    deviceBtns.forEach(b => b.classList.toggle('active', b.dataset.device === device));
    modalIframeWrapper.className = `iframe-wrapper ${device}`;
  }

  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setDeviceView(btn.dataset.device);
    });
  });

  // Shortcuts Modal
  function openShortcutsModal() {
    shortcutsModal.classList.add('active');
  }

  function closeShortcutsModal() {
    shortcutsModal.classList.remove('active');
  }

  helpShortcutsBtn.addEventListener('click', openShortcutsModal);
  closeShortcutsBtn.addEventListener('click', closeShortcutsModal);
  shortcutsModal.addEventListener('click', (e) => {
    if (e.target === shortcutsModal) closeShortcutsModal();
  });

  // Scroll to Top Handler
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Initial Initialization
  renderLegendGrid();
  renderCategoryFilters();
  renderComponents();
});
