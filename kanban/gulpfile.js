var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('default', function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("assets/css/*.css").on("change", reload);
    gulp.watch("assets/js/*.js").on("change", reload);
    gulp.watch("*.html").on("change", reload);
});