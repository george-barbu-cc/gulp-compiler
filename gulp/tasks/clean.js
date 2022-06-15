module.exports = function () {
    $.gulp.task('clean', function () {
        return $.del($.path.build.root)
    })

    $.gulp.task('clean-css', function () {
        return $.del($.path.styles.tmp)
    })
};