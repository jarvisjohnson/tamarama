module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.initConfig({
  
        pkg: grunt.file.readJSON('package.json'),

        config: {
            app: 'app'
        },

        jshint: {
          files: ['Gruntfile.js', 'app/src/**/*.js'],
          options: {
            // options here to override JSHint defaults
            globals: {
              jQuery: true,
              console: true,
              module: true,
              document: true
            }
          }
        }, 

        connect: {
            options: {
                port: 9000,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.tmp',
                        '<%= config.app %>/public'
                    ]
                }
            },
        },

        uglify: {
          dist: {
            files: {
              'app/public/js/scripts.min.js': [
                'app/src/javascripts/bootstrap/transition.js',
                'app/src/javascripts/bootstrap/alert.js',
                'app/src/javascripts/bootstrap/button.js',
                'app/src/javascripts/bootstrap/carousel.js',
                'app/src/javascripts/bootstrap/collapse.js',
                'app/src/javascripts/bootstrap/dropdown.js',
                'app/src/javascripts/bootstrap/modal.js',
                'app/src/javascripts/bootstrap/tooltip.js',
                'app/src/javascripts/bootstrap/popover.js',
                'app/src/javascripts/bootstrap/scrollspy.js',
                'app/src/javascripts/bootstrap/tab.js',
                'app/src/javascripts/bootstrap/affix.js',
                'app/src/javascripts/jquery.mousewheel.min.js',
                'app/src/javascripts/slick/slick.js',
                'app/src/javascripts/*.js',
                'app/src/javascripts/_*.js'
              ]
            },
            options: {
              // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
              sourceMap: 'app/public/js/scripts.min.js.map'
            }
          }
        },


        compass: {
            dev: {
                options: {
                    sassDir: ['app/src/stylesheets'],
                    cssDir: ['app/public/css'],
                    environment: 'development'
                }
            },
            prod: {
                options: {
                    sassDir: ['app/src/stylesheets'],
                    cssDir: ['app/public/css'],
                    environment: 'production'
                }
            },
        }, 

        postcss: {
            options: {

              map: {
                  inline: false, // save all sourcemaps as separate files...
                  annotation: 'app/public/css/maps/' // ...to the specified directory
              },

              processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                require('cssnano')() // minify the result
              ]
            },
            dist: {
              src: 'app/public/css/*.css'
            }
        },                 

        watch: {
            uglify: {
                files: ['<%= jshint.files %>'],
                tasks: ['uglify']
            },
            compass: {
                files: ['**/*.{scss,sass}'],
                tasks: ['compass:dev']
            },            
            options: {
                livereload: true,
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/public/{,*/}*.html',
                    '<%= config.app %>/public/css/{,*/}*.css',
                    '<%= config.app %>/public/images/{,*/}*',
                    '<%= config.app %>/public/js/{,*/}*.js'
                ]
            },
        },

    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-postcss');    
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['connect:livereload', 'compass:dev', 'uglify', 'watch']);
    // prod build
    grunt.registerTask('prod', [ 'uglify', 'compass:prod', 'postcss']);

};
