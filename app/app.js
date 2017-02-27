var app = angular.module('app', ['ngRoute'])

.config(function($routeProvider, $locationProvider, $httpProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider
	.when('/', {
        templateUrl: '/pages/home/home.html',
		controller: 'homeCtrl'
    })
    .otherwise({
        template: '<content><h2>404 - Page not found!</h2></content>'
    });
})
