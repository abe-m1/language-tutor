      (function () {
        'use strict';

        angular
          .module('TutorApp.Configs')
          .config(routesProvider);

        function routesProvider($stateProvider, $urlRouterProvider) {
          $stateProvider

          .state('french', {
            url: '/french',
            templateUrl: 'components/login/login.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
            
          })

           .state('english', {
            url: '/english',
            templateUrl: 'components/login/login.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
            
          })

          $urlRouterProvider.otherwise('/');
        }


      })();