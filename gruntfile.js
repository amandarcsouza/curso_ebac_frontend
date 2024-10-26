module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                'main.css': 'main.less'
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    'main.min.css': 'main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'main.min.js': 'main.js'
                }
            }
        }
    })
    grunt.registerTask('default', ['less', 'uglify']);

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
}