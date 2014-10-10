'use strict';

angular.module('userDatabaseApp')
  .controller('MainCtrl', function ($scope) {
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
  });
