'use strict';

/**
 * @ngdoc function
 * @name thelistwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thelistwebApp
 */
angular.module('thelistwebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
