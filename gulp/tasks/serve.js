module.exports = function() {
    $.gulp.task('serve', function() {
        $.browserSync.init({
            server: $.path.build.root
        });
    });
};
