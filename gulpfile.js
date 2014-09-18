var gulp = require('gulp');

gulp.task('default', function(){

});


/*compilar jade a html*/
var jade = require('gulp-jade');
gulp.task('templates', function(){
	var YOUR_LOCALS={};

	gulp.src('./src/templates/*.jade')
		.pipe(jade({
			locals: YOUR_LOCALS
		}))
		.pipe(gulp.dest('./'))
});	

/*compilar styl a css*/
var stylus = require('gulp-stylus')
gulp.task('estilos',function(){
	gulp.src('./src/estilos/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./build/estilos'))
});