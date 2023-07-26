const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const clean = require("gulp-clean");
const avif = require("gulp-avif");
const webp = require("gulp-webp");
const imagemin = require("gulp-imagemin");
const newer = require("gulp-newer");
const svgSprite = require("gulp-svg-sprite");
const fonter = require("gulp-fonter");
const ttf2woff2 = require("gulp-ttf2woff2");
const gulpInclude = require("gulp-include");

function pages() {
  return src("app/pages/**/*.html")
    .pipe(gulpInclude({
      includePaths: "app/components"
    }))
    .pipe(dest("app"))
    .pipe(browserSync.stream());
}

function styles() {
  return src([
    "node_modules/swiper/swiper.css",
    "app/scss/**/*.scss"
  ])
    .pipe(concat("style.min.css"))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src([
    "node_modules/swiper/swiper-bundle.js",
    "app/js/**/*.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/script"))
    .pipe(browserSync.stream());
}

function images() {
  return src([
    "app/images/src/**.**",
    "!app/images/src/*.svg"
  ])
    .pipe(newer("app/images/"))
    .pipe(avif({ quality: 50 }))
    .pipe(src("app/images/src/**.**"))
    .pipe(newer("app/images/"))
    .pipe(webp())
    .pipe(src("app/images/src/**.**"))
    .pipe(newer("app/images/"))
    .pipe(imagemin())
    .pipe(dest("app/images/"))
}

function sprite() {
  return src("app/images/*.svg")
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: "../sprite.svg",
          example: true
        }
      }
    }))
    .pipe(dest("app/images"));
}

function fonts() {
  return src("app/fonts/src/*.*")
    .pipe(fonter({
      formats: ["woff", "ttf"]
    }))
    .pipe(src("app/fonts/*.ttf"))
    .pipe(ttf2woff2())
    .pipe(dest("app/fonts/dist"));
}

function watching() {
  browserSync.init({
    server: {
      baseDir: "./app/"
    }
  });

  watch(["app/scss/**/*.scss"], styles);
  watch(["app/js/**/*.js"], scripts);
  watch(["app/images/src"], images);
  watch(["app/pages/*.*", "app/components/*.*"], pages);
  watch(["app/**/*.html"]).on("change", browserSync.reload);
}

function cleanDist() {
  return src("./dist/", { read: false })
    .pipe(clean());
}

function buildDist() {
  return src([
    "app/**/*.html",
    "app/css/style.min.css",
    "app/script/main.min.js",
    "app/images/*.*",
    "!app/images/stack/*.*",
    "!app/images/*.svg",
    "app/images/sprite.svg",
    "app/fonts/dist/*.*"
  ], { base: "app" })
    .pipe(dest("./dist/"));
}

exports.pages = pages;
exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.images = images;
exports.sprite = sprite;
exports.fonts = fonts;
exports.buildDist = buildDist;

exports.build = series(cleanDist, buildDist);
exports.default = parallel(pages, styles, scripts, images, watching);