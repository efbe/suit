module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Cleans up the generated part of the dist folder
		// @info https://github.com/gruntjs/grunt-contrib-clean

		clean: {
			dist: 'dist/css/generated/**',
			min: 'dist/min/*.css'
		},


		// Generates and copies the CSS files from SCSS files
		// @info https://github.com/gruntjs/grunt-contrib-sass

		sass: {
			options: {
				sourcemap: 'none'
			},
			dist: {
				files: [{
					expand: true,
					cwd: 'dev/scss/core',
					src: ['**/*.scss'],
					dest: 'dist/css/generated',
					ext: '.css'
				}]
			}
		},


		// Lint SCSS files
		// @info https://github.com/brigade/scss-lint

		scsslint: {
			allFiles: [
				'dev/scss/core/**/*.scss'
			],
			options: {
				config: '.scss-lint.yml',
				colorizeOutput: true
			}
		},


		// Minify CSS files according to [config]/*.css
		// @info https://github.com/gruntjs/grunt-contrib-cssmin

		cssmin: {
			target: {
				options: {
					restructuring: false, // keep them in order
					shorthandCompacting: false, // do not be smarter than me
					roundingPrecision: -1,
					processImport: true // *.* magic *.*
				},
				// Minified packages come here!
				files: {
					'dist/min/essential.min.css': [
						'dist/css/config/essential.css'
					]
				}
			}
		}
	});


	// Dependencies

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-scss-lint');
	grunt.loadNpmTasks('grunt-contrib-cssmin');


	// Tasks

	grunt.registerTask('build-dist', ['scsslint', 'sass']);
	grunt.registerTask('clean-dist', ['clean']);
	grunt.registerTask('min-dist', ['cssmin']);
	grunt.registerTask('build-min', ['scsslint', 'sass', 'cssmin']);
};
