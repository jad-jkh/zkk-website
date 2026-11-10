/* ZKK Consulting: mobile menu. All content renders without this file. */
(function () {
  var b = document.querySelector('.nav-toggle'), n = document.getElementById('site-nav');
  if (!b || !n) return;
  function set(open) {
    n.classList.toggle('open', open);
    b.setAttribute('aria-expanded', open ? 'true' : 'false');
    b.textContent = open ? 'Close' : 'Menu';
  }
  b.addEventListener('click', function () { set(!n.classList.contains('open')); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && n.classList.contains('open')) { set(false); b.focus(); } });
})();
