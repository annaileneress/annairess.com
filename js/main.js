(function () {
  var toggle = document.getElementById('menu-toggle');
  var nav = document.getElementById('primary-nav');

  if (!toggle || !nav) {
    return;
  }

  function closeMenu() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  function openMenu() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.contains('is-open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.addEventListener('click', function (event) {
    if (event.target.classList.contains('navlink')) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && nav.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  var mediaQuery = window.matchMedia('(min-width: 1024px)');
  mediaQuery.addEventListener('change', function (event) {
    if (event.matches) {
      closeMenu();
    }
  });
})();
