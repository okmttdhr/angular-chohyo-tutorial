'use strict';

/**
 * @ngdoc overview
 * @name angularChohyoTutorialApp
 * @description
 * # angularChohyoTutorialApp
 *
 * Main module of the application.
 */
angular
  .module('angularChohyoTutorialApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',


  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'index-tmpl'
    })
    .when('/new', {
      templateUrl: 'new-tmpl'
    })
    .when('/sheet/:id', {
      templateUrl: 'sheet-tmpl'
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);
