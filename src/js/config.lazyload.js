// lazyload config

angular.module('app')
    .constant('MODULE_CONFIG', [
        ]
    )
    // oclazyload config
    .config(['$ocLazyLoadProvider', 'MODULE_CONFIG', 
        function ($ocLazyLoadProvider, MODULE_CONFIG) {

        $ocLazyLoadProvider.config({
            debug: false,
            events: true,
            modules: MODULE_CONFIG
        });
    }])
;

