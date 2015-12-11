var gulp = require('gulp');
var babel = require('gulp-babel');
var src_dir = './es6/**/*.js'
gulp.task('default', function () {
    return gulp.src(src_dir)
        .pipe(babel())
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function(){
    gulp.watch(src_dir, ['default']);
});


//var gulp = require('gulp');
//var babel = require('gulp-babel');
//
//gulp.task('default', function () {
//    return gulp.src(['es6/*.js', 'es6/**/*.js'])
//        .pipe(babel())
//        .pipe(gulp.dest(''));
//});
