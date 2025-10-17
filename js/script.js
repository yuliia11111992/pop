document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.querySelector('.close-btn');

  if (!overlay) return;

  closeBtn.addEventListener('click', () => {
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.classList.remove('active');
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') overlay.classList.remove('active');
  });

  // Конфетти
  setTimeout(() => createConfetti(), 600);

  function createConfetti() {
    const modal = document.querySelector('.modal');
    const colors = ['#fbbf24','#f59e0b','#3b82f6','#60a5fa','#1e40af'];
    for (let i = 0; i < 18; i++) {
      setTimeout(() => {
        const c = document.createElement('div');
        c.className = 'confetti';
        c.style.left = (40 + Math.random() * 20) + '%';
        c.style.background = colors[Math.floor(Math.random()*colors.length)];
        c.style.transform = `translateY(0) rotate(${Math.random()*360}deg)`;
        modal.appendChild(c);
        setTimeout(() => c.remove(), 1800);
      }, i * 55);
    }
  }
});
