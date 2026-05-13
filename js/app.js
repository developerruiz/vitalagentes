const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('active'));
  });
}

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(element => observer.observe(element));

const params = new URLSearchParams(window.location.search);

if (params.get('success') === '1') {
  alert('Gracias. Tus datos fueron enviados correctamente.');
  window.history.replaceState({}, document.title, window.location.pathname);
}

if (params.get('error') === '1') {
  alert('Ocurrió un error. Intenta nuevamente.');
  window.history.replaceState({}, document.title, window.location.pathname);
}
