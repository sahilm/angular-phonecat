'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('phones/phones.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}

angular.module('phonecatApp', []).controller('PhoneListCtrl', ['$scope', '$http', PhoneListCtrl]);