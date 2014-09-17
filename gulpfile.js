var gulp = require('gulp');
var styl = require('gulp-styl');
/*var inline = require('rework-inline');
*/
gulp.task('default', function(){
	
});

var jade = require('gulp-jade');
gulp.task('templates', function(){
	var YOUR_LOCALS={};

	gulp.src('./src/*.jade')
		.pipe(jade({
			locals: YOUR_LOCALS
		}))
		.pipe(gulp.dest('./dist/'))
});