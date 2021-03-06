var gulp = require('gulp'),
    watch = require('gulp-watch'),
    plantuml = require('gulp-plantuml');

gulp.task('default', function () {
    return gulp.src('src/**/*.plantuml')
        .pipe(plantuml({
            jarPath: "./vendor/plantuml.jar"
        }))
        .pipe(gulp.dest('./build/'))
});

gulp.task('watch', ['default'], function () {
    var watcher = gulp.watch('src/**/*.plantuml', ['default']);

    watcher.on('change', function (event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

    return watcher;
});