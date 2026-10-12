// ============================================
// 共用脚本：汉堡菜单、当前页高亮、页脚年份
// ============================================

// 1) 汉堡菜单：点击切换展开/收起，并同步无障碍属性
const toggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.site-header');

if (toggle && header) {
  toggle.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-open');
    // 告诉屏幕阅读器当前菜单是打开还是关闭
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// 2) 点击导航链接后自动收起菜单（手机上体验更好）
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    header?.classList.remove('menu-open');
    toggle?.setAttribute('aria-expanded', 'false');
  });
});

// 3) 根据当前页面文件名给对应导航链接加高亮
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === currentPage) {
    link.classList.add('active');
  }
});

// 4) 页脚自动显示当前年份
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
