'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($http) {
  var key; // api key here
  $http.jsonp('http://api.brewerydb.com/v2/beers?abv="-10"&' + key + '&callback=JSON_CALLBACK').
    success(function(data, status, headers, config) {
      console.log('success');
    }).
    error(function(data, status, headers, config) {
      console.log;
    });
});
