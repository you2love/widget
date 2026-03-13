// Flutter Widget 大全 - 应用逻辑

let currentFilter = {
  category: 'all',
  usage: 'all',
  search: ''
};

let currentWidget = null;

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  mergeDetailedDocs();
  initFilters();
  initSearch();
  initTabs();
  renderWidgets();
  updateStats();
});

// 合并详细介绍数据
function mergeDetailedDocs() {
  if (typeof WIDGET_DETAILED_DOCS !== 'undefined') {
    WIDGET_DATA.forEach(widget => {
      if (WIDGET_DETAILED_DOCS[widget.id]) {
        widget.detailedDoc = WIDGET_DETAILED_DOCS[widget.id];
      }
    });
  }
}

// 初始化筛选器
function initFilters() {
  // 分类筛选
  document.querySelectorAll('[data-category]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-category]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter.category = btn.dataset.category;
      renderWidgets();
    });
  });

  // 常用度筛选
  document.querySelectorAll('[data-usage]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-usage]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter.usage = btn.dataset.usage;
      renderWidgets();
    });
  });
}

// 初始化搜索
function initSearch() {
  const searchInput = document.getElementById('searchInput');
  searchInput.addEventListener('input', (e) => {
    currentFilter.search = e.target.value.toLowerCase();
    renderWidgets();
  });
}

// 初始化 Tab
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.dataset.tab;
      
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      document.querySelectorAll('.tab-pane').forEach(pane => {
        pane.classList.remove('active');
        if (pane.id === tabId + 'Tab') {
          pane.classList.add('active');
        }
      });
    });
  });
}

// 渲染 Widget 列表
function renderWidgets() {
  const list = document.getElementById('widgetList');
  const emptyState = document.getElementById('emptyState');
  
  const filtered = getFilteredWidgets();
  
  if (filtered.length === 0) {
    list.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }
  
  list.style.display = 'grid';
  emptyState.style.display = 'none';
  
  list.innerHTML = filtered.map(widget => `
    <div class="widget-card" onclick="location.href='widget-detail.html?id=${widget.id}'">
      <div class="widget-card-content">
        <div class="widget-card-header">
          <span class="widget-name">${widget.name}</span>
          <span class="usage-badge ${widget.usageLevel}">${widget.usageDisplay}</span>
        </div>
        <div class="widget-meta">
          <span class="category-chip">${widget.categoryDisplay}</span>
          <span class="props-count">${widget.properties.length} 个属性</span>
        </div>
        <p class="widget-description">${widget.description}</p>
      </div>
      <div class="widget-preview">
        ${widget.preview}
      </div>
    </div>
  `).join('');
}

// 获取筛选后的 Widget
function getFilteredWidgets() {
  return WIDGET_DATA.filter(widget => {
    // 分类筛选
    if (currentFilter.category !== 'all' && widget.category !== currentFilter.category) {
      return false;
    }
    
    // 常用度筛选
    if (currentFilter.usage !== 'all' && widget.usageLevel !== currentFilter.usage) {
      return false;
    }
    
    // 搜索筛选
    if (currentFilter.search) {
      const searchLower = currentFilter.search.toLowerCase();
      const nameMatch = widget.name.toLowerCase().includes(searchLower);
      const descMatch = widget.description.toLowerCase().includes(searchLower);
      if (!nameMatch && !descMatch) {
        return false;
      }
    }
    
    return true;
  });
}

// 更新统计信息
function updateStats() {
  const total = WIDGET_DATA.length;
  const high = WIDGET_DATA.filter(w => w.usageLevel === 'high').length;
  const medium = WIDGET_DATA.filter(w => w.usageLevel === 'medium').length;
  const low = WIDGET_DATA.filter(w => w.usageLevel === 'low').length;

  document.getElementById('totalCount').textContent = total;
  document.getElementById('highCount').textContent = high;
  document.getElementById('mediumCount').textContent = medium;
  document.getElementById('lowCount').textContent = low;
}
