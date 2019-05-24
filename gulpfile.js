var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(cb) {
    gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
    cb();
});

gulp.task('default', gulp.series('sass', function(cb) {
    gulp.watch('scss/*.scss', gulp.series('sass'));
    cb();
}));