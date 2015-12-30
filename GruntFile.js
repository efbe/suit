module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Cleans up the generated part of the dist folder
		clean: {
			dist: 'dist/css/generated/**'
		},

		// Generates and copies the CSS files from SCSS files
		sass: {
			options: {
				sourcemap: 'none'
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'dev/scss',
					src: ['**/*.scss'],
					dest: 'dist/css/generated',
					ext: '.css'
				}]
			}
		},

		// Lint SCSS files
		scsslint: {
			allFiles: [
				'dev/scss/core/**/*.scss'
			],
			options: {
				config: '.scss-lint.yml',
				colorizeOutput: true
			}
		}
	});

	// Dependencies
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-scss-lint');


	// Tasks
	grunt.registerTask('build-dist', ['scsslint', 'sass']);
	grunt.registerTask('clean-dist', ['clean']);
};
