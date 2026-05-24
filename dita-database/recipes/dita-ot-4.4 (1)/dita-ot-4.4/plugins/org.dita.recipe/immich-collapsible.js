// Immich-style collapsible sections for DITA recipe output
document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('.immich-collapsible');
  triggers.forEach(function (btn) {
    var contentId = btn.getAttribute('aria-controls');
    var content = document.getElementById(contentId);
    if (!content) return;
    btn.addEventListener('click', function () {
      var expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      if (expanded) {
        content.setAttribute('hidden', '');
      } else {
        content.removeAttribute('hidden');
      }
    });
    // Keyboard accessibility: toggle with Enter/Space
    btn.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        btn.click();
      }
    });
  });
});