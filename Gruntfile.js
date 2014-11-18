// Gruntfile.js
module.exports = function(grunt) {
	grunt.initConfig({
		exec: {
			latex: {
				cmd: function() {
					// CHANGE STRING TO MATCH LATEX BUILD COMMAND
					return 'xelatex kurt-dacosta-resume.xtx'
				}
			},
			removeLogs: {
				cmd: function () {
					return 'rm -rf *.log *.aux *.out'
				}
			}
		},
		open: {
			pdf: {
				// CHANGE PATH TO MATCH YOUR PDF
				path: 'kurt-dacosta-resume.pdf'
			}
		},
		watch: {
			// ARRAY OF FILES TO WATCH FOR CHANGES
			files: [
				'resume-style.cls',
				'kurt-dacosta-resume.xtx',
				'Gruntfile.js'
			],
			tasks: ['build']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks("grunt-exec");
	grunt.loadNpmTasks('grunt-open');

	grunt.registerTask('build', ['exec:latex', 'open:pdf', 'exec:removeLogs']);
	grunt.registerTask('default', ['build','watch']);
};

/*
To Use:
1) Install grunt-cli globally via "sudo npm install -g grunt-cli"
2) Install grunt & tasks in root of project directory via 
"npm install grunt grunt-contrib-watch grunt-exec grunt-open"
3) Change names and paths to match your file (project directory root)
4) run "grunt" or "grunt build" from project dictory root
*/