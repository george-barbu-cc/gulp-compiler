"use strict";

global.$ = {
    tasks: require('./gulp/path/tasks.js'),
    path: require('./gulp/path/paths.js'),
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    del: require('del'),
    include: {
        js: require('./gulp/includes/js.js'),
        fonts: require('./gulp/includes/fonts.js'),
        css: require('./gulp/includes/css.js'),
        scss: require('./gulp/includes/scss.js'),
    },
};

$.tasks.forEach(function (taskPath) {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series(
    'clean',
    'import',
    'html:dev',
    'scripts:dev',
    'styles:dev',
));

$.gulp.task('build', $.gulp.series(
    'clean',
    'import',
    'html',
    'scripts:build',
    'styles:build',
));


$.gulp.task('build:min', $.gulp.series(
    'clean',
    'import',
    'html',
    'scripts:build',
    'styles:build',
));

$.gulp.task('start', $.gulp.series(
    'dev',
    $.gulp.parallel(
        'watch',
        'serve',
        'localtunnel',
    )
));
