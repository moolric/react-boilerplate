var webpackConfig = require("./webpack.config.js");

module.exports = function (config) {
  config.set({
        browsers : ['PhantomJS'],
        hostname : process.env.IP,
        port : 8081,
        runnerPort : 0,
        singleRun: true,
        frameworks: ['mocha'], 
        files: [
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/foundation-sites/dist/js/foundation.min.js',
          'app/tests/**/*.test.jsx'
        ],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
        },
        reporters: ['mocha'],
        client: {
            mocha: {
                timeout: '5000'
            }
        },
        webpack: webpackConfig,
        webpackServer: {
            noInfo: true
        },
        singleRun: false,
        //concurrency: 1,
    //
    
        browserNoActivityTimeout: 60000,
        //captureTimeout: 60000
  });
};