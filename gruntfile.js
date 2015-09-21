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
          "dist/wfpui.css" : "scss/wfpui.scss"
        }
      },
      dist: {
        options: {
          sourceMap: false
        },
        files: {
          "dist/wfpui.css" : "scss/wfpui.scss"
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

  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks("grunt-sass");

  grunt.registerTask("build", ["sass:dev", "postcss:dev"]);
  grunt.registerTask("dist", ["jshint", "sass:dist", "postcss:dist"]);
  grunt.registerTask("default", ["dist"]);
};
