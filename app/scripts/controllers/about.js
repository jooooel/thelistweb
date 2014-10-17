'use strict';

/**
 * @ngdoc function
 * @name thelistwebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the thelistwebApp
 */
angular.module('thelistwebApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
