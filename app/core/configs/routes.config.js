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

          .state('quiz', {
            url: '/quiz',
            templateUrl: 'components/quiz/quiz.html',
            controller: 'QuizCtrl',
            controllerAs: 'quiz'
            
          })

          .state('staffing', {
            url: '/staffing',
            templateUrl: 'components/staffing/staffing.html',
            // controller: 'StaffCtrl',
            // controllerAs: 'quiz'
            
          })

          $urlRouterProvider.otherwise('/');
        }


      })();