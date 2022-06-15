const file = require('gulp-file');

module.exports = function () {
    $.gulp.task('import:fonts', function() {
        return  $.del($.path.fonts).then(function () {
                $.gulp.src($.include.fonts)
                .pipe($.gulp.dest($.path.fonts));
        })
    }); 
    $.gulp.task('import:scss', function(){
        let scssstring = '';
        for (scss of $.include.scss) { scssstring += '@import "' +scss+ '"; \n'; }
        return  $.gulp.src($.path.styles.scss.settings)
                .pipe(file('_includes.scss', scssstring))
                .pipe($.gulp.dest($.path.styles.scss.settings));
    });


     $.gulp.task('import', $.gulp.series(
        'import:scss',
        'import:fonts',
    ));
};
