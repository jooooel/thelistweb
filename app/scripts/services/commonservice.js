'use strict';

/**
 * @ngdoc service
 * @name thelistwebApp.commonService
 * @description
 * # commonService
 * Factory in the thelistwebApp.
 */
angular.module('thelistwebApp')
    .factory('commonService', [function () {
        return {
            generateGuid: function () {
                return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                    var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
                    return v.toString(16);
                });
            }
        };
    }]);