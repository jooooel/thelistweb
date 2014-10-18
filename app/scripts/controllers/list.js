'use strict';

/**
 * @ngdoc function
 * @name thelistwebApp.controller:ListCtrl
 * @description
 * # ListCtrl
 * Controller of the thelistwebApp
 */
angular.module('thelistwebApp')
    .controller('ListCtrl', ['$scope', '$stateParams', 'listService', 'itemService', function ($scope, $stateParams, listService, itemService) {
        var listId = $stateParams.listid;
        $scope.list = listService.getCachedList(listId);

        itemService.getItems(listId).then(function (items) {
            $scope.items = items;
        });

        $scope.createItem = function () {
            var newItem = { name: $scope.newItemName };
            itemService.createItem(newItem, listId).then(function() {
                $scope.items.push(newItem);
            });
        }
    }]);