/* global module:false */
module.exports = function (grunt) {
	'use strict';

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		clean: {
			dist: 'dist/**'
		},

		copy: {
			main: {
				src: 'dev/',
				dest: 'dist/',
				filter: 'isFile'
			}
		},

		sass: {
			options: {
				sourceMap: false
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'dev/scss',
					src: ['**/*.scss'],
					dest: 'dist/css',
					ext: '.css'
				}]
			}
		},

		scsslint: {
			allFiles: [
				'dev/scss/core/**/*.scss'
				//'dev/theme/**/*.scss'
			],
			options: {
				config: '.scss-lint.yml',
				colorizeOutput: true
			}
		}
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-scss-lint');


	// Build tasks
	grunt.registerTask('build-dist', ['scsslint', 'sass', 'copy']);
	grunt.registerTask('dist-clean', ['clean']);

};
