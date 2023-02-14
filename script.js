function swapTheme() {
  const app = document.getElementById('app');
  const swapBtn = document.getElementById('swap');
  
  // Toggle "day" and "night" classes of app div
  app.classList.toggle('day');
  app.classList.toggle('night');
  
  // Toggle "button_day" and "button_night" classes of swap button
  swapBtn.classList.toggle('button_day');
  
}


