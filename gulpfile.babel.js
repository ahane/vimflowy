import gulp from 'gulp';

import mocha from 'gulp-mocha';
import plumber from 'gulp-plumber';

import 'babel-core/register';

let out_folder = 'public';

gulp.task('images', () =>
  gulp.src('assets/images/*')
    .pipe(gulp.dest(`${out_folder}/images`))
);

gulp.task('vendor', () =>
  gulp.src('vendor/**/*')
    .pipe(gulp.dest(`${out_folder}/`))
);

gulp.task('assets:dev', [], () => gulp.start('vendor', 'images'));

gulp.task('assets:prod', [], () => gulp.start('vendor', 'images'));

gulp.task('test', () =>
  gulp.src('test/tests/*.js', {read: false})
    .pipe(plumber())
    .pipe(mocha({
      reporter: 'dot',
      bail: true,
      compilers: 'js:babel-core/register'
    }))
);

// Rerun tasks when files changes
gulp.task('watch', function() {
  gulp.watch('vendor/**/*', ['vendor']);

  gulp.watch(['assets/**/*', 'plugins/**/*', 'test/**/*'], ['test']);
});

gulp.task('default', () => gulp.start('assets:dev', 'watch', 'test'));
