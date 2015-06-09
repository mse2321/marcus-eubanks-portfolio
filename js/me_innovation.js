// JavaScript Document
angular.module('me-innovation', ['ngRoute'])
	.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	    when('/about', {
	        templateUrl: 'about.html',
	        controller: 'aboutController'
	      }).
	      when('/contact', {
	        templateUrl: 'contact.html',
	        controller: 'contactController'
	      }).
	      when('/projects', {
	        templateUrl: 'projects.html',
	        controller: 'projectsController'
	      }).
	      when('/index', {
	        templateUrl: 'jumbotron.html',
	        controller: 'jumboController'
	      }).
	      otherwise({
	        redirectTo: '/index'
	      });
	  }]);