module.exports = function () {
    $.gulp.task('html:dev', () => {
        return $.gulp.src($.path.dev+'*.html')
            .pipe($.gulp.dest($.path.build.root + '/'))
            .on('end', $.browserSync.reload);
    });
    $.gulp.task('html', () => {
        return $.gulp.src($.path.dev+'*.html')
            .pipe($.gulp.dest($.path.build.root + '/'));
    });
};