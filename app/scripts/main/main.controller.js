'use strict';

/**
 * @ngdoc function
 * @name angularChohyoTutorialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularChohyoTutorialApp
 */
angular.module('angularChohyoTutorialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
