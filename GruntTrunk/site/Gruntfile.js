// Gruntfile.js

// Вся конфигурация находится внутри этой функции
module.exports = function(grunt) {

    // ===========================================================================
    // Конфигурация GRUNT ===========================================================
    // ===========================================================================
    grunt.initConfig({
        //Здесь будут указаны модули и их настройки
// зададим конфигурацию модуля -----------------------------------
        jshint: {
            options: {
                reporter: require('jshint-stylish') // используем jshint-stylish для вывода стилизованного отчета об ошибках
            },

            // здесь мы указываем файлы, которые необходимо проверить
            // после запуска задачи будет проверен Gruntfile.js и все файлы с расширением .js в папке src
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
    // Загружаем модули GRUNT ========================================================
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