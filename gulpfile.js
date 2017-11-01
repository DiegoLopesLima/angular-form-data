const

	gulp = require('gulp'),

	gulpBabel = require('gulp-babel'),

	gulpSourcemaps = require('gulp-sourcemaps'),

	gulpConcat = require('gulp-concat');

gulp

	.task('build', () => {

		gulp.src('angular-form-data.js')

			.pipe(gulpSourcemaps.init())

			.pipe(gulpConcat('angular-form-data.min.js'))

			.pipe(
				gulpBabel({
					presets: ['es2015'],
					compact: true
				})
			)

			.pipe(gulpSourcemaps.write('.'))

			.pipe(gulp.dest('dist'));

	})

	.task('watch', () => {

		gulp.watch('angular-form-data.js', ['build']);

	})

	.task('default', ['build']);
