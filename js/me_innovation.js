// JavaScript Document
"use strict";

var demo = angular.module("demo", ['hmTouchEvents', 'ngRoute']);

	demo.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
          templateUrl: 'intro.html',
          controller: 'ctrl'
        })
        .when('/gallery', {
          templateUrl: 'gallery.html',
          controller: 'gallery_ctrl'
        })
        .when('/about', {
          templateUrl: 'about.html',
          controller: 'ctrl'
        })
        .when('/contact', {
          templateUrl: 'contact.html',
          controller: 'ctrl'
        })
        .otherwise('/error',  {
          template: '<p>Error - Page Not Found</p>'
        });
      }])

	demo.controller("ctrl", function($scope){
		//$http.get("server-connection.php?action=get_data");

		$scope.stats = [
			{heading: 'Tools', attributes: 'Word, Excel, PowerPoint, Visio, Illustrator, InDesign, Dreamweaver, PhotoShop, Fireworks, Eclipse IDE, Google Analytics, Sublime Text, SVN, Github/Git, WAMP/XAMP, Gulp, Karma'},
			{heading: 'Technologies', attributes: 'HTML/CSS3, JavaScript, SQL, SASS, jQuery, Bootstrap, Angular, Jasmine'},
			{heading: 'In Progress', attributes: 'Android, Swift, Google App Engine'}
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

		$scope.about_overlay = function() {

			if ( $(window).width() < 799) {
				$("#about_data").toggle("slide");
				console.log($scope.stats_index);
			}
		}


		$scope.items = [
			{title: "ME Innovation Remixed", tech: "HTML5, CSS3, JavaScript, jQuery, BootStrap, SASS", desc: "Boston University Web Development Course Term Project", link: "http://www.meinnovation.net/termproject/index.html", image: "build/img/sample-image1.jpg", image2: "build/img/sample-image1_mobile_vert.jpg"},
			{title: "Muzak", tech: "HTML5, CSS3, JavaScript, jQuery, BootStrap, Spotify API", desc: "Thinkful Front End Course Capstone Project", link: "http://mse2321.github.io/muzak/", image: "build/img/sample-image2.jpg", image2: "build/img/sample-image2_mobile_vert.jpg"},
			{title: "Basketball Quiz", tech: "HTML5, CSS3, JavaScript, jQuery, BootStrap", desc: "Thinkful Front End Course Project", link: "http://mse2321.github.io/basketball-quiz/", image: "build/img/sample-image3.jpg", image2: "build/img/sample-image3_mobile_vert.jpg"},
			{title: "XP Calculator", tech: "HTML5, CSS3, JavaScript, jQuery Mobile, Angular", desc: "Personal Project - RPG Experience Calculator", link: "http://www.meinnovation.net/revyntools/xp-calculator.html", image: "build/img/sample-image4.jpg", image2: "build/img/sample-image4_mobile_vert.jpg"}
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

			if ( $(window).width() < 799) {
				$("#metadata").toggle("slide");
			}
		}

	});
