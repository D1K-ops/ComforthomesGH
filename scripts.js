// 🔹 Reveal Sidebar on Scroll
window.addEventListener('scroll', function () {
  const sidebar = document.querySelector('.social-sidebar');
  if (window.scrollY > 100) {
    sidebar.classList.remove('hidden');
    sidebar.classList.add('show');
  } else {
    sidebar.classList.remove('show');
    sidebar.classList.add('hidden');
  }
});
