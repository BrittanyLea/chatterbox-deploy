module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      //your code here
    },

    mochaTest: {
      test: {
        options: {
          reporter: 'spec' //nyan, xunit, html-cov, dot, min, markdown
        },
        src: ['server/spec/*.js']
      }
    },

    nodemon: {
      dev: {
        script: 'server/basic-server.js'
      }
    },

    uglify: {
      //your code here
      //send uglified files to a folder named 'dist'.
    },

    jshint: {
      files: [
        //your code here
      ],
      options: {
        force: 'true',
        jshintrc: '.jshintrc',
        ignores: [
          'dist/client/*.js'
        ]
      }
    },

    cssmin: {
      //your code here
    },

    watch: {
      scripts: {
        files: [
          'client/**/*.js'
        ],
        tasks: [
          'concat',
          'uglify'
        ]
      },
      css: {
        files: 'client/styles/*.css',
        tasks: ['cssmin']
      }
      // server: {
        //your code here
      // }
    },

  });

  //find and load a couple more grunt tasks/modules here.
  //be sure to add them as dependencies, too.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-nodemon');

  //after completing basic requirements, you should be able to successfully run all of these grunt tasks.
  grunt.registerTask('server-dev', function (target) {
    // Running nodejs in a different process and displaying output on the main console
    var nodemon = grunt.util.spawn({
         cmd: 'grunt',
         grunt: true,
         args: 'nodemon'
    });
    nodemon.stdout.pipe(process.stdout);
    nodemon.stderr.pipe(process.stderr);

    grunt.task.run([ 'watch' ]);
  });

  ////////////////////////////////////////////////////
  // Main grunt tasks
  ////////////////////////////////////////////////////

  grunt.registerTask('test', [
    //your code here
  ]);

  grunt.registerTask('build', [
    //your code here
  ]);

  grunt.registerTask('deploy', [
    //your code here
  ]);


};
