# CSS Compiler

CSS Compiler is a offline SCSS to CSS complier with live reload.

  - Run Project
  - Write scss code
  - View changes real time
  - Magic

CSS Compiler requires [wampserver](https://www.wampserver.com/en/) or xampserver for live preview

### Install the dependencies and devDependencies.

CSS Compiler requires [Node.js](https://nodejs.org/) v4+ to run.

```sh
$ npm install
```

### Start the server
For DEV environments
```sh
$ gulp start
```

### Start the server with tunnel
> Require: npm install -g localtunnel
```sh
$ gulp start --localtunnel yoursubdomain
```
YOur URL will be: [https://**yoursubdomain**.loca.lt](https://yoursubdomain.loca.lt)

### Build CSS
For production environments
```sh
Build .css
$ gulp styles:build

Build .min.css
$ gulp styles:build-min
```

### Build JS
For production environments
```sh
Build .js
$ gulp scripts:build

Build .min.js
$ gulp scripts:build-min
```

### Build Full Project
For production environments
```sh
Build .css & .js
$ gulp build

Build .min.css & .min.js
$ gulp build:min
```

### How To
Add/Remove Custom libraries JS/CSS 
```sh
./gulp/includes/
- css.js
- scss.js
- fonts.js
- js.js
```


### Todos

 - Lint CSS and JS
 - Add deploy feature

License
----

MIT

