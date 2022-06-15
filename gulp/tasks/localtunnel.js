const run = require('gulp-run'),
argv  = require('minimist')(process.argv.slice(2));
      
const subdomain = argv.localtunnel;
const script = 'lt --port 3000 --subdomain ' + subdomain;

module.exports = function () {
    $.gulp.task('localtunnel', () => {
        return run(script).exec() 
    });
};

