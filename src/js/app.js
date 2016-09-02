'use strict';

angular.module('app', ['ui.router',
	'ui.jq',	
    'ui.load',
	'oc.lazyLoad']);

angular.module('app').run(['$rootScope', '$templateCache', 
	function($rootScope, $templateCache) {
        $rootScope.$on('$routeChangeStart', function(event, next, current) {
            if (typeof(current) !== 'undefined'){
                $templateCache.remove(current.templateUrl);
            }
        });
    }]);
