// JavaScript Document
"use strict";

var demo = angular.module('demo', ['hmTouchEvents']);

demo.controller('ctrl',  ['$scope', function($scope){

	$scope.nav_menu = "-hide";
	$scope.defaultIndex = 0;
	$scope.stats = [
		{heading: "Tools", attributes: "Illustrator, Dreamweaver, PhotoShop, Github/Git, SVN, WAMP/XAMPP, NPM, Gulp, Karma, Grunt, Webpack, Babel"},
		{heading: "Technologies", attributes: "HTML/CSS3, JavaScript (ES6), SQL, SASS, jQuery, Bootstrap, Angular 1.5, Jasmine, Velocity, JSON, PHP, React"},
		{heading: "CMS", attributes: "Wordpress"},
		{heading: "In Progress", attributes: "React Native, Redux, Swift"}
	];
	$scope.items = [
		{title: "XP Calculator", tech: "HTML5, CSS3, JavaScript, jQuery Mobile, Angular, Angular-Material, Responsive", desc: "Table-top RPG experience calculator", link: "http://www.meinnovation.net/xp-calculator/index.html", link2:"https://github.com/mse2321/xp-calculator", image: "build/img/sample-image4-min.jpg"},
		{title: "Countries & Capitals", tech: "HTML5, CSS3, JavaScript, Angular, Geonames API, Responsive", desc: "Angular API project to look up country data.", link: "http://mse2321.github.io/countries_capitals/index.html#/", link2:"https://github.com/mse2321/countries_capitals", image: "build/img/sample-image1-min.jpg"},
		{title: "Basketball Quiz", tech: "HTML5, CSS3, JavaScript, jQuery, Bootstrap, Responsive", desc: "Simple quiz app", link: "http://mse2321.github.io/basketball-quiz/", link2:"https://github.com/mse2321/basketball-quiz", image: "build/img/sample-image3-min.jpg"},
		{title: "Muzak", tech: "HTML5, CSS3, JavaScript, jQuery, Bootstrap, Angular, Spotify API, Responsive", desc: "Song preview search engine w/ custom player", link: "http://mse2321.github.io/muzak/", link2:"https://github.com/mse2321/muzak", image: "build/img/sample-image2-min.jpg"}
	];

	//this sets the first gallery dot to active
	$scope.items[0].selected = true;

	// This helps to display correct stats under each category for mobile
	$scope.stats_index_item = function(stats_item) {
		$scope.stats_index = $scope.stats_item;
	};

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

 // this controls the gallery overlay for smaller screens
	$scope.overlay = function() {
		if (window.innerWidth < 899) {
			var overlayDiv = document.getElementById("metadata");
		  if(overlayDiv.style.visibility == "hidden") {
		   overlayDiv.style.opacity = "1";
		   overlayDiv.style.visibility = "visible";
		   overlayDiv.style.width = "92%";
		  } else {
		   overlayDiv.style.opacity = "0";
		   overlayDiv.style.visibility = "hidden";
		   overlayDiv.style.width = "0";
		  }
		}
	};

	// this controls the sidebar nav
	$scope.nav = function() {
		console.log("Im here");
		if($scope.nav_menu == "-show") {
			$scope.nav_menu = "-hide";
		} else if($scope.nav_menu == "-hide") {
			$scope.nav_menu = "-show";
		}
	};

}]);