(function () {
  var stick = document.getElementById('stick');
  var up = document.getElementById('scroll-top');
  var on = false;

  function update() {
    var y = window.pageYOffset || document.documentElement.scrollTop || 0;
    var next = y > 180;
    if (next === on) return;
    on = next;
    stick.classList.toggle('on', on);
    up.classList.toggle('on', on);
    stick.setAttribute('aria-hidden', on ? 'false' : 'true');
    var links = stick.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) links[i].tabIndex = on ? 0 : -1;
  }
  window.addEventListener('scroll', update, { passive: true });
  up.addEventListener('click', function () {
    var rm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: rm ? 'auto' : 'smooth' });
  });
  update();

  var track = document.getElementById('track');
  function step(dir) { track.scrollBy({ left: dir * track.clientWidth * 0.8, behavior: 'smooth' }); }
  document.getElementById('prev').addEventListener('click', function () { step(-1); });
  document.getElementById('next').addEventListener('click', function () { step(1); });
})();
