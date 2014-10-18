'use strict';

/**
 * @ngdoc service
 * @name thelistwebApp.itemService
 * @description
 * # itemService
 * Factory in the thelistwebApp.
 */
angular.module('thelistwebApp')
    .factory('itemService', ['restService', 'userService', function (restService, userService) {
        var items;

        return {
            getItems: function (listId) {
                var username = userService.getUser().username;
                return restService.get('thelist/secure/items?username=' + username + '&identifier=' + listId).then(function (response) {
                    items = response.data;
                    return items;
                });
            }
        };
    }]);
