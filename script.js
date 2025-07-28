// Aquí podrías agregar funcionalidades como un botón de WhatsApp, alerta, etc.
console.log("Página cargada");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});
