'use strict';

/**
 * @ngdoc overview
 * @name myAppApp
 * @description
 * # myAppApp
 *
 * Main module of the application.
 */
var app= angular
  .module('myAppApp', [
    'ngRoute'
  ]);
  app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/invoice', {
        templateUrl: 'views/invoice.html',
        controller: 'InvoiceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
