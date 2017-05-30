(function(module) {
  quizCtrl.$inject = ['$state'];

  function quizCtrl($state) {
    var vm = this;
 
    // // Constants Bindings
    // vm.test = softSkillsService.test;
    // vm.answerOptions = softSkillsService.answers;
    // vm.responseCodex = softSkillsService.parser;
    // vm.scoreMeaning = softSkillsService.results
    // vm.responseDescription = softSkillsService.description
    // console.log('HEREAND', vm.scoreMeaning)
    // console.log('responseCodex', vm.responseCodex)

    // vm.user = localStorageManager.retrieve(CURRENT_USER).email
    // console.log('BACK', vm.user)

    // // PRIMER
     // vm.box = {};
     vm.box = [];
     vm.current;
    // vm.answer;
    // vm.details = 0;
    vm.results
  

     vm.manageTest = manageTest;
    //  vm.saveScore = saveScore;
    vm.gradeTest = gradeTest

    // // SET DEFAULTS
     function activate() {
    //   if ($state.is('candidate.softskills.results') && vm.fiveFactors == null) {
    //     //$state.go('candidate.softskills.landing');
    //   }
    //     console.log("activated")
         for(var i = 0; i < 7; i++) {
           vm.box[i] = '';
         }
         vm.current = 0;
         vm.answer = 0;
     }

     activate();




     function manageTest(idx) {
       console.log(vm.current == 20)
       if (vm.current + 1 == 7) {
         addAnswer(idx);
         gradeTest();
       } else {
         addAnswer(idx);
       }
     }

     function addAnswer(idx) {
       if (vm.answer != 0) {
         vm.box[idx] = vm.answer;
          vm.answer = 0
           vm.current++;
       }
       console.log("stuff", vm.box, vm.answer, vm.current)
     }




    

    // function submitForm() {
    //   console.log('111done with the test!', vm.box);
    //   softSkillsService.runResults(vm.box)
    //     .then(function(res){
    //   console.log("SAVVED", res.data);

    //   return employeeService.asyncEmployeeDetails()

    // })
    // .then(function(res) {
    //       localStorageManager.store(CURRENT_EMPLOYEE_DETAILS, res)
    //       console.log("RESss", res);
    //       var results = []
    //       vm.details1 = []
    //       var i 
    //       var scoreResults =res[4]
    //       var dupeArr = [] 
          
    //       //need to filter results of test to remove one bad value from DB
    //       for ( i in scoreResults){
    //         console.log('STEP', i)
    //         var hello = []
    //         var hey = i
    //         //object key to filter out
    //         if (i !== 'tipi_score_id'){
              

    //           //push values needed to new array
    //           results.push(scoreResults[i])

    //           console.log("Score "+scoreResults[i]);
              
    //           //assign a value to each score
    //           vm.level = scoreResults[i]  >= 85 ? 'High' : scoreResults[i] >= 65 ? 'Moderate' : 'Low'
    //            console.log('LEVEL1', vm.level)
    //           vm.results2 = results    
                       
    //           //filter through array of objects
    //           vm.scoreMeaning.forEach(function(type, idx){
                    
    //                 if (type.score === vm.level && (type.type == hey)){
                     
    //                      if (dupeArr.indexOf(type.score_description) === -1){
    //                       dupeArr.push(type.score_description)
    //                       vm.details1.push(type.score_description)
    //                     }
                       
    //                    }
    //               // }
    //           })

          
                
    //           console.log('LUNCH', vm.newVal)
    //           console.log('HHEEE', vm.details1)

              
    //         }
    //         vm.results = results
    //       }
          
          
    //       console.log('COMING BACK', vm.results)
    // })
    //     .then(function(done) {
    //       // console.log("TODO:", done.data);
    //       // if (done.data.text && done.data.score) vm.fiveFactors = done.data;
    //       vm.fiveFactors = {
    //         'C': {'text': "This indicates some concern with others' needs, but, generally,you would not choose to sacrifice yourself for others.", 'score': 64.0}, 
    //         'A': {'text': 'This indicates you like to think in plain and simple terms. Others describe you as down-to-earth, practical, and conservative.', 'score': 60.0}, 
    //         'O': {'text': 'This means you are reasonably reliable, organized, and self-controlled.', 'score': 65.0}, 
    //         'E': {'text': 'This indicates you are sociable, outgoing,energetic, and lively. You prefer to be around people much of the time.', 'score': 75.0}, 
    //         'N': {'text': 'This indicates that you are easily upset, even by what most people consider the normal demands of life. People consider you to be sensitive and emotional.', 'score': 60.0}
    //       }
    //       $state.go('candidate.softskills.results');
    //     }).catch(function(err) {
    //       console.log("errrr", err)
    //       if (err.status >= 400 && err.status < 500 || err.status == -1 ) {
    //         vm.fiveFactors = {
    //           'C': {'text': "This indicates some concern with others' needs, but, generally,you would not choose to sacrifice yourself for others.", 'score': 70.0}, 
    //           'A': {'text': 'This indicates you like to think in plain and simple terms. Others describe you as down-to-earth, practical, and conservative.', 'score': 60.0}, 
    //           'O': {'text': 'This means you are reasonably reliable, organized, and self-controlled.', 'score': 65.0}, 
    //           'E': {'text': 'This indicates you are sociable, outgoing,energetic, and lively. You prefer to be around people much of the time.', 'score': 75.0}, 
    //           'N': {'text': 'This indicates that you are easily upset, even by what most people consider the normal demands of life. People consider you to be sensitive and emotional.', 'score': 60.0}
    //         }
    //       }
    //       $state.go('candidate.softskills.results');
    //     })
    // }

    // function saveScore() {
    //   // softSkillsService.saveScore(vm.fiveFactors)
    //   //   .then(function(done) {
    //   //     console.log("222done!!!", results);
    //   //     // most likely need to refresh token, save token then grab current employee
    //   //     $state.go('candidate.dashboard');
    //   //   }).catch(function(err) {
    //   //     console.log("errrr", err);
    //   //     $state.go('candidate.dashboard');

    //   //   })
    //   $state.go('candidate.dashboard.home')
      
    // }

    vm.answers = ['vous êtes', 'serveuse', 'la', 'Quelle est','mon / sa', 'le', 'trois heures et quart']

    vm.answerOptions = [ ['tu es','ils sont', 'on est', 'vous êtes'], 
                         ['serveur', 'serveuse', 'service', 'sert'],
                        ['du', 'de', 'la', 'l’'],
                        ['Il y a', 'Quelle est', 'Quel est', 'Quels sont'],
                        ['mon / son', 'mon / sa', "ton / t'", 'mon / ma' ],
                        ['au', 'du', 'le', 'de le'],
                        ['trois heures moins le quart', ' trois heures plus le quart', 'trois heures et quart', 'trois heures et demi']
                         
                         
                         ]

     vm.questions = [
		{ question: 1, text: 'Sélectionnez le mot adéquat pour compléter la phrase suivante: Bonjour monsieur, ______________ le journaliste ?'},
		{ question: 2, text: 'Sélectionnez le mot adéquat pour compléter la phrase suivante: Marguerite est _______________ au restaurant.'},
		{ question: 3, text: 'Sélectionnez le mot adéquat pour compléter la phrase suivante: Est-ce que tu vois _________ voiture noire ?'},
		{ question: 4, text: 'Sélectionnez le mot adéquat pour compléter la phrase suivante: __________ ton numéro de téléphone ?'},
		{ question: 5, text: 'Sélectionnez le mot adéquat pour compléter la phrase suivante: Je te présente ________ frère et ________ amie.'},
		{ question: 6, text: 'Sélectionnez le mot adéquat pour compléter la phrase suivante: Est-ce que tu as fait ________ tennis hier ?'},
		{ question: 7, text: 'Sélectionnez le mot adéquat pour compléter la phrase suivante: Il est ____(15h15)________.'},
		// { question: 8, text: 'I often forget to put things back in their proper place'},
		// { question: 9, text: 'I am relaxed most of the time'},
		// { question: 10, text: 'I am not interested in abstract ideas'},
		// { question: 11, text: 'I talk to a lot of different people at parties'},
		// { question: 12, text: 'I feel others’ emotions'},
		// { question: 13, text: 'I like keeping my things in order'},
		// { question: 14, text: 'I get upset easily'},
		// { question: 15, text: 'I have difficulty understanding abstract ideas'},
		// { question: 16, text: 'I keep in the background'},
		// { question: 17, text: 'I am not really interested in others'},
		// { question: 18, text: 'I dont mind keeping things a bit messy'},
		// { question: 19, text: 'I seldom feel blue'},
		// { question: 20, text: 'I do not have a good imagination'}
	]

  function gradeTest() {
      var a = vm.answers
      var b = vm.box
    vm.results = 0
   
    for (i = 0; i < a.length; i++) { 
      for (j = 0; j < b.length; j++) {
		
        if (a[i] === b[j]){
          vm.results++
        }
      }
    }
    console.log('results', vm.results)
    
    $state.go('quiz.results');
  return vm.results
  }

}


  module.controller('quizCtrl', quizCtrl);

})(angular.module('TutorApp.Controllers'));
