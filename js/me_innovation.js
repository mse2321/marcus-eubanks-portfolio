// JavaScript Document

var demo = angular.module("demo", []);
	demo.controller("ctrl", function($scope){
		//$http.get("server-connection.php?action=get_data");

		$scope.items = [
			{title: "ME Innovation Remixed", tech: "HTML5, CSS3, JavaScript, jQuery, BootStrap, SASS", desc: "Boston University Web Development Course Term Project", link: "http://www.meinnovation.net/termproject/index.html", image: "images/sample-image1.jpg"},
			{title: "Muzak", tech: "HTML5, CSS3, JavaScript, jQuery, BootStrap, Spotify API", desc: "Thinkful Front End Course Capstone Project", link: "http://mse2321.github.io/muzak/", image: "images/sample-image2.jpg"},
			{title: "Basketball Quiz", tech: "HTML5, CSS3, JavaScript, jQuery, BootStrap", desc: "Thinkful Front End Course Project", link: "http://mse2321.github.io/basketball-quiz/", image: "images/sample-image3.jpg"},
			{title: "XP Calculator", tech: "HTML5, CSS3, JavaScript, jQuery Mobile, Angular", desc: "Personal Project - RPG Experience Calculator", link: "http://www.meinnovation.net/revyntools/xp-calculator.html", image: "images/sample-image4.jpg"}
		];
			
		$scope.defaultIndex = 0;

		$scope.setIndex = function(index) {
			$scope.defaultIndex = index;
		};

		$scope.newIndex = function(index) {
			return $scope.defaultIndex === index;
		};

		$scope.nextItem = function() {
			$scope.defaultIndex = ($scope.defaultIndex < $scope.items.length - 1) ? ++$scope.defaultIndex : 0;
		};

		$scope.lastItem = function() {
			$scope.defaultIndex = ($scope.defaultIndex > 0) ? --$scope.defaultIndex : $scope.items.length -1;
		};

	});

// Automatically matches height of gallery overlay to photo size. Only works during intitial load.
$(window).load(function matchHeight() {
	var photo_height = $("photo img").height() + 2;
	console.log(photo_height);
	$(".metadata").css("height", photo_height);
});

$( document ).ready(function() {
	"use strict";
	$('#fullpage').fullpage();
	
	$("#nav > li > a").hide();

	$(".metadata").hide();

	$(".metadata").hide();

	$("img").click(toggleOverlay);

	$(".metadata").click(toggleOverlay);

	$(".ui-button").velocity({color: '#ff4081'}, {loop: 25, delay: 1000});

	if ( $(window).width() < 991) {
		$(".stats ul").hide();
	}

	$("div.stats-heading").click(toggleStats);

	//window.onresize = resize;

	function matchHeight() {
		var photo_height = $("photo img").height() + 2;
		console.log(photo_height);
		$(".metadata").css("height", photo_height);
	}

	function toggleOverlay() {
		$(".metadata").toggle("slide");
	}

	function toggleStats() {
		$(this).next().slideToggle();
	}

	function iconSwap() {
	
		$("#linkedIn").hover(function() {
			$("#linkedIn").attr("src", "images/linkedIn-512_selected.png");
		});
		$("#linkedIn").mouseleave(function() {
			$("#linkedIn").attr("src", "images/linkedIn-512.png");
		});
		$("#gitHub").hover(function() {
			$("#gitHub").attr("src", "images/gitHub-512_selected.png");
		});
		$("#gitHub").mouseleave(function() {
			$("#gitHub").attr("src", "images/gitHub-512.png");
		});
		$("#emailIcon").hover(function() {
			$("#emailIcon").attr("src", "images/email-512_selected.png");
		});
		$("#emailIcon").mouseleave(function() {
			$("#emailIcon").attr("src", "images/email-512.png");
		});
	}	
	
	iconSwap();
});
