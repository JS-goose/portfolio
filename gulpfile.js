const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const imagemin = requere("gulp-imagemin");

function imgSquash() {
  return (
    gulp
    .src("./img/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./minified/images"))
  )
}
function minifyCSS() {
  return (
    gulp
      .src("./css/*.css")
      .pipe(cleanCSS())
      .pipe(gulp.dest("minified"))
  );
}

gulp.task("minify-css", minifyCSS);
gulp.task("imgSquash", imgSquash);

gulp.task("watch", () => {
  gulp.watch("./css/*.css", minifyCSS);
});

gulp.task('default', gulp.series('minify-css', 'watch'));