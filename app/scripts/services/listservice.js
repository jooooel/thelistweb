'use strict';

/**
 * @ngdoc service
 * @name thelistwebApp.listService
 * @description
 * # listService
 * Factory in the thelistwebApp.
 */
angular.module('thelistwebApp')
    .factory('listService', ['restService', 'userService', function (restService, userService) {
        return {
            getLists: function () {
                return restService.get('thelist/secure/user?username=' + userService.getUser().username);
            }
        };
    }]);
