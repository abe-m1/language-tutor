      (function () {
        'use strict';

        angular
          .module('TutorApp.Configs')
          .config(routesProvider);

        function routesProvider($stateProvider, $urlRouterProvider) {
          $stateProvider

          .state('french', {
            url: '/',
            templateUrl: 'components/home/home.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
            
          })

           .state('english', {
            url: '/english',
            templateUrl: 'components/home/home.html',
            controller: 'MainCtrl',
            controllerAs: 'main'
            
          })

          $urlRouterProvider.otherwise('/');
        }


      })();