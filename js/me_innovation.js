// JavaScript Document
"use strict";

var demo = angular.module('demo', ['hmTouchEvents']);

demo.controller('ctrl',  ['$scope', function($scope){

	$scope.nav_menu = "-hide";

	$scope.stats = [
		{heading: "Tools", attributes: "Illustrator, InDesign, Dreamweaver, PhotoShop, Fireworks, Eclipse IDE, Google Analytics, Sublime Text, SVN, Github/Git, WAMP/XAMP, Gulp, Karma"},
		{heading: "Technologies", attributes: "HTML/CSS3, JavaScript, SQL, SASS, jQuery, Bootstrap, Angular, Jasmine, Velocity, JSON, PHP"},
		{heading: "In Progress", attributes: "Android, Swift, ECMAScript 6/ES6, React, Google App Engine"}
	];

	// This helps to display correct stats under each category for mobile
	$scope.stats_index_item = function(stats_item) {
		$scope.stats_index = $scope.stats_item;
	};

	$scope.items = [
		{ title: "Muzak", tech: "HTML5, CSS3, JavaScript, jQuery, Bootstrap, Angular, Spotify API, Responsive", desc: "Song preview search engine w/ custom player", link: "http://mse2321.github.io/muzak/", image: "build/img/sample-image2-min.jpg" },
		{ title: "XP Calculator", tech: "HTML5, CSS3, JavaScript, jQuery Mobile, Angular, Angular-Material, Responsive", desc: "Table-top RPG experience calculator", link: "http://www.meinnovation.net/revyntools/xp-calculator.html", image: "build/img/sample-image4-min.jpg" },
		{ title: "Countries & Capitals", tech: "HTML5, CSS3, JavaScript, Angular, Geonames API, Responsive", desc: "Angular API project to look up country data.", link: "http://mse2321.github.io/countries_capitals/index.html#/", image: "build/img/sample-image1-min.jpg" },
		{ title: "Basketball Quiz", tech: "HTML5, CSS3, JavaScript, jQuery, Bootstrap, Responsive", desc: "Simple quiz app", link: "http://mse2321.github.io/basketball-quiz/", image: "build/img/sample-image3-min.jpg" },
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

	$scope.select = function(item) {
		var items = $scope.items;

        angular.forEach(items, function(item) {
        	item.selected = false;
        });
        	
        item.selected = true;
    };

	$scope.overlay = function() {
		if (window.innerWidth < 899) {
			var overlayDiv = document.getElementById("metadata");
	      	if(overlayDiv.style.display == "none"){
	          overlayDiv.style.display = "block";
	      	} else {
	          overlayDiv.style.display = "none";
	        }
		}
	};

	$scope.nav = function() {
		if($scope.nav_menu == "-show") {
			$scope.nav_menu = "-hide";
		} else if($scope.nav_menu == "-hide") {
			$scope.nav_menu = "-show";
		}
	};

}]);