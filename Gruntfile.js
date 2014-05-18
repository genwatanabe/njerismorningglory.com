module.exports = function(grunt) {

  /** 
   * Load required Grunt tasks. These are installed based on the versions listed
   * in `package.json` when you do `npm install` in this directory.
   */
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-image-resize');


  /**
   * Load in our user/task configuration files.
   */
  var buildConfig = require( './grunt.build.config.js' );

  /**
   * This is the configuration object Grunt uses to give each plugin its 
   * instructions.
   */
  var taskConfig = {
    /**
     * We read in our `package.json` file so we can access the package name and
     * version. It's already there, so we don't repeat ourselves here.
     */
    pkg: grunt.file.readJSON("package.json"),

    /**
     * Increments the version number, etc.
     */
    bump: {
      options: {
        files: [
          "package.json"
        ],
        commit: false,
        commitMessage: 'chore(release): v%VERSION%',
        commitFiles: [
          "package.json"
        ],
        createTag: false,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false,
        pushTo: 'origin'
      }
    },    

    /**
     * The directories to delete when `grunt clean` is executed.
     */
    clean: [ 
      '<%= build_dir %>/script-combined-**.js',
      '<%= build_dir %>/style-combined-**.css',
      '<%= build_dir %>/index.php'
    ],

    /**
     * `grunt concat` concatenates multiple source files into a single file.
     */
    concat: {
      /**
       * The `compile_js` target is the concatenation of our application source
       * code and all specified vendor source code into a single file.
       */
      compile_js: {
        src: ['<%= app_files.js %>'],
        dest: '<%= build_dir %>/script-combined-<%= pkg.version %>.js'
      }
    },

    sass: {
      compile: {
        files: [{
          src: ['<%= app_files.sass %>'],
          dest:'<%= build_dir %>/style-combined-<%= pkg.version %>.css'
        }]
      }
    },

    /**
     * The `index` task compiles the `index.html` file as a Grunt template. CSS
     * and JS files co-exist here but they get split apart later.
     */

    index: {

      /**
       * During development, we don't want to have wait for compilation,
       * concatenation, minification, etc. So to avoid these steps, we simply
       * add all script files directly to the `<head>` of `index.html`. The
       * `src` property contains the list of included files.
       */
      build: {
        dir: '<%= build_dir %>',
        src: [
          '<%= concat.compile_js.dest %>',
          '<%= sass.compile.files[0].dest %>'
        ]
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= img_src_dir %>',
          src: '**/*.{gif,GIF,jpg,JPG,jpeg,JPEG,png,PNG}',
          dest: '<%= img_dst_dir %>'
        }]
      }
    },

    image_resize: {
      resize: {
        options: {
          width: 750,
          overwrite: true
        },
        files: {
          '<%= img_dst_dir %>/bg': '<%= img_src_dir %>/bg'
        }
      }
    },

    'ftp-deploy': {
      app: {
        auth: {
          host: '<%= ftp_host %>',
          port: '<%= ftp_port %>',
          authKey: 'key1'
        },
        src: '<%= build_dir %>',
        dest: '<%= ftp_dir %>',
        exclusions: [
          '<%= build_dir %>/**/.DS_Store',
          '<%= build_dir %>/**/Thumbs.db',
          '<%= build_dir %>/**/index-src.php',
          '<%= build_dir %>/**/script-src.js',
          '<%= build_dir %>/**/style-src.scss',
          '<%= build_dir %>/favicon.ico',
          '<%= build_dir %>/assets',
          '<%= build_dir %>/common',
          '<%= build_dir %>/template'
        ]
      },
      php: {
        auth: {
          host: '<%= ftp_host %>',
          port: '<%= ftp_port %>',
          authKey: 'key1'
        },
        src: '<%= build_dir %>',
        dest: '<%= ftp_dir %>',
        exclusions: [
          '<%= build_dir %>/**/.DS_Store',
          '<%= build_dir %>/**/Thumbs.db',
          '<%= build_dir %>/**/index-src.php',
          '<%= build_dir %>/**/script-src.js',
          '<%= build_dir %>/**/style-src.scss',
          '<%= build_dir %>/**/**.html',
          '<%= build_dir %>/**/**.json',
          '<%= build_dir %>/favicon.ico',
          '<%= build_dir %>/assets',
          '<%= build_dir %>/common',
          '<%= build_dir %>/template'
        ]
      },
      img: {
        auth: {
          host: '<%= ftp_host %>',
          port: '<%= ftp_port %>',
          authKey: 'key1'
        },
        src: '<%= build_dir %>/assets/img',
        dest: '<%= ftp_dir %>/assets/img',
        exclusions: [
          '<%= build_dir %>/**/.DS_Store',
          '<%= build_dir %>/**/Thumbs.db'
        ]
      },
      pdf: {
        auth: {
          host: '<%= ftp_host %>',
          port: '<%= ftp_port %>',
          authKey: 'key1'
        },
        src: '<%= build_dir %>/assets/pdf',
        dest: '<%= ftp_dir %>/assets/pdf',
        exclusions: [
          '<%= build_dir %>/**/.DS_Store',
          '<%= build_dir %>/**/Thumbs.db'
        ]
      },
      others: {
        auth: {
          host: '<%= ftp_host %>',
          port: '<%= ftp_port %>',
          authKey: 'key1'
        },
        src: '<%= build_dir %>',
        dest: '<%= ftp_dir %>',
        exclusions: [
          '<%= build_dir %>/**/.DS_Store',
          '<%= build_dir %>/**/Thumbs.db',
          '<%= build_dir %>/app',
          '<%= build_dir %>/assets/img',
          '<%= build_dir %>/assets/pdf'
        ]
      }
    }

  };




  // Initialize everything.
  grunt.initConfig( grunt.util._.extend( taskConfig, buildConfig ) );




  /**
   * A utility function to get all app JavaScript sources.
   */
  function filterForJS ( files ) {
    return files.filter( function ( file ) {
      return file.match( /\.js$/ );
    });
  }

  /**
   * A utility function to get all app CSS sources.
   */
  function filterForCSS ( files ) {
    return files.filter( function ( file ) {
      return file.match( /\.css$/ );
    });
  }

  /** 
   * The index.php template includes the stylesheet and javascript sources
   * based on dynamic names calculated in this Gruntfile. This task assembles
   * the list into variables for the template to use and then runs the
   * compilation.
   */
  grunt.registerMultiTask( 'index', 'Process index.php template', function () {
    var dirRE = new RegExp( '^('+grunt.config('build_dir')+')\/', 'g' );
    var jsFiles = filterForJS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });
    var cssFiles = filterForCSS( this.filesSrc ).map( function ( file ) {
      return file.replace( dirRE, '' );
    });

    grunt.file.copy('site/app/index-src.php', this.data.dir + '/index.php', { 
      process: function ( contents, path ) {
        return grunt.template.process( contents, {
          data: {
            scripts: jsFiles,
            styles: cssFiles,
            version: grunt.config( 'pkg.version' )
          }
        });
      }
    });
  });

  // Default task(s).
  grunt.registerTask('default', ['clean','concat','sass','index','bump']);
  grunt.registerTask('minify-img', ['imagemin']);
  grunt.registerTask('deploy-app', ['ftp-deploy:app']);
  grunt.registerTask('deploy-php', ['ftp-deploy:php']);
  grunt.registerTask('deploy-img', ['ftp-deploy:img']);
  grunt.registerTask('deploy-pdf', ['ftp-deploy:pdf']);
  grunt.registerTask('deploy-others', ['ftp-deploy:others']);

};