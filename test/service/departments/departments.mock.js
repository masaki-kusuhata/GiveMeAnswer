(function(){
  'use strict';

  angular
    .module('GiveMeAnswer.mock.service.departments',[])
    .factory('DepartmentsService', DepartmentsService);

  function DepartmentsService(){
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