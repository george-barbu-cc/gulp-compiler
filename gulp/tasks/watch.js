module.exports = function () {
    $.gulp.task('watch', function () {
        $.gulp.watch($.path.dev +'*.html', $.gulp.series('html:dev'));
        $.gulp.watch($.path.styles.scss.input +'**/*.scss', $.gulp.series('styles:dev'));
        $.gulp.watch($.path.scripts.input +'*.js', $.gulp.series('scripts:dev'));
        $.gulp.watch($.path.includes+'*.js', $.gulp.series('dev'));
    });
};
