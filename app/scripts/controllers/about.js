'use strict';

/**
 * @ngdoc function
 * @name angularChohyoTutorialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularChohyoTutorialApp
 */
angular.module('angularChohyoTutorialApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
