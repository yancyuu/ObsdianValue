// 主要交互功能
document.addEventListener('DOMContentLoaded', function() {
  // 返回顶部按钮
  const backToTop = document.getElementById('back-to-top');
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
  
  backToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // 移动端侧边栏切换
  const sidebar = document.querySelector('.sidebar');
  const menuToggle = document.createElement('button');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '☰';
  
  if (window.innerWidth <= 768) {
    document.querySelector('.site-nav').appendChild(menuToggle);
    
    menuToggle.addEventListener('click', function() {
      sidebar.classList.toggle('open');
    });
    
    // 点击内容区域关闭侧边栏
    document.querySelector('.main-content').addEventListener('click', function() {
      sidebar.classList.remove('open');
    });
  }
  
  // 简单搜索功能
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');
  
  if (searchInput) {
    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      
      if (query.length < 2) {
        searchResults.innerHTML = '';
        return;
      }
      
      // 简单的客户端搜索（实际项目中可以用Jekyll Search或Algolia）
      const navLinks = document.querySelectorAll('.nav-item a');
      const results = [];
      
      navLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes(query)) {
          results.push({
            title: link.textContent,
            url: link.href
          });
        }
      });
      
      if (results.length > 0) {
        searchResults.innerHTML = results.map(result => 
          `<div class="search-result">
            <a href="${result.url}">${result.title}</a>
          </div>`
        ).join('');
      } else {
        searchResults.innerHTML = '<div class="no-results">未找到相关笔记</div>';
      }
    });
  }
  
  // 代码块复制功能
  const codeBlocks = document.querySelectorAll('pre code');
  codeBlocks.forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-button';
    button.textContent = '复制';
    
    button.addEventListener('click', function() {
      navigator.clipboard.writeText(block.textContent).then(() => {
        button.textContent = '已复制';
        setTimeout(() => {
          button.textContent = '复制';
        }, 2000);
      });
    });
    
    block.parentNode.appendChild(button);
  });
});
