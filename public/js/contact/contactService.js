(function () {
    'use strict';

    angular.module('me-innovation').service('ContactService', ['$http', contactService]);

    function contactService($http) {
        /**
         * Send mail to mail endpoint in our API
         * @param mail object to be sent
         * @returns {HttpPromise}
         */
        this.sendMail = function (mail) {
            return $http.post('/mail', mail);
        }
    }
}());