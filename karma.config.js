// Karma configuration
module.exports = function(config) {
  config.set({

    basePath: './',

    frameworks: ['jasmine'],
    
    files: [
      'src/lib/angular/angular.js',
      'src/lib/angular-*/angular-*.js',
      'src/lib/angular-mocks/angular-mocks.js',
      'src/js/**/*.js',
      'test/lib/**/*.js',
      'test/*.js'
    ],

    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      
    },
    
    reporters: ['progress'],

    // 设置输出测试内容文件的信息
    // junitReporter : {
    //   outputFile: 'test_out/unit.xml',
    //   suite: 'unit'
    // },

    port: 9876,

    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    autoWatch: true,

    browsers: ['PhantomJS'],


    plugins : [
      // 'karma-chrome-launcher',
      // 'karma-jasmine',
      // 'karma-junit-reporter'
    ],

    singleRun: false,

    concurrency: Infinity
  })
};
