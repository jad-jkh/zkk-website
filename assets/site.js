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
/* Home report stack: pointer tilt (max 4 degrees) and scroll spread (max 12px). */
(function () {
  var s = document.querySelector('.stack');
  if (!s || !window.IntersectionObserver || !matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (min-width: 900px)').matches) return;
  var x = 0, y = 0, q = false, on = false;
  function draw() {
    q = false;
    var r = s.getBoundingClientRect();
    s.style.setProperty('--tx', x.toFixed(3));
    s.style.setProperty('--ty', y.toFixed(3));
    s.style.setProperty('--sp', Math.max(0, Math.min(1, -r.top / r.height + 0.3)).toFixed(3));
  }
  function ask(e) {
    if (e && e.clientX !== undefined) { x = e.clientX / innerWidth * 2 - 1; y = 1 - e.clientY / innerHeight * 2; }
    if (!q) { q = true; requestAnimationFrame(draw); }
  }
  new IntersectionObserver(function (en) {
    var v = en[0].isIntersecting;
    if (v === on) return;
    on = v;
    var f = v ? 'addEventListener' : 'removeEventListener';
    window[f]('pointermove', ask, { passive: true });
    window[f]('scroll', ask, { passive: true });
  }).observe(s);
})();
