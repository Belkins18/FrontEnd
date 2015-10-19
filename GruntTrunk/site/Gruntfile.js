// Gruntfile.js

// ��� ������������ ��������� ������ ���� �������
module.exports = function (grunt) {

    // ===========================================================================
    // ������������ GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        //����� ����� ������� ������ � �� ���������
// ������� ������������ ������ -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish') // ���������� jshint-stylish ��� ������ �������������� ������ �� �������
            },

            // ����� �� ��������� �����, ������� ���������� ���������
            // ����� ������� ������ ����� �������� Gruntfile.js � ��� ����� � ����������� .js � ����� src
            build: ['Gruntfile.js', 'js/**/*.js']
        },
        /*JS concat*/
        concat: {
            dist: {
                src: [
                    'js/modernizr.js',
                    'js/jquery.fancybox.pack.js',
                    'js/jquery.formstyler.min.js',
                    'js/jquery.js',
                    'js/jquery-ui.js',
                    'js/owl.carousel.min.js',
                    'js/script.js'
                ],
                dest: 'js/debug.js'
            }
        },
        /*Create JS min file*/
        uglify: {
            build: {
                src: 'js/debug.js',
                dest: 'production/js/production.js'
            }
        },
        /*Sass*/
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    compass: true
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['bootstrap.scss', 'style.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            },
            prod: {
                options: {
                    style: 'compressed',
                    compass: true
                },
                files: [{
                    expand: true,
                    cwd: 'scss',
                    src: ['bootstrap.scss', 'style.scss'],
                    dest: 'production/css',
                    ext: '.css'
                }]
            }
        },
        /*Conpressed images*/
        imagemin: {
            dynamic: {                             // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'images/',                // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'production/images'      // Destination path prefix
                }]
            }
        },
        uncss: {
            dist: {
                src: ['index.html'],
                dest: 'css/style.css',
                options: {
                    report: 'min'
                }
            }
        },
        /*Watch*/
        watch: {
            sass: {
                files: 'scss/{,*/}*.{scss}',
                tasks: ['sass:dev']
            }
        }

    });

    // ===========================================================================
    // ��������� ������ GRUNT ========================================================
    // ===========================================================================
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-uncss');

    grunt.registerTask('default', ['sass']);

    grunt.registerTask('imgcompress', ['imagemin']);

    grunt.registerTask('prod-js', ['concat', 'uglify']);
    grunt.registerTask('debug-js', ['concat']);

    grunt.registerTask('sass_compile', ['sass:dev', 'watch:sass']);
};