module.exports = function(grunt) {
    grunt.initConfig({
        // Configuração do LESS
        less: {
            development: {
                files: {
                    "dist/style.css": "src/style.less"
                }
            }
        },
        // Compressão do JavaScript
        uglify: {
            build: {
                files: {
                    "dist/app.min.js": ["src/app.js"]
                }
            }
        }
    });

    // Carregando plugins
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-uglify");

    // Tarefas padrão
    grunt.registerTask("default", ["less", "uglify"]);
};
