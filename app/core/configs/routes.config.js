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
            controller: 'HomeCtrl',
            controllerAs: 'home'
            
          })

           .state('english', {
            url: '/english',
            templateUrl: 'components/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
            
          })

          $urlRouterProvider.otherwise('/');
        }


      })();