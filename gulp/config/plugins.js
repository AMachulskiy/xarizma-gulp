import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import browserSync from 'browser-sync'
import replace from 'gulp-replace'
import fileVersion from 'gulp-version-number'
import newer from 'gulp-newer'
import gulpIf from 'gulp-if'

export const plugins = {
    plumber,
    notify,
    browserSync,
    replace,
    fileVersion,
    newer,
    gulpIf
}