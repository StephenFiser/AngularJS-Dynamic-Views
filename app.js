var app = angular.module('dynamicViews', []);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  var content = " content goes here..."

  $routeProvider.
    when('/', {template: 'Home page' + content, controller: MainCtrl}).
    when('/first', {template: 'First page' + content, controller: FirstCtrl}).
    when('/second', {template: 'Second page' + content, controller: SecondCtrl}).
    otherwise({redirectTo: '/'});
  $locationProvider.html5Mode( true );
}]);

app.factory('View', function(){
  var title;
  return {
    title: function() {return title;},
    setTitle: function(newTitle) {title = newTitle;},
    message: function() {return message;},
    setMessage: function(newMessage) {message = newMessage;}
  };
});

function MainCtrl($scope, View) {
  $scope.View = View;
  View.setTitle("Home");
  View.setMessage("You are currently viewing the Home page.");
}
function FirstCtrl($scope, View) {
  View.setTitle('First');
  View.setMessage("You are currently viewing the First page.");
}
function SecondCtrl($scope, View) {
  View.setTitle('Second');
  View.setMessage("You are currently viewing the Second page.");
}
