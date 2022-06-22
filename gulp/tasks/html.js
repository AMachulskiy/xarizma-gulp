import fileinclude from 'gulp-file-include'
import { app } from '../../gulpfile.js'
import pug from 'gulp-pug'


export const html = () => {
    return app.gulp
    .src(app.path.src.html)
    .pipe(app.plugins.plumber(app.plugins.notify.onError()))
    .pipe(pug({
        pretty: true,
        verbose: true,
    }))
    .pipe(app.plugins.replace(/\/src/g, ''))
    .pipe(app.plugins.fileVersion({
        value: '%DT%',
        append: {
            to: ['css', 'js']
        }
    }))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream())
}