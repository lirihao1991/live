var gulp        = require('gulp');
var sass        = require('gulp-sass');
var imageminify = require('gulp-imagemin');
var cssminify   = require('gulp-minify-css');

gulp.task('sass', function(){
    return gulp.src('src/index/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
})

gulp.task('sassguo', function(){
    return gulp.src('src/pcguo/scss/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('dist/css'))
})

gulp.task('watch', ['sass'] , function(){
    gulp.watch( ['src/index/scss/*.scss'] ,['sass']);
})
gulp.task('watchguo', ['sassguo'], function(){
    gulp.watch( ['src/pcguo/scss/*.scss'] ,['sassguo']);
})

gulp.task('minifyImg',function(){
    return gulp.src('src/img/*')
        .pipe(imageminify())
        .pipe(gulp.dest('dist/imgs'))
})
