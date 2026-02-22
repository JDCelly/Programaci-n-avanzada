// Animar elementos al desplazarse
window.addEventListener('scroll', () => {
  const elementos = document.querySelectorAll('.project-card');
  elementos.forEach(elemento => {
    const posicion = elemento.getBoundingClientRect().top;
    if (posicion < window.innerHeight) {
      elemento.classList.add('visible');
    }
  });
});

// Validar formulario de contacto
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    if (nombre && email) {
      alert('Gracias por tu mensaje');
      e.target.reset();
    } else {
      alert('Por favor completa los campos requeridos.');
    }
  });
}