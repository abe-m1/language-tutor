(function(module) {

  "use strict";
  var FrenchCtrl;
  FrenchCtrl.$inject = [];



  function FrenchCtrl() {
    
   console.log('french controller running')
   var vm = this;
   vm.heading="parlez francais avec nous"
  }


  module.controller('FrenchCtrl', FrenchCtrl);

})(angular.module('TutorApp.Controllers'));