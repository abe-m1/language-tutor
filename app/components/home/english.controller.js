(function(module) {

  "use strict";
  var EnglishCtrl;
  EnglishCtrl.$inject = ['$http', 'ENGLISH_CONTENT', 'FRENCH_CONTENT'];



  function EnglishCtrl($http, ENGLISH_CONTENT, FRENCH_CONTENT) {
    
   console.log('english running')
   var vm = this;
   vm.language = language
  
   
 



    vm.content = ENGLISH_CONTENT;

   function language(param){
     console.log(param)
     if (param === 'english'){
     console.log('english')
    // vm.heading= vm.eng.title
     vm.content= ENGLISH_CONTENT
   } 
   if (param === 'french'){
     console.log('french')
    vm.content = FRENCH_CONTENT
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