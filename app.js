var app = angular.module('dynamicViews', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var content = " content goes here..."

  $routeProvider.
    when('/', {template: 'Home Page' + content, controller: MainCtrl}).
    when('/first', {template: 'First Page' + content, controller: FirstCtrl}).
    when('/second', {template: 'Second Page' + content, controller: SecondCtrl}).
    otherwise({redirectTo: '/'});
  $locationProvider.html5Mode( true );
}]);

app.factory('Page', function(){
  var title = '';
  return {
    title: function() {return title;},
    setTitle: function(newTitle) {title = newTitle;},
    message: function() {return message;},
    setMessage: function(newMessage) {message = newMessage;}
  };
});

function MainCtrl($scope, Page) {
  $scope.Page = Page;
  Page.setTitle("Home");
  Page.setMessage("You are currently viewing the Home page.");
}
function FirstCtrl($scope, Page) {
  Page.setTitle('First');
  Page.setMessage("You are currently viewing the First page.");
}
function SecondCtrl($scope, Page) {
  Page.setTitle('Second');
  Page.setMessage("You are currently viewing the Second page.");
}
