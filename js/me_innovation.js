// JavaScript Document
"use strict";

var demo = angular.module("demo", ['hmTouchEvents']);

	demo.controller("ctrl",  ['$scope', function($scope){

		$scope.stats = [
			{heading: 'Tools', attributes: 'Illustrator, InDesign, Dreamweaver, PhotoShop, Fireworks, Eclipse IDE, Google Analytics, Sublime Text, SVN, Github/Git, WAMP/XAMP, Gulp, Karma'},
			{heading: 'Technologies', attributes: 'HTML/CSS3, JavaScript, SQL, SASS, jQuery, Bootstrap, Angular, Jasmine, Velocity, JSON, PHP'},
			{heading: 'In Progress', attributes: 'Android, Swift, ECMAScript 6/ES6, React, Google App Engine'}
		];

		$scope.stats_index_first_item = function() {
			$scope.stats_index = 0;
		};

		$scope.stats_index_second_item = function() {
			$scope.stats_index = 1;
		};

		$scope.stats_index_third_item = function() {
			$scope.stats_index = 2;
		};

		$scope.items = [
			{title: "Countries & Capitals", tech: "HTML5, CSS3, JavaScript, Angular, Geonames API, Responsive", desc: "Thinkful Angular API Project", link: "http://mse2321.github.io/countries_capitals/index.html#/", image: "build/img/sample-image1-min.jpg"},
			{title: "Muzak", tech: "HTML5, CSS3, JavaScript, jQuery, Bootstrap, Angular, Spotify API, Responsive", desc: "Thinkful Front End Course Capstone Project w/ custom player", link: "http://mse2321.github.io/muzak/", image: "build/img/sample-image2-min.jpg"},
			{title: "Basketball Quiz", tech: "HTML5, CSS3, JavaScript, jQuery, Bootstrap, Responsive", desc: "Thinkful Front End Course Project", link: "http://mse2321.github.io/basketball-quiz/", image: "build/img/sample-image3-min.jpg"},
			{title: "XP Calculator", tech: "HTML5, CSS3, JavaScript, jQuery Mobile, Angular, Angular-Material, Responsive", desc: "Personal Project - RPG Experience Calculator", link: "http://www.meinnovation.net/revyntools/xp-calculator.html", image: "build/img/sample-image4-min.jpg"},
			{title: "ME Innovation", tech: "HTML5, CSS3, Angular, Hammer.js, Angular-Hammer.js, Video background, Responsive, Bower, Gulp, SASS, JavaScript, jQuery", desc: "Portfolio Site", link: "http://www.meinnovation.net/", image: "build/img/sample-image5-min.jpg"}

		];
			
		$scope.defaultIndex = 0;

		$scope.setIndex = function(index) {
			$scope.defaultIndex = index;
		};

		// sets the new index to determine what image shows
		$scope.newIndex = function(index) {
			return $scope.defaultIndex === index;
		};

		$scope.nextItem = function() {
			$scope.defaultIndex = ($scope.defaultIndex < $scope.items.length - 1) ? ++$scope.defaultIndex : 0;
		};

		$scope.lastItem = function() {
			$scope.defaultIndex = ($scope.defaultIndex > 0) ? --$scope.defaultIndex : $scope.items.length -1;
		};

		$scope.overlay = function() {

			if ( $(window).width() < 899) {
				$("#metadata").toggle("slide");
			}
		};

		$scope.nav = function() {
			$("aside").toggle("slide");
			$("#button_wrap > .fa").toggle();
			if ( $(window).width() < 899) {
				$(".contact").toggle();
			}
		};

		$scope.pageAnimate = function(){
			$(window).load(function() {
			    // start up after 2sec no matter what
			    window.setTimeout(function(){
			        $('body').removeClass("loading").addClass('loaded');
			    }, 200);
			});
		}

	}]);
