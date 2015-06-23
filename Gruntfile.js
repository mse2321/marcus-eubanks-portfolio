module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
        js: {
            options: {
                separator: ';'
            },
            src: 'js/**/*.js',
            dest: 'js/me_innovation.js'
        },
        css: {
            src: 'css/**/*.scss',
            dest: 'css/style.scss'
        }
    },
    uglify: {
        options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        dist: {
            files: {
                'js/me_innovation.min.js': ['<%= concat.js.dest %>']
            }
        }
    },
    jshint: {
        files: ['Gruntfile.js', 'js/**/*.js'],
        options: {
            // options here to override JSHint defaults
            globals: {
                console: true,
                module: true,
                document: true
            }
        }
    },
    watch: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
    }
});

// Loading plugins
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-concat');

// Creating our custom commands or tasks
//grunt.registerTask('marcus', ['jshint', 'qunit']);

grunt.registerTask('default', ['jshint', 'concat', 'uglify']);

};