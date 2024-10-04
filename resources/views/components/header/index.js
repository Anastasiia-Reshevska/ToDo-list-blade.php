(function () {
  const body = document.querySelector('body');
  const menuBtn = document.getElementById('burger-menu');
  if (!body || !menuBtn) return null;

  menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    body.classList.toggle('open-menu');
  });
})();
