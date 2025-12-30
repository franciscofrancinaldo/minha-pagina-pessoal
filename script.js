// 🌙 Dark Mode
const btn = document.getElementById('toggle-theme');
if (btn) {
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Troca o ícone do botão 🌙 ↔ ☀️
    if (document.body.classList.contains('dark-mode')) {
      btn.textContent = "☀️ Alternar tema";
    } else {
      btn.textContent = "🌙 Alternar tema";
    }
  });
}

// 🌀 Scroll suave na navegação
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// 🎭 Animação de entrada dos cards de projetos
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

cards.forEach(card => observer.observe(card));
