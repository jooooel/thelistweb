'use strict';

/**
 * @ngdoc function
 * @name thelistwebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the thelistwebApp
 */
angular.module('thelistwebApp')
    .controller('MainCtrl', ['$scope', '$state', 'userService', 'listService', function ($scope, $state, userService, listService) {
        $scope.user = userService.getUser();

        listService.getLists().then(function (lists) {
            $scope.lists = lists;
        });

        $scope.createList = function () {
            var newList = { name: $scope.newListName };
            listService.createList(newList).then(function() {
                $scope.lists.push(newList);
            }, function () {
                // Error
            });
        };

        $scope.goToList = function (list) {
            $state.go('list', { "listid": list.identifier });
        };
    }]);
