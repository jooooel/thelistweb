'use strict';

/**
 * @ngdoc service
 * @name thelistwebApp.itemService
 * @description
 * # itemService
 * Factory in the thelistwebApp.
 */
angular.module('thelistwebApp')
    .factory('itemService', ['restService', 'commonService', 'userService', function (restService, commonService, userService) {
        var items;

        return {
            getItems: function (listId) {
                var username = userService.getUser().username;
                return restService.get('thelist/secure/items?username=' + username + '&identifier=' + listId).then(function (response) {
                    items = response.data;
                    return items;
                });
            },

            createItem: function (newItem, listId) {
                newItem.identifier = commonService.generateGuid();
                newItem.details = '';
                newItem.timeStamp = new Date();
                newItem.version = 1;
                newItem.nbrOfChatMessages = 0;

                return restService.post('thelist/secure/singleitem?username=' + userService.getUser().username + '&identifier=' + listId, newItem);
            }
        };
    }]);
