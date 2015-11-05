// Generated on 2015-11-05 using generator-nodule 1.0.0
var LoadGruntTasks = require('load-grunt-tasks')

module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    complexity: {
      generic: {
        src: ['app/**/*.js'],
        options: {
          errorsOnly: false,
          cyclometric: 6, // default is 3
          halstead: 16, // default is 8
          maintainability: 100 // default is 100
        }
      }
    },
    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'Release %VERSION%',
        commitFiles: ['-a'],
        createTag: true,
        tagName: '%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: true,
        pushTo: 'origin master',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
        globalReplace: false,
        prereleaseName: false,
        regExp: false
      }
    },

    mochacli: {
      all: ['test/**/*.js'],
      options: {
        reporter: 'spec',
        ui: 'tdd'
      }
    },

    watch: {
      js: {
        files: ['**/*.js', '!node_modules/**/*.js'],
        tasks: ['default'],
        options: {
          nospawn: true
        }
      }
    }
  })

  LoadGruntTasks(grunt)
  grunt.registerTask('test', ['complexity', 'mochacli', 'watch'])
  grunt.registerTask('ci', ['complexity', 'mochacli'])
  grunt.registerTask('default', ['test'])
}
