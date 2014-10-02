'use strict';

/**
 * @ngdoc overview
 * @name mdwConfApp
 * @description
 * # mdwConfApp
 *
 * Main module of the application.
 */
angular
  .module('mdwConfApp', [
    'ui.bootstrap',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/venue', {
        templateUrl: 'views/venue.html'
      })
      .when('/program/speakers', {
        templateUrl: 'views/program/speakers.html'
      })
      .when('/program/technical', {
        templateUrl: 'views/program/technical.html',
        controller: 'ProgramCtrl'
      })
      .when('/program/schedule', {
        templateUrl: 'views/program/schedule.html'
      })
      .when('/program/hs-outreach', {
        templateUrl: 'views/program/hs-outreach.html'
      })
      .when('/sponsors/information', {
        templateUrl: 'views/sponsors/information.html'
      })
      .when('/sponsors/exhibitor', {
        templateUrl: 'views/sponsors/exhibitor.html'
      })
      .when('/sponsors/list', {
        templateUrl: 'views/sponsors/list.html'
      })
      .when('/organizers/general', {
        templateUrl: 'views/organizers/template.html',
        controller: 'GeneralCtrl'
      })
      .when('/organizers/gac', {
        templateUrl: 'views/organizers/template.html',
        controller: 'GacCtrl'
      })
      .when('/organizers/mpc', {
        templateUrl: 'views/organizers/template.html',
        controller: 'MpcCtrl'
      })
      .when('/organizers/technical', {
        templateUrl: 'views/organizers/template.html',
        controller: 'TechCtrl'
      })
      .when('/presentations', {
        templateUrl: 'views/presentations/form.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
