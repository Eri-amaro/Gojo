function toggleTheme() {
    document.body.classList.toggle('light');
    const icon = document.querySelector('.theme-toggle');
    if (document.body.classList.contains('light')) {
      icon.textContent = '☀️';
    } else {
      icon.textContent = '🌙';
    }
  }
  