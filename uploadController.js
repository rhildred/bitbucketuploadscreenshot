angular.module("myApp", [
    'mobile-angular-ui',

    // touch/drag feature: this is from 'mobile-angular-ui.gestures.js'
    // it is at a very beginning stage, so please be careful if you like to use
    // in production. This is intended to provide a flexible, integrated and and
    // easy to use alternative to other 3rd party libs like hammer.js, with the
    // final pourpose to integrate gestures into default ui interactions like
    // opening sidebars, turning switches on/off ..
    'mobile-angular-ui.gestures'
]).controller("uploadController", function ($scope, $http) {
    angular.extend($scope, {
        init: function () {}
    });
    $scope.init();
});
