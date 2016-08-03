var gulp        = require('gulp');
var sass        = require('gulp-sass');
var cssminify   = require('gulp-minify-css');
var watch       = require('gulp-watch');

gulp.task('sass', function(){
    return gulp.src('src/index/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('sassguo', function(done){
    return gulp.src('src/pcguo/scss/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('dist/css'));
})

gulp.task('watch', ['sass'] , function(){
    gulp.watch( ['src/index/scss/*.scss'] ,function(){
        gulp.run('sassguo');
    });
})
gulp.task('watchguo', ['sassguo'], function(){
    gulp.watch(['src/pcguo/scss/*.scss'] ,['sassguo']);
})
