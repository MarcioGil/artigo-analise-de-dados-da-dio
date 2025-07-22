function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar/ocultar botão "Voltar ao topo" conforme o scroll
window.onscroll = function() {
  const btn = document.getElementById("topBtn");
  if (window.scrollY > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};