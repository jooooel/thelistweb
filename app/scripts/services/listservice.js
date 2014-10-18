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
                list.identifier = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {var r = Math.random()*16|0,v=c=='x'?r:r&0x3|0x8;return v.toString(16);});
                return restService.post('thelist/secure/list?username=' + userService.getUser().username, list);
            }
        };
    }]);
