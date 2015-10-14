// Gruntfile.js
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: "scss/**/*.scss",
        tasks: ["build"]
      },
      jshint: {
        files: "js/*.js",
        tasks: ["jshint"]
      }
    },
    sass: {
      options: {
        outputStyle: "expanded",
        sourceMap: true,
        indentedSyntax: true
      },
      dev: {
        files: {
          "dist/wfpui.css" : "scss/wfpui.scss",
          "dist/bootstrap-theme.css" : "scss/bootstrap-theme.scss"
        }
      },
      dist: {
        options: {
          sourceMap: false
        },
        files: {
          "dist/wfpui.css" : "scss/wfpui.scss",
          "dist/bootstrap-theme.css" : "scss/bootstrap-theme.scss"
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: ['last 2 version'] }),
          require('cssnano')()
        ],
        map: {
          inline: false,
        }
      },
      dist: {
        options: {
          map: false
        },
        src: 'dist/*.css'
      },
      dev: {
        src: 'dist/*.css'
      }
    },
    datauri: {
      default: {
        options: {
          classPrefix: 'icon-ui-'
        },
        src: [
          "icons/ui/svg/*.svg"
        ],
        dest: [
          "scss/components/_icons.scss"
        ]
      }
    },
    jshint: {
      options: {
        globals: {
          jQuery: true
        },
        immed: true,
        indent: 2,
        latedef: true,
        newcap: true,
        multistr: true
      },
      all: ['js/*.js', 'test/*.js']
    }
  });

  grunt.loadNpmTasks('grunt-datauri');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask("build", ["jshint", "datauri", "sass:dev", "postcss:dev"]);
  grunt.registerTask("dist", ["datauri", "sass:dist", "postcss:dist"]);
  grunt.registerTask("default", ["dist"]);
};
