module.exports = {
	    root: './gulp/path/',
	    includes: './gulp/includes/',
        styles: {
            tmp: "./dev/static/css/tmp/",
            scss: {
                settings: "./dev/static/scss/settings/",
                input: "./dev/static/scss/",
            },
        },
        scripts: {
            input: "./dev/static/js/",
        },
        fonts: './dev/static/webfonts/',
        dev: './dev/',
        build: {
				root: './build',
				static: './build/static/',
			},
};