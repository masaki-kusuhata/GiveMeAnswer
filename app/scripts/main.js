/**
 * This is GiveMeAnswer module.
 *
 * @module GiveMeAnswer
 */
(function () {
  'use strict';

  angular
    .module('GiveMeAnswer', [
      'ngNewRouter',
      'GiveMeAnswer.config',
      'GiveMeAnswer.components.home',
      'GiveMeAnswer.components.about',
      'GiveMeAnswer.components.contact'
    ])
    .controller('AppController', AppController);

  AppController.$routeConfig = [
    { path: '/',       redirectTo: '/home' },
    { path: '/home',    component: 'home' },
    { path: '/about',   component: 'about' },
    { path: '/contact', component: 'contact' }
  ];

  AppController.$inject = [];  

  /**
   * AppController
   *
   * @class AppController
   * @main GiveMeAnswer
   * @constructor
   */
  function AppController () {}
})();