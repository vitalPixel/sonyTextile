module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/js");

    eleventyConfig.setBrowserConfig({
        https: {
            key: '../localhost.key',
            cert: '../localhost.cert'
        },
        browser: "firefox",
        open: "local"        
    });

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };

};