const htmlmin = require("html-minifier");
const fs = require("fs");

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
        open: "local",
        callbacks: {
            ready: function(err, bs) {
      
              bs.addMiddleware("*", (req, res) => {
                const content_404 = fs.readFileSync('dist/404.html');
                // Provides the 404 content without redirect.
                res.write(content_404);
                // Add 404 http status code in request header.
                // res.writeHead(404, { "Content-Type": "text/html" });
                res.writeHead(404);
                res.end();
              });
            }
          }
    });

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
            data: "_data",
            includes: "_includes",
            output: "dist"
        }
    };

};