'use strict';

module.exports = function (grunt) {
    // Let *load-grunt-tasks* require everything
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        copy: {
            "dist": {
                "files": [
                //Resources && Styling:
                {"expand": true, "src": "**", "cwd": "img", "dest": "dist/img"},

                //Javascript:
                {"expand": true, "src": "**", "cwd": "src/js/controllers", "dest": "dist/src/js/controllers"},

                //HTML:
                {"src": "min.html", "dest": "dist/index.html"},
                {"expand": true, "src": "**", "cwd": "src/tpl", "dest": "dist/src/tpl"}
                ]
            }
        },
        concat_css: {
            all: {
                src: ["bower_components/bootstrap/dist/css/bootstrap.min.css"],
                dest: "dist/css/styles.css"
            }
        },
        concat: {
            "fonts": {},
            "dist": {
                "src": [
                "bower_components/jquery/dist/jquery.js",
                "bower_components/angular/angular.js",
                "bower_components/bootstrap/dist/js/bootstrap.js",                
                "bower_components/angular-ui-router/release/angular-ui-router.js",
                "bower_components/angular-ui-utils/ui-utils.js",
                "bower_components/angular-ui-load/ui-load.js",
                "bower_components/promise-polyfill/promise.min.js",
                "bower_components/oclazyload/dist/ocLazyLoad.js",
                "src/js/*.js"
                ],
                "dest": "dist/js/app.src.js"
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                    'dist/*'
                    ]
                }]
            }
        },
        recess: {
            dist: {
                files: {
                    'dist/css/app.min.css': [
                    'css/*.css'
                    ]
                },
                options: {
                    compress: true
                }
            }
        },
        uglify: {
            options : {
                mangle   : true
            },
            dist: {
                src: [
                    'dist/js/app.src.js'
                ],
                dest: 'dist/js/app.min.js'
            }
        }
    }); 

    grunt.loadNpmTasks('grunt-concat-css');
    grunt.registerTask('build', ['clean:dist', 'copy:dist', 'concat:dist', 'concat_css:all']);
    grunt.registerTask('default', []);
};