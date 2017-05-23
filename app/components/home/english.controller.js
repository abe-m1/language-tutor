(function(module) {

  "use strict";
  var EnglishCtrl;
  EnglishCtrl.$inject = [];



  function EnglishCtrl() {
    
   console.log('english running')
   var vm = this;

   vm.heading="learn french with nadia"
   
  }


  module.controller('EnglishCtrl', EnglishCtrl);

})(angular.module('TutorApp.Controllers'));