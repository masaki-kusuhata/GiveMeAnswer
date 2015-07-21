(function(){
  'use strict';

  angular
    .module('GiveMeAnswer.mock.service.const',[])
    .factory('ConstService', ConstService);

  function ConstService(){
    return {
      some: someSpy
    };
  }
  
  var someSpy = jasmine.createSpy().and.returnValue(
    function(cb) {
      return result;
    }
  );

  var result = {};
})();