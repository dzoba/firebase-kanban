var app = angular.module('kanbanApp', ['firebase']);

app.controller('KanbanCtrl', function($scope, $firebaseArray, $rootScope, $document) {
  var tasks = new Firebase("https://glaring-inferno-397.firebaseio.com/tasks");
  $scope.tasks = $firebaseArray(tasks);

  $scope.columns = ['Opened', 'In Progress', 'Verify', 'Done'];

  $scope.detailTask;

  $scope.addTask = function() {
    $scope.tasks.$add({
      title: $scope.newTaskTitle,
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

  $scope.triggerDetail = function(task) {
    $scope.detailTask = task;
  };

  $scope.clearDetail = function(task) {
    $scope.detailTask = undefined;
  };
});
