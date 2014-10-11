'use strict';

//Création du MainCtrl qui sera chargé avec la vue main.html
angular.module('userDatabaseApp')
  .controller('MainCtrl', function ($scope) {

    //Déclaration d'une variable scopée
    $scope.users = [
      {
      	'firstname':'Alex',
      	'lastname':'Nunes',
      	'age':'23'
      },
      {
      	'firstname':'Loic',
      	'lastname':'Ortola',
      	'age':'25'
      },
      {
      	'firstname':'John',
      	'lastname':'Doe',
      	'age':'33'
      }
    ];

    //Déclaration d'une fonction scopée
    $scope.addUser = function(user){
      $scope.users.push(user);
    }

    //Déclaration d'une fonction privée
    function doStuff(){
      //some stuff
    }


  });
