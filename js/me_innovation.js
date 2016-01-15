// JavaScript Document

var demo = angular.module("demo", []);
	demo.controller("ctrl", function($scope, $http){
			$scope.title = "ME Innovation Remixed";
			$scope.tech = "HTML5, CSS3, JavaScript, jQuery, BootStrap, SASS";
			$scope.desc = "Boston University Web Development Course Term Project";
			$scope.url = "http://www.meinnovation.net/termproject/index.html";
			$scope.image = "images/sample-image1.jpg";
			//$http.get();
	});

$( document ).ready(function() {
	"use strict";
	$('#fullpage').fullpage();
	
	$("#nav > li > a").hide();

	$(".metadata").hide();

	$(".metadata").hide();

	$("img").click(toggleOverlay);

	$("#arrowRight").click(toggleOverlay);

	$("#arrowLeft").click(toggleOverlay);

	$(".ui-button").velocity({color: '#ff4081'}, {loop: 15, delay: 1000});

	function toggleOverlay() {
		$(".metadata").toggle("slide");
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
