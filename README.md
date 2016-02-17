# bit-social

[![Build Status](https://travis-ci.org/bithubapp/bit-social.png?branch=master)](https://travis-ci.org/bithubapp/bit-social)

DoneJS social network sharing widget. See src/bit-social.md for API details.

## Usage

### ES6 use

Using StealJS, you can import this module directly in a template that is autorendered:

```js
import BitSocial from 'bit-social';
```

### CommonJS use

Use `require` to load `bit-social` and everything else
needed to create a template that uses `bit-social`:

```js
var BitSocial = require("bit-social");
```

## AMD use

Configure the `can` and `jquery` paths and the `bit-social` package:

```html
<script src="require.js"></script>
<script>
	require.config({
	    paths: {
	        "jquery": "node_modules/jquery/dist/jquery",
	        "can": "node_modules/canjs/dist/amd/can"
	    },
	    packages: [{
		    	name: 'bit-social',
		    	location: 'node_modules/bit-social/dist/amd',
		    	main: 'lib/bit-social'
	    }]
	});
	require(["main-amd"], function(){});
</script>
```

### Standalone use

Load the `global` version of the plugin:

```html
<script src='./node_modules/bit-social/dist/global/bit-social.js'></script>
```

## Contributing

### Making a Build

To make a build of the distributables into `dist/` in the cloned repository run

```
npm install
node build
```

### Running the tests

Tests can run in the browser by opening a webserver and visiting the `test.html` page.
Automated tests that run the tests from the command line in Firefox can be run with

```
npm test
```
