const   scss = require('gulp-sass'),
        autoprefixer = require('gulp-autoprefixer'),
        csso = require('gulp-csso'),
        csscomb = require('gulp-csscomb'),
        cssimport = require('gulp-cssimport'),
        concat = require('gulp-concat'),
        cleanCSS = require('gulp-clean-css'),
        rename = require('gulp-rename')
        stylesPATH = {
            "input": "./dev/static/scss/",
            "output": "./build/static/",
            "tmp": "./dev/static/css/tmp/",
        };

module.exports = function () {
    $.gulp.task('styles:build-min-scss', () => {
        return $.gulp.src($.path.styles.scss.input + 'styles.scss')
                .pipe(scss())
                .pipe(cssimport())
                .pipe(rename('app.scss.css'))
                .pipe($.gulp.dest($.path.styles.tmp))
    });
    $.gulp.task('styles:build-min-css', () => {
        return $.gulp.src($.include.css)
                .pipe(cssimport())
                .pipe(cleanCSS())
                .pipe(concat('app.min.css'))
                .pipe($.gulp.dest($.path.styles.tmp))
    });
    $.gulp.task('styles:build-css', () => {
        return $.gulp.src($.path.styles.tmp + '*.css')
                .pipe(autoprefixer())
                .pipe(csscomb())
                .pipe(csso())
                .pipe(cleanCSS({level: {1: {specialComments: false}}}))
                .pipe(concat('app.min.css'))
                .pipe($.gulp.dest($.path.build.static))
    });
    $.gulp.task('styles:build', $.gulp.series(
        'styles:build-min-scss',
        'styles:build-min-css',
        'styles:build-css',
        'clean-css',
    ));


    $.gulp.task('styles:build-dev-scss', () => {
        return $.gulp.src($.path.styles.scss.input + 'styles.scss')
                .pipe(scss())
                .pipe(cssimport())
                .pipe(rename('app.scss.css'))
                .pipe($.gulp.dest($.path.styles.tmp))
    });

    $.gulp.task('styles:build-css-dev', () => {
        return $.gulp.src($.path.styles.tmp + '*.css')
                .pipe(autoprefixer({
                 overrideBrowserslist:  ['last 3 versions']
				}))
				.pipe(csscomb())
                .pipe(concat('app.min.css'))
                .pipe($.gulp.dest($.path.build.static))
				.on('end', $.browserSync.reload);
    });
    $.gulp.task('styles:dev', $.gulp.series(
        'styles:build-dev-scss',
        'styles:build-min-css',
        'styles:build-css-dev',
        'clean-css',
    ));
};
