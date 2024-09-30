var gulp = require('gulp');
var cssnano = require('gulp-cssnano');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('sass', function(){
    return gulp.src('styles.scss')
        .pipe(sass())
        .pipe(cssnano())
        .pipe(gulp.dest('dist'));
});

gulp.task('js', function(){
    return gulp.src('dist/myscripts.js')
		.pipe(babel({ presets: ['@babel/env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('*.scss', gulp.series('sass'));
    gulp.watch('scripts/**/*.js', gulp.series('js'));    
});

gulp.task('default', gulp.series('sass', 'js', 'watch'));

