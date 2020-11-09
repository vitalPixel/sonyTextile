const htmlmin = require("html-minifier");
// const sass = require("sass");

module.exports = function(eleventyConfig) {

    eleventyConfig.setTemplateFormats([
        "njk",
        "css",
        "jpg",
        "png"
    ]);

    eleventyConfig.addWatchTarget("./src/scss");

    eleventyConfig.setBrowserSyncConfig({
        https: {
            key: '../localhost.key',
            cert: '../localhost.cert'
        },
        browser: "firefox",
        open: "local"        
    });

    // eleventyConfig.addTransform("sass", function(content, outputhPath) {
    //     if( outputhPath.endsWith(".scss") ) {
    //         let rendered = sass.render({
    //             data: content,
    //             includePaths: ["/scss"],
    //             sourceMap: true,
    //             sourceMapEmbed: true,

    //         });
    //         return rendered;
    //     }

    //     return content;
    // });

    eleventyConfig.addTransform("htmlmin", function(content, outputhPath) {
        if( outputhPath.endsWith(".html") ) {
            let minified = htmlmin.minify(content, {
                useShortDoctype: true,
                removeComments: true,
                collapseWhitespace: true
            });
            return minified;
        }

        return content;
    });

    return {
        dir: {
            input: "src",
            data: "_includes",
            output: "dist"
        }
    };

};