module.exports = (grunt) ->
    grunt.loadNpmTasks pkg for pkg in [
            "grunt-contrib-watch"
            "grunt-jasmine-nodejs"
            "grunt-contrib-concat"
            "grunt-contrib-clean"
        ]
        
    grunt.registerTask "build", ["clean", "concat", "jasmine_nodejs"]
        
    grunt.initConfig
        jasmine_nodejs:
            options:
                specNameSuffix: ".js"
                reporters:
                    console:
                        verbosity: 0
            runAssertions: 
                specs: ["runAssertions.js"]
        clean:
            files: "deploy"
        concat:
            build:
                files:
                    "deploy/pairs.influx": "src/pairs/*.influx"
                    "deploy/maths.influx": "src/maths/*.influx"
                    "deploy/vectors-2d.influx": "src/vectors-2d/*.influx"
                    "deploy/lists.influx": "src/lists/*.influx"
        watch:
            options:
                atBegin: true
            files: ["src/**/*"]
            tasks: "build"