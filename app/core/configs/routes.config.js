      (function () {
        'use strict';

        angular
          .module('TutorApp.Configs')
          .config(routesProvider);

        function routesProvider($stateProvider, $urlRouterProvider) {
          $stateProvider

          .state('english', {
            url: '/',
            templateUrl: 'components/home/home.html',
            controller: 'EnglishCtrl',
            controllerAs: 'english'
            
          })

           .state('french', {
            url: '/french',
            templateUrl: 'components/home/home.html',
            controller: 'FrenchCtrl',
            controllerAs: 'french'
            
          })

          $urlRouterProvider.otherwise('/');
        }


      })();