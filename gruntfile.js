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
      },
      jekyll: {
        files: ["docs/**/*.*", "scss/**/**/*.scss"],
        tasks: ["docs-build"]
      }
    },
    pure_grids: {
      responsive: {
        dest: 'scss/modules/_grid-units.scss',
        options: {
          units: [5,12,24],
          mediaQueries: {
              sm: 'screen and (min-width: 32em)', //512px
              md: 'screen and (min-width: 48em)', //768px
              lg: 'screen and (min-width: 64em)', //1024px
              xl: 'screen and (min-width: 75em)'  //1200px
          },
          selectorPrefix: '.unit-'
        }
      }
    },
    sass: {
      options: {
        outputStyle: "expanded",
        sourceMap: true,
        indentedSyntax: true,
        sassDir: 'scss',
        cssDir: 'dist/ui'
      },
      dev: {
        files: [{
          expand: true,
          cwd: "scss/",
          src: ["*.scss"],
          dest: "dist/ui/",
          ext: ".css"
        }]
      },
      dist: {
        options: {
          sourceMap: false
        },
        files: [{
          expand: true,
          cwd: "scss/",
          src: ["*.scss"],
          dest: "dist/ui/",
          ext: ".css"
        }]
      },
      docs: {
        files: {
          "docs/css/main.css": "docs/_sass/main.scss"
        }
      },
      docsDist: {
        options: {
          sourceMap: false
        },
        files: {
          "docs/css/main.css": "docs/_sass/main.scss"
        }
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: ['last 2 version'] })
        ],
        map: {
          inline: false,
        }
      },
      dist: {
        options: {
          processors: [ require('cssnano')() ],
          map: false
        },
        src: 'dist/css/*.css'
      },
      dev: {
        src: 'dist/css/*.css'
      },
      docs: {
        src: 'docs/css/*.css'
      },
      docsDist: {
        options: {
          processors: [ require('cssnano')() ],
          map: false
        },
        src: 'docs/css/*.css'
      }
    },
    jekyll: {
      dev: {
        options: {
          src: "./docs",
          config: './docs/_config-dev.yml',
          dest: "./dist/docs"
        }
      },
      dist: {
        options: {
          src: "./docs",
          config: './docs/_config.yml',
          dest: "./dist/docs"
        }
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
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-jekyll");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-sass");
  grunt.loadNpmTasks("grunt-pure-grids");

  // Build WFP UI Docs
  grunt.registerTask("docs-build", ["sass:docs", "postcss:docs", "jekyll:dev"]);
  grunt.registerTask("docs-dist", ["sass:docsDist", "postcss:docsDist", "jekyll:dist"]);
  // Build WFP UI
  grunt.registerTask("build", ["jshint", "pure_grids", "sass:dev", "postcss:dev"]);
  // Build a dist-ready WFP UI
  grunt.registerTask("dist", ["sass:dist", "postcss:dist"]);
  grunt.registerTask("default", ["dist"]);
};
