(function ( legaySharedModule ) {
  'use strict';
  if (typeof module !== 'undefined') {
    module.exports = legaySharedModule();
  } else {
    legaySharedModule();
  }
})( function() {
  'use strict';
  return angular.module('LegacySharedModule', [])
    .controller('LegacySharedCtrl', ['$scope', function ($scope) {
      $scope.message = 'Hi !';
    }])
    .directive('legacyShared', function () {
      return {
        scope: {},
        restrict: 'E',
        controller: 'LegacySharedCtrl',
        template: 'I\'m a legacy directive, that can be loaded with or without Webpack, with a message : {{ message }}'
      };
    }).name;
});
