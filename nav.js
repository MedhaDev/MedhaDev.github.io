// Mobile menu: a floating "Menu" pill at the bottom of the screen (thumb reach),
// expanding into a panel of links. Shown only below 720px; above that the
// centered top nav is used. Closes on Escape, outside tap, or picking a link.
(function () {
  var btn = document.querySelector('.mobile-menu-btn');
  var panel = document.getElementById('mobileMenu');
  if (!btn || !panel) return;

  function setOpen(open) {
    panel.hidden = !open;
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.parentElement.classList.toggle('is-open', open);
  }
  btn.addEventListener('click', function () { setOpen(panel.hidden); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !panel.hidden) { setOpen(false); btn.focus(); }
  });
  document.addEventListener('click', function (e) {
    if (!panel.hidden && !btn.parentElement.contains(e.target)) setOpen(false);
  });
  panel.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
})();
