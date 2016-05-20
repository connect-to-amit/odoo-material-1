module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            src: ['static/src/**/*.js', 'static/test/**/*.js'],
            options: {
                sub: true, //[] instead of .
                evil: true, //eval
                laxbreak: true, //unsafe line breaks
            },
        },
        sass: {
            dist: {
                options: {
                    style: "expanded",
                    trace: true,
                    precision: 8
                },
                files: {
                    "static/src/css/web.css": "static/src/scss/web.scss",
                    "static/src/css/website.css": "static/src/scss/website.scss"
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: ["static/src/scss/*.scss", "static/src/scss/includes/*.scss", "static/src/scss/mixins/*.scss"],
                tasks: ['sass']
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('gen', ["sass"]);
    grunt.registerTask('watcher', ["gen", "watch"]);
    grunt.registerTask('test', []);

    grunt.registerTask('default', ['jshint']);

};
