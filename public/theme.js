(function() {
  function getStoredTheme() {
    return localStorage.getItem('theme') || 'system';
  }
  
  function applyTheme(theme) {
    const body = document.body;
    body.classList.remove('dark', 'amoled-dark');
    
    if (theme === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add('dark');
      }
    } else if (theme === 'dark') {
      body.classList.add('dark');
    } else if (theme === 'amoled') {
      body.classList.add('amoled-dark');
    }
  }
  
  applyTheme(getStoredTheme());
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getStoredTheme() === 'system') {
      applyTheme('system');
    }
  });
})();