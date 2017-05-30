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

        //   .state('quiz', {
        //     url: '/quiz',
        //     templateUrl: 'components/quiz/quiz.html',
        //     // controller: 'QuizCtrl',
        //     // controllerAs: 'quiz'
            
        //   })

           .state('quiz', {
            abstract:true,
            url: '/quiz',
            templateUrl: 'components/quiz/quiz-base.html',
             controller: 'quizCtrl',
             controllerAs: 'quiz'
          })

        .state('quiz.landing', {
            url: '/landing',
            templateUrl: 'components/quiz/quiz-landing.html',
          })

        .state('quiz.questions', {
            url: '/questions',
            templateUrl: 'components/quiz/quiz-questions.html',
            controller: 'quizCtrl',
             controllerAs: 'quiz'
          })

          .state('quiz.results', {
            url: '/results',
            templateUrl: 'components/quiz/quiz-results.html',
            controller: 'quizCtrl',
             controllerAs: 'quiz'
          })

        // .state('candidate.softskills.results', {
        //     url: '/results',
        //     templateUrl: 'components/candidate/softskills/softskills-results.html',
        //   })

        // .state('candidate.softskills.test', {
        //     url: '/test',
        //     templateUrl: 'components/candidate/softskills/softskills-questions.html',
        //   })




          .state('staffing', {
            url: '/staffing',
            templateUrl: 'components/staffing/staffing.html',
            // controller: 'StaffCtrl',
            // controllerAs: 'quiz'
            
          })

          $urlRouterProvider.otherwise('/');
        }


      })();