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

    'angularChohyoTutorialController',
    'angularChohyoTutorialService'
  ])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'index-tmpl',
      controller: 'SheetListController'
    })
    .when('/new', {
      templateUrl: 'new-tmpl',
      controller: 'CreationController'
    })
    .when('/sheet/:id', {
      templateUrl: 'sheet-tmpl',
      controller: 'SheetController'
    })
    .otherwise({
      redirectTo: '/'
    });
  }]);
