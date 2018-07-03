module.exports = function(grunt) {

	// All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		responsive_images: {
			dev: {
				options: {
					engine: 'im',
					sizes: [{
						name: 'small',
						width: 400
					},{
						name: 'big',
						width: 900
					}]
				},

				files: [{
					expand: true,
					src: ['dog.jpg'],
					cwd: 'images/',
					dest: 'images/'
				}]
			},
		},

		/* Clear out the images directory if it exists */
		clean: {
			dev: {
				src: ['images/dog-small.jpg', 'images/dog-big.jpg'],
			},
		},

		concat: {
			dist: {
				src: ['main.css', 'responsive.css', 'final.css'],
				dest: 'style.css',
			},
		},

		watch: {
			scripts: {
				files: ['main.css', 'responsive.css', 'final.css'],
				tasks: ['concat'],
				options: {
						spawn: false,
				},
			} 
		},
		
	});

    // Where we tell Grunt we plan to use this plug-in.
		grunt.loadNpmTasks('grunt-responsive-images');
		grunt.loadNpmTasks('grunt-contrib-clean');
		grunt.loadNpmTasks('grunt-contrib-concat');
		grunt.loadNpmTasks('grunt-contrib-watch');

    // Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['clean','responsive_images', 'concat']);

};