(function() {

  var hamburger = {
    navToggle: document.querySelector('.wfp--main-navigation__button'),
    nav: document.querySelector('.wfp--main-navigation__list'),

    doToggle: function(e) {
      e.preventDefault();
      this.nav.classList.toggle('wfp--main-navigation__list--open');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());