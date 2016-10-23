// Karma configuration
// Generated on Fri Sep 23 2016 11:22:54 GMT+0530 (India Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    babelPreprocessor: {
        options: {
            presets: ['es2015'],
            sourceMap: 'inline'
        }
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'jasmine'],

    jspm: {
        config: 'client/config.js',
        packages: 'client/jspm_packages/',
        meta: {
            'client/jspm_packages/github/angular/bower-angular@1.5.8.js': {
                format: 'global',
                exports: 'angular'
            },
            'client/jspm_packages/github/angular/bower-angular-mocks@1.5.8.js': {
                format: 'global',
                deps:   'angular'
            }
        },
        loadFiles: [
            'client/modules/application/**/*.test.js'
        ],
        serveFiles: [
            'client/modules/application/**/*.js',
            'client/modules/application/**/*.html',
            'client/modules/application/**/*.css'
        ]
    },

    // list of files / patterns to load in the browser
    files: [
        'node_modules/babel-polyfill/dist/polyfill.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['coverage', 'spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // Settings for the karma-coverage reporter
    coverageReporter: {
        type: 'html',
        dir: 'coverage/'
    },

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    plugins: [
        'karma-babel-preprocessor',
        'karma-coverage',
        'karma-jasmine',
        'karma-jspm',
        'karma-phantomjs-launcher',
        'karma-spec-reporter'
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        'client/{*.js,!jspm_packages{,/**}}': ['babel'],
        'client/modules/**/!(*.test).js': ['babel', 'coverage']
    },

    // set up proxies so the test server will be able to find our files
    proxies: {
        '/client/': '/base/client/',
        '/jspm_packages/': '/base/client/jspm_packages/'
    },

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,
    specReporter: {
        maxLogLines: 1,
        suppressErrorSummary: true,
        suppressFailed: false,
        suppressPassed: false,
        suppressSkipped: false
    }
  })
}
