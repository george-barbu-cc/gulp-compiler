const uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel');

module.exports = function () {
    $.gulp.task('scripts:dev', () => {
        return $.gulp.src($.include.js)
            .pipe(concat('app.min.js'))
            .pipe($.gulp.dest($.path.build.static))
            .on('end', $.browserSync.reload);
    });

    $.gulp.task('scripts:build', () => {
        return $.gulp.src($.include.js)
            .pipe(uglify())
            .pipe(concat('app.min.js'))
            .pipe($.gulp.dest($.path.build.static))
    });
};
