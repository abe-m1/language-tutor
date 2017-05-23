(function(module) {

  "use strict";
  var HomrCtrl;
  HomeCtrl.$inject = [];



  function HomeCtrl() {
    
   console.log('home running')
   var vm = this;
   
  }


  module.controller('HomeCtrl', HomeCtrl);

})(angular.module('TutorApp.Controllers'));