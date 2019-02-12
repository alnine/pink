'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var navToggle = document.querySelector('.nav-toggle');
  var mainNav = document.querySelector('.main-nav');

  var pageHeaderMenuOpened = 'page-header--mobile-menu-opened';
  var navToggleHidden = 'nav-toggle--nojs';
  var navToggleOpened = 'nav-toggle--opened'
  var mainNavOpened = 'main-nav--opened';

  pageHeader.classList.remove(pageHeaderMenuOpened);
  navToggle.classList.remove(navToggleHidden);
  mainNav.classList.remove(mainNavOpened);

  navToggle.addEventListener('click', function() {
    if(navToggle.classList.contains(navToggleOpened)) {
      navToggle.classList.remove(navToggleOpened);
      pageHeader.classList.remove(pageHeaderMenuOpened);
      mainNav.classList.remove(mainNavOpened);
    } else {
      navToggle.classList.add(navToggleOpened);
      pageHeader.classList.add(pageHeaderMenuOpened);
      mainNav.classList.add(mainNavOpened);
    }
  });
})();
