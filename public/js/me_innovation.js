// JavaScript Document

angular.module('me-innovation', ['ngRoute'])
	.config(['$routeProvider',
	  function($routeProvider) {
		"use strict";  
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
$( document ).ready(function() {
	"use strict";
	$("#nav > li > a").hide();
	
	$("nav").click(function() 
	{
		$("#nav > li > a").toggle("fast");
	});
	
	function linkedInIconSwap () {
	
		$("#linkedIn").hover(function() {
			$("#linkedIn").attr("src", "images/linkedin_magenta_32x32.png");
		});
		$("#linkedIn").mouseout(function() {
			$("#linkedIn").attr("src", "images/linkedin_gray_32x32.png");
		});
	}
	
	function gitHubIconSwap () {
		$("#gitHub").hover(function() {
			$("#gitHub").attr("src", "images/github_magenta_32x32.png");
		});
		$("#gitHub").mouseout(function() {
			$("#gitHub").attr("src", "images/github_gray_32x32.png");
		});
	}
	
	linkedInIconSwap();
	gitHubIconSwap();
});
