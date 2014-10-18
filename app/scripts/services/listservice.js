'use strict';

/**
 * @ngdoc service
 * @name thelistwebApp.listService
 * @description
 * # listService
 * Factory in the thelistwebApp.
 */
angular.module('thelistwebApp')
    .factory('listService', ['restService', 'commonService', 'userService', function (restService, commonService, userService) {
        var lists;

        return {
            getCachedList: function (listId) {
                return _.find(lists, function (list) {
                    return list.identifier == listId;
                });
            },

            getLists: function () {
                return restService.get('thelist/secure/user?username=' + userService.getUser().username)
                    .then(function (response) {
                        lists = response.data;
                        return lists;
                    });
            },

            createList: function (list) {
                list.identifier = commonService.generateGuid();
                return restService.post('thelist/secure/list?username=' + userService.getUser().username, list);
            }
        };
    }]);
