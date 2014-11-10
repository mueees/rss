module.exports = {
    build_dir: 'build',
    compile_dir: 'bin',

    app_files: {
        atpl: ['src/app/**/*.tpl.html'],
        ctpl: ['src/common/**/*.tpl.html'],

        // all js files without test
        js: [ 'src/**/*.js', '!src/**/*.spec.js', '!src/assets/**/*.js' ],

        jsunit: [ 'src/**/*.spec.js' ],
        html: [ 'src/index.html' ],
        less: 'src/less/style.less'
    },

    vendor_files: {
        js: [
            'vendor/angular/angular.js',
            'vendor/underscore/underscore-min.js',
            'vendor/ngstorage/ngStorage.min.js',
            'vendor/restangular/dist/restangular.min.js',
            'vendor/angular-mocks/angular-mocks.js',
            'vendor/angular-touch/angular-touch.min.js',
            'vendor/angular-ui-router/release/angular-ui-router.min.js',
            'vendor/angular-animate/angular-animate.min.js'
        ],
        css: [
            /*'vendor/bootstrap/dist/css/bootstrap.min.css'*/
        ],
        assets: []
    }
};