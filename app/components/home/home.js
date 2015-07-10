/**
 * Home Components module.
 *
 * @module GiveMeAnswer.components.home
 */
(function () {
  'use strict';

  angular
    .module('GiveMeAnswer.components.home', [])
    .controller('HomeController', HomeController);

  HomeController.$inject = [];
  
  /**
   * HomeController
   *
   * @class HomeController
   * @constructor
   */
  function HomeController() {
  	console.log('HomeController Constructor');
  }

  /**
   * The controller activate makes it convenient to re-use the logic 
   * for a refresh for the controller/View, keeps the logic together.
   *
   * @method activate
   */
  HomeController.prototype.activate = function() {
    console.log('HomeController activate Method');
  };

})();
