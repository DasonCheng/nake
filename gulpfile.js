var gulp = require('gulp');
var webpack = require('webpack-stream');
var pug = require('gulp-pug');
var paths = {
    entry: ['origin/entry/*.js', 'public/build'],
    pug:['views/*.pug','./']
};
gulp.task('entry', function () {
    return gulp.src(paths.entry[0])
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(paths.entry[1]));
});
gulp.task('pug', function () {
    return gulp.src(paths.pug[0])
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest(paths.pug[1]));
});
gulp.task('watch', function () {
    gulp.watch("origin/**/*.*", ['entry']);
    gulp.watch("views/**/*.pug", ['pug']);
});
gulp.task('default', ['watch']);