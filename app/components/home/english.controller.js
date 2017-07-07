(function(module) {

  "use strict";
  var EnglishCtrl;
  EnglishCtrl.$inject = ['$http'];



  function EnglishCtrl($http) {
    
   console.log('english running')
   var vm = this;
   vm.language = language
   
   vm.heading="learn french with us"
   vm.eng = {}
   vm.eng.heading = "learn french with us"
   vm.eng.title = "learning is fun"

   function language(param){
     console.log(param)
     if (param === 'english'){
     console.log('english')
    vm.heading= vm.eng.title
   } 
   if (param === 'french'){
     console.log('french')
    vm.heading="parlez francais avec nous"
   }
   };
   



   
   
   

   vm.sendMail = sendMail

   function sendMail(){
       console.log(vm.name, vm.email, vm.message)
      
      $http( {
      method: "POST",
      url: "http://localhost:3000/mail",
      data: {      
             email: vm.email,
             name: vm.name,
             message: vm.message,
             title: 'request for help'
      }
    } ).then( function(data) {
        console.log(data)
        vm.name= ''
       vm.email = ''
       vm.message= ''
   })
   
  }

  }

  module.controller('EnglishCtrl', EnglishCtrl);

})(angular.module('TutorApp.Controllers'));