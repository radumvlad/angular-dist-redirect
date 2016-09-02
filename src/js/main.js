'use strict';

/* Controllers */

angular.module('app')
.controller('AppCtrl', ['$scope',
	function ($scope) {

		$scope.app = {
			name: 'Test',
			version: '1.0.0',
			settings: {},
			user: ''
		};

	}]);
