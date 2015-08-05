(function () {
    'use strict';

    angular.module('me-innovation').controller('ContactController', ['ContactService', contactController]);

    function contactController(ContactService) {
        // Grab a reference to keyword this in a more meaningful variable such as vm standing for view model
        var vm = this;
        /**
         * Native and bindable properties
         */
        vm.contact = {};
        /**
         * Operations
         */
        vm.sendMail = function () {
            ContactService.sendMail(vm.contact).success(function (response) {
                // Clean current contact form
                vm.contact = {};
            });
        };
    }
}());