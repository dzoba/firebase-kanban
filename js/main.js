var app = angular.module("kanbanApp", ["firebase"]);

app.controller("KanbanCtrl", function($scope, $firebaseArray) {
  var tasks = new Firebase("https://glaring-inferno-397.firebaseio.com/tasks");
  $scope.tasks = $firebaseArray(tasks);

  $scope.addTask = function() {
    $scope.tasks.$add({
      text: $scope.newTaskText,
      col: 0
    });
  };

  $scope.moveLeft = function(task) {
    task.col -= 1;
    $scope.tasks.$save(task);
  };

  $scope.moveRight = function(task) {
    task.col++;
    $scope.tasks.$save(task);
  };
});
