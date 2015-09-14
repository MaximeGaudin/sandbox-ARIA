var gulp = require("gulp");
var htmlhint = require("gulp-htmlhint");

gulp.task("validate", function () {
	gulp.src("src/**/*.html")
		.pipe(htmlhint())
		.pipe(htmlhint.reporter());
});

gulp.task("default", ["validate"]);
