"use strict";

/* Navigation toggle on mobile */
(function () {
  var hamburger = {
    navToggle: document.querySelector('.wfp--main-navigation__button'),
    nav: document.querySelector('.wfp--main-navigation__list'),
    doToggle: function doToggle(e) {
      e.preventDefault();
      this.nav.classList.toggle('wfp--main-navigation__list--open');
    }
  };
  hamburger.navToggle.addEventListener('click', function (e) {
    hamburger.doToggle(e);
  });
})();
/* Mobile Navigation activator */


(function () {
  var open = false;
  var documentEvent = document;

  var outsideClickListener = function outsideClickListener(event) {
    var element = document.querySelector('.wfp--main-navigation__sub--open');
    if (element === null) return;

    if (!element.contains(event.target)) {
      subItem.doToggle(event, undefined);
    }
  };

  var subItem = {
    navToggle: document.querySelectorAll('.wfp--main-navigation__trigger--has-sub'),
    nav: document.querySelectorAll('.wfp--main-navigation__item'),
    sub: document.querySelectorAll('.wfp--main-navigation__sub'),
    doToggle: function doToggle(e, b) {
      e.preventDefault();
      if (documentEvent !== undefined) documentEvent.removeEventListener('click', outsideClickListener, false);

      for (var d = 0; d < subItem.navToggle.length; d++) {
        this.navToggle[d].classList.remove('wfp--main-navigation__trigger--open');
        this.nav[d].classList.remove('wfp--main-navigation__item--open');
        this.sub[d].classList.remove('wfp--main-navigation__sub--open');
      }

      if (b !== open && b !== undefined) {
        this.navToggle[b].classList.toggle('wfp--main-navigation__trigger--open');
        this.nav[b].classList.toggle('wfp--main-navigation__item--open');
        this.sub[b].classList.toggle('wfp--main-navigation__sub--open');
        setTimeout(function () {
          documentEvent.addEventListener('click', outsideClickListener, false);
        }, 500);
        open = b;
      } else {
        open = false;
      }
    }
  };

  var _loop = function _loop() {
    var u = n;
    subItem.navToggle[n].addEventListener('click', function (e) {
      subItem.doToggle(e, u);
    });
  };

  for (var n = 0; n < subItem.navToggle.length; n++) {
    _loop();
  }
})();