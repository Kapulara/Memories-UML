var gulp = require('gulp'),
    watch = require('gulp-watch'),
    plantuml = require('gulp-plantuml');

gulp.task('default', function () {
    return gulp.src('./src/*.plantuml')
        .pipe(plantuml({
            jarPath: "./vendor/plantuml.jar"
        }))
        .pipe(gulp.dest('./build/'))
});