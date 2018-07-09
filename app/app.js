var app = angular.module('myApp',['ngRoute','ngStorage','mainApp']);

app.config(function($routeProvider){
	$routeProvider
	  .when("/",{
        templateUrl :"app/views/main.html",
        controller:"mainController"

	})
	// .when("/home",{
 //        templateUrl :"app/views/home.html",
 //        controller:"homeController"

	// })
	
});	