module.exports = function(grunt) {

  // Display the elapsed execution time of grunt tasks.
  // Require it at the top and pass in the grunt instance.
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // ==========================================================================
    // paths - Used to setup paths to various assets used in the project.
    // ==========================================================================
    paths: {

        // JavaScript assets created specifically for the project.
        js_theme: {
            base: 'js',
            dest: 'js',
            files_std: ['js/*.js', '!js/*.min.js'],
            special: ['Gruntfile.js'],
            files: '<%= paths.js_theme.files_std %>'
        },

        // JavaScript assets imported from vendors.
        js_theme_vendor: {
            files_std: ['js/vendor/**/*.js', '!js/vendor/**/*.min.js', ],
            files: '<%= paths.js_theme_vendor.files_std %>'
        },

        // Foundation components.
        js_foundation_components: {
            base: 'bower_components/foundation/js/foundation',
            dest: 'js/vendor/foundation/',
            files_std: ['*.js', '!*.min.js'],
            files: '<%= paths.js_foundation_components.files_std %>'
        },

        // Foundation vendor assets that come with Foundation.
        js_foundation_vendor: {
            base: 'bower_components/foundation/js/vendor',
            dest: 'js/vendor/foundation/vendor',
            files_std: ['*.js', '!*.min.js'],
            files: '<%= paths.js_foundation_vendor.files_std %>'
        },

        // Modenrizr imported as part of bower.
        js_modernizr: {
            src: 'bower_components/modernizr/modernizr.js',
            dest: 'js/vendor/modernizr/modernizr.min.js'
        },

        // Owl Carousel imported as part of bower.
        js_owl_carousel: {
            src: 'bower_components/owl-carousel/owl-carousel/owl.carousel.js',
            dest: 'js/vendor/owl-carousel/owl.carousel.min.js'
        },

        // jQuery imported as part of bower.
        js_jquery: {
            src: 'bower_components/jquery/dist/jquery.js',
            dest: 'js/vendor/jquery/jquery.min.js'
        },

        // Sizzle imported as part of bower.
        js_sizzle: {
            src: 'bower_components/sizzle/dist/sizzle.js'
        },

        // SCSS assets for the project.
        scss: {
            files_std: ['scss/**/*.scss'],
            exclude: ['!_*.scss', '!scss/vendor/**/*.scss', '!scss/base/_normalize.scss'],
            files: '<%= paths.scss.files_std %>'
        },

        // Live reload assets for the project.
        livereload: {
           files_std: ['*.html', '*.php', 'img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
           files: '<%= paths.livereload.files_std %>'
        }

    },

    // ==========================================================================
    // sync task - Used to synchronize directories with only files that changed
    // ==========================================================================
    sync: {
        main: {
            files: [{
                cwd: 'bower_components/font-awesome/fonts',
                src: [
                    '**', /* Include everything */
                ],
                dest: 'fonts',
            }],
            pretend: false, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
            verbose: true // Display log messages when copying files
        }
    },

    // ==========================================================================
    // scsslint task - Used to detect/clean syntax errors in scss files.
    // ==========================================================================
    scsslint: {
        all: {
            src: ['<%= paths.scss.files %>', '<%= paths.scss.exclude %>'],
            options: {
                bundleExec: false,
                config: '.scss-lint.yml',
                reporterOutput: null,
                colorizeOutput: true
            },
        },
    },

    // ==========================================================================
    // jshint task - Used to detect/clean syntax errors in javascript files.
    // ==========================================================================
    jshint: {
        all: {
            src: ['<%= paths.js_theme.files %>', '<%= paths.js_theme.special'],
            options: {
                  "boss": true,
                  "curly": true,
                  "eqeqeq": true,
                  "eqnull": true,
                  "immed": true,
                  "latedef": true,
                  "newcap": true,
                  "noarg": true,
                  "sub": true,
                  "undef": true,
                  "unused": true,
                  "node": true,
                  "-W117": true
                },
        },
    },

   // ==========================================================================
   // uglify task - Concatenates and minifies javascript files.
   // ==========================================================================
   uglify: {

       // Compiles just the foundation javascript components individually
       foundation_components: {
           files: [{
               expand: true,
               cwd: '<%= paths.js_foundation_components.base %>',
               src: '<%= paths.js_foundation_components.files %>',
               dest: '<%= paths.js_foundation_components.dest %>',
               extDot: 'last',
               ext: '.min.js',
           }],
       },

       // Compiles the foundation javascript vendor components
       foundation_vendor: {
           files: [{
               expand: true,
               cwd: '<%= paths.js_foundation_vendor.base %>/',
               src: '<%= paths.js_foundation_vendor.files %>',
               dest: '<%= paths.js_foundation_vendor.dest %>/',
               extDot: 'last',
               ext: '.min.js',
           }],
       },

       // Compiles the modernizr component
       js_modernizr: {
           files: [{
              '<%= paths.js_modernizr.dest %>': ['<%= paths.js_modernizr.src %>']
           }],
       },

       // Compiles the Owl Carousel component
       js_owl_carousel: {
           files: [{
              '<%= paths.js_owl_carousel.dest %>': ['<%= paths.js_owl_carousel.src %>']
           }],
       },

       // Compiles jquery component
       js_jquery: {
           files: [{
              '<%= paths.js_jquery.dest %>': ['<%= paths.js_jquery.src %>', '<%= paths.js_sizzle.src %>']
           }],
       },

       // Compiles the theme components
       js_theme: {
           options: {
            banner: '<%= banner %>'
           },
           files: [{
               expand: true,
               cwd: '',
               src: '<%= paths.js_theme.files %>',
               dest: '',
               extDot: 'first',
               ext: '.min.js'
           }],
       }
   },

   // ==========================================================================
   // sass task - Compiles scss files and outputs them to a directory.
   // ==========================================================================
   sass: {
       options: {
        includePaths: ['bower_components/foundation/scss',
                       'bower_components/font-awesome/scss'
                      ]
       },
       // Production target/options that compiles and minifies.
       prod: {
           options: {
               outputStyle: 'compressed',
           },
           files: {
           'css/app.min.css': 'scss/app.scss'
           }
       },

       // Development target/options so it compiles, but does not minify.
       dev: {
           options: {
               outputStyle: 'compressed',
               update: true,
               quiet: false
           },
           files: {
               'css/app.min.css': 'scss/app.scss'
           }
       }
   },

   // ==========================================================================
   // watch task - Watch files/folders for changes.
   // ==========================================================================
   watch: {

       // Watch, lint, and compile scss assets
       scss: {
           files: '<%= paths.scss.files %>',
           tasks: ['newer:scsslint', 'sass:dev'],
           options: {
             livereload: true,
           }
       },

       // Watch, lint, and uglify javascript theme assets
       js_theme: {
           files: ['<%= paths.js_theme.files %>', '<%= paths.js_theme.special %>'],
           tasks: ['newer:jshint', 'newer:uglify'],
       },

       // Watch, lint, and uglify javascript vendor assets
       js_theme_vendor: {
           files: '<%= paths.js_theme_vendor.files %>',
           tasks: ['newer:uglify']
       },

       // Watch for changes to certain files and fire live reload
       livereload: {
           options: {
               livereload: true,
           },
           files: '<%= paths.livereload.files %>'
       }
   }
  });

  // ==========================================================================
  // Load task configurations
  // ==========================================================================
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.loadNpmTasks('grunt-scss-lint');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-sync');

  // Default task(s)
  grunt.registerTask('build', ['sass:prod']);

  // Create production task
  grunt.registerTask('default', ['sync', 'scsslint', 'sass:dev', 'uglify', 'jshint', 'watch']);
}
