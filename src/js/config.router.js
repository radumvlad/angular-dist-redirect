'use strict';

/**
 * Config for the router
 */
angular.module('app')
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )
    .config(
        ['$stateProvider', '$urlRouterProvider', '$locationProvider', 'MODULE_CONFIG',
            function ($stateProvider, $urlRouterProvider, $locationProvider, MODULE_CONFIG) {

                $locationProvider.html5Mode(true);

                $urlRouterProvider.otherwise('/login');
                $stateProvider
                    .state('login', {
                        url: '/login',
                        templateUrl: 'src/tpl/login_page.html',
                        resolve: load(['src/js/controllers/login.js'])
                    });


                function load(srcs, callback) {
                    return {
                        deps: ['$ocLazyLoad', '$q',
                            function ($ocLazyLoad, $q) {
                                var deferred = $q.defer();
                                var promise = false;
                                srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
                                if (!promise) {
                                    promise = deferred.promise;
                                }


                                angular.forEach(srcs, function (src) {
                                    promise = promise.then(function () {
                                        return $ocLazyLoad.load(src);
                                    });
                                });
                                deferred.resolve();
                                return callback ? promise.then(function () {
                                    return callback();
                                }) : promise;
                            }]
                    }
                }
            }
        ]
    );