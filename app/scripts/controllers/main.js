'use strict';

/**
 * @ngdoc function
 * @name angTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angTestApp
 */
angular.module('angTestApp')
  .controller('MainCtrl', function ($scope) {
	  $scope.tareas = ['Item 1', 'Item 2', 'Item 3'];

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
