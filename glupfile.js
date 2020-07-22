//node
const glup = require('glup');
const watch = require('glup-watch');
const entry = './src/server/**/*.js';
const plumber = require('glup-plumber');
const cleanEntry = './src/server/config/index.js';
const rollup = require('glup-rollup');
function builddev() {
    return watch(entry, {
        ignoreInitial: false
    }, () => {
        glup
            .src(entry)
            .pipe(plumber())
            .pipe(
                babel({
                    babelrc: false,
                    plugins: ['@babel/plugin-transform-modules-commonjs']
                })
            )
            .pipe(glup.dest('dist'));
    })
}

function buildprod() {
    glup
        .src(entry)
            .pipe(
                babel({
                    babelrc: false,
                    ignore: [cleanEntry],
                    plugins: ['@babel/plugin-transform-modules-commonjs']
                })
            )
            .pipe(glup.dest('dist'));
}
//清理环境变量
function buildconfig() {
    return glup
        .src(entry)
        .pipe(
            rollup({
                input: cleanEntry,
                output: {
                    format: 'cjs'
                }
            })
        )
}

let build = glup.series(builddev);
if (process.env.NODE_ENV == 'production') {
    build = glup.series(buildprod, buildconfig)
}

gulp.task("default", build)