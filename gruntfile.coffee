module.exports = (grunt) ->
    grunt.loadNpmTasks pkg for pkg in [
            "grunt-contrib-watch"
            "grunt-jasmine-nodejs"
        ]
        
    grunt.initConfig
        jasmine_nodejs:
            options:
                specNameSuffix: ".js"
                reporters:
                    console:
                        verbosity: 0
            runAssertions: 
                specs: ["runAssertions.js"]
        watch:
            options:
                atBegin: true
            files: ["libraries/**/*"]
            tasks: ["jasmine_nodejs:runAssertions"]