// JavaScript Document
var demo = angular.module("demo", ['hmTouchEvents', 'ngRoute']);

	demo.config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
          templateUrl: 'intro.html',
          controller: 'ctrl'
        })
        .when('/gallery', {
          templateUrl: 'gallery.html',
          controller: 'gallery'
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
		// general controller for views
	});
	demo.controller("gallery", function($scope){
		//$http.get("server-connection.php?action=get_data");

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
	
	});

// Automatically matches height of gallery overlay to photo size. Only works during intitial load.
$(window).load(function matchHeight() {
	var photo_height = $("photo img").height();
	var windowWidth = parseInt($(window).width());

	if (windowWidth > 991) {
		$(".metadata").css("height", photo_height);
	} else {
		return false;
	};

});

$( document ).ready(function() {
	"use strict";

	/*$('.nav li a').click(function(){
    	$('.navbar-collapse').collapse('hide');
	});*/

	$(".ui-button").velocity({color: '#ff4081'}, {loop: 25, delay: 1000});

	$(".stats-overlay").hide();

	$(".stats-ul li").hide();
	$(".stats-ul").hide();

	if ( $(window).width() < 799) {
		$("div.stats-heading").click(toggleStats);
		$(".stats-overlay").click(toggleStatsOverlay);
	} else if ($(window).width() > 798 && $(window).width() < 992) {
		$("div.stats-heading").click(toggleStatsUl);
		$(".stats-ul li").show();
	};

	if ($(window).width() > 991) {
		$(".stats-ul li").show();
		$(".stats-ul").show();
	};

	function toggleOverlay() {
		$(".metadata").toggle("slide");
	}

	function toggleStats() {
		$(this).prev().slideToggle();
	}

	function toggleStatsUl() {
		$(this).next().slideToggle();
	}

	function toggleStatsOverlay() {
		$(this).slideToggle();
	}

	function iconSwap() {
	
		$("#linkedIn").hover(function() {
			$("#linkedIn").attr("src", "build/img/linkedIn-512_selected.png");
		});
		$("#linkedIn").mouseleave(function() {
			$("#linkedIn").attr("src", "build/img/linkedIn-512.png");
		});
		$("#gitHub").hover(function() {
			$("#gitHub").attr("src", "build/img/gitHub-512_selected.png");
		});
		$("#gitHub").mouseleave(function() {
			$("#gitHub").attr("src", "build/img/gitHub-512.png");
		});
		$("#emailIcon").hover(function() {
			$("#emailIcon").attr("src", "build/img/email-512_selected.png");
		});
		$("#emailIcon").mouseleave(function() {
			$("#emailIcon").attr("src", "build/img/email-512.png");
		});
	}

	if ($(window).width() > 700) {
		iconSwap();
	};
});
