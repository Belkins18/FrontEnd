// Gruntfile.js

// ��� ������������ ��������� ������ ���� �������
module.exports = function(grunt) {

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
        /*Sass*/
        sass: {
            develop: {
                options: {
                    style: 'expanded',
                    compass: true
                },
                files: {
                    'css/develop/bootstrap.css': 'scss/bootstrap.scss'
                }
            },
            production: {
                options: {
                    style: 'compressed',
                    compass: true
                },
                files: {
                    'css/production/bootstrap.css': 'scss/bootstrap.scss'
                }
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
                files: 'scss/{,*/}*.{scss,sass}',
                tasks: ['sass:develop']
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

    grunt.registerTask('sass', ['sass']);
    grunt.registerTask('default', [
        'sass:dev',
        'watch'
    ]);
};