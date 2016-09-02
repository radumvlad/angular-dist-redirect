'use strict';

var app =
    angular.module('app')
        
        .config(['$controllerProvider', '$compileProvider', '$provide', 
            function ($controllerProvider, $compileProvider, $provide) {
            // lazy controller, directive and service
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;
            app.value = $provide.value;
        }
        ]);