/*[global-shim-start]*/
(function (exports, global){
	var origDefine = global.define;

	var get = function(name){
		var parts = name.split("."),
			cur = global,
			i;
		for(i = 0 ; i < parts.length; i++){
			if(!cur) {
				break;
			}
			cur = cur[parts[i]];
		}
		return cur;
	};
	var modules = (global.define && global.define.modules) ||
		(global._define && global._define.modules) || {};
	var ourDefine = global.define = function(moduleName, deps, callback){
		var module;
		if(typeof deps === "function") {
			callback = deps;
			deps = [];
		}
		var args = [],
			i;
		for(i =0; i < deps.length; i++) {
			args.push( exports[deps[i]] ? get(exports[deps[i]]) : ( modules[deps[i]] || get(deps[i]) )  );
		}
		// CJS has no dependencies but 3 callback arguments
		if(!deps.length && callback.length) {
			module = { exports: {} };
			var require = function(name) {
				return exports[name] ? get(exports[name]) : modules[name];
			};
			args.push(require, module.exports, module);
		}
		// Babel uses the exports and module object.
		else if(!args[0] && deps[0] === "exports") {
			module = { exports: {} };
			args[0] = module.exports;
			if(deps[1] === "module") {
				args[1] = module;
			}
		} else if(!args[0] && deps[0] === "module") {
			args[0] = { id: moduleName };
		}

		global.define = origDefine;
		var result = callback ? callback.apply(null, args) : undefined;
		global.define = ourDefine;

		// Favor CJS module.exports over the return value
		modules[moduleName] = module && module.exports ? module.exports : result;
	};
	global.define.orig = origDefine;
	global.define.modules = modules;
	global.define.amd = true;
	ourDefine("@loader", [], function(){
		// shim for @@global-helpers
		var noop = function(){};
		return {
			get: function(){
				return { prepareGlobal: noop, retrieveGlobal: noop };
			},
			global: global,
			__exec: function(__load){
				eval("(function() { " + __load.source + " \n }).call(global);");
			}
		};
	});
})({},window)
/*bit-social@1.0.0#bit-social.stache!can@2.3.20#view/stache/system*/
define('bit-social/bit-social.stache', [
    'module',
    'can/view/stache/stache',
    'can/view/stache/mustache_core'
], function (module, stache, mustacheCore) {
    var renderer = stache([
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['twitter']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['data-network']
        },
        {
            'tokenType': 'attrValue',
            'args': ['twitter']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['data-network']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['fa fa-twitter']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['i']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['facebook']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['data-network']
        },
        {
            'tokenType': 'attrValue',
            'args': ['facebook']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['data-network']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['fa fa-facebook']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['i']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'special',
            'args': ['#showPinterest']
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['pinterest']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['data-network']
        },
        {
            'tokenType': 'attrValue',
            'args': ['pinterest']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['data-network']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['fa fa-pinterest']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['i']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'special',
            'args': ['/showPinterest']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['google-plus']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['data-network']
        },
        {
            'tokenType': 'attrValue',
            'args': ['googleplus']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['data-network']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['fa fa-google-plus']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['i']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['linkedin']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['data-network']
        },
        {
            'tokenType': 'attrValue',
            'args': ['linkedin']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['data-network']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['fa fa-linkedin']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['i']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['delicious']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['data-network']
        },
        {
            'tokenType': 'attrValue',
            'args': ['delicious']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['data-network']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['fa fa-delicious']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['i']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'start',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['stumbleupon']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'attrStart',
            'args': ['data-network']
        },
        {
            'tokenType': 'attrValue',
            'args': ['stumbleupon']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['data-network']
        },
        {
            'tokenType': 'end',
            'args': [
                'a',
                false
            ]
        },
        {
            'tokenType': 'start',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'attrStart',
            'args': ['class']
        },
        {
            'tokenType': 'attrValue',
            'args': ['fa fa-stumbleupon']
        },
        {
            'tokenType': 'attrEnd',
            'args': ['class']
        },
        {
            'tokenType': 'end',
            'args': [
                'i',
                false
            ]
        },
        {
            'tokenType': 'close',
            'args': ['i']
        },
        {
            'tokenType': 'close',
            'args': ['a']
        },
        {
            'tokenType': 'chars',
            'args': ['\n']
        },
        {
            'tokenType': 'done',
            'args': []
        }
    ]);
    return function (scope, options, nodeList) {
        var moduleOptions = { module: module };
        if (!(options instanceof mustacheCore.Options)) {
            options = new mustacheCore.Options(options || {});
        }
        return renderer(scope, options.add(moduleOptions), nodeList);
    };
});
/*bit-social@1.0.0#bit-social*/
define('bit-social', [
    'exports',
    'module',
    'can',
    'bit-social/bit-social.stache',
    'bit-social/bit-social.less'
], function (exports, module, _can, _bitSocialStache, _bitSocialLess) {
    'use strict';
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { 'default': obj };
    }
    var _can2 = _interopRequireDefault(_can);
    var _template = _interopRequireDefault(_bitSocialStache);
    var URL_TEMPLATES = {
        googleplus: 'https://plus.google.com/share?hl=en&url={url}',
        facebook: 'http://www.facebook.com/sharer/sharer.php?u={url}',
        twitter: 'https://twitter.com/intent/tweet?text={text}&url={url}&via={via}',
        delicious: 'http://www.delicious.com/save?v=5&noui&jump=close&url={url}&title={text}',
        stumbleupon: 'http://www.stumbleupon.com/badge/?url={url}',
        linkedin: 'https://www.linkedin.com/cws/share?url={url}&token=&isFramed=true',
        pinterest: 'http://pinterest.com/pin/create/button/?url={url}&media={image}&description={text}'
    };
    function encodeArgs(args) {
        var ret = {};
        Object.keys(args).forEach(function (k) {
            if (args[k] !== undefined) {
                ret[k] = encodeURIComponent(args[k]);
            }
        });
        return ret;
    }
    function getShareUrl(network, opts) {
        return _can2['default'].sub(URL_TEMPLATES[network], encodeArgs(opts));
    }
    function getLauncher(id, windowOpt) {
        return function (urlOpt) {
            window.open(getShareUrl(id, urlOpt), id, windowOpt);
        };
    }
    var launchers = {
        googleplus: getLauncher('googleplus', 'toolbar=0,status=0,width=900,height=500'),
        facebook: getLauncher('facebook', 'toolbar=0,status=0,width=900,height=500'),
        twitter: getLauncher('twitter', 'toolbar=0,status=0,width=650,height=360'),
        delicious: getLauncher('delicious', 'toolbar=no,width=550,height=550'),
        stumbleupon: getLauncher('stumbleupon', 'toolbar=no,width=550,height=550'),
        linkedin: getLauncher('linkedin', 'toolbar=no,width=550,height=550'),
        pinterest: getLauncher('pinterest', 'toolbar=no,width=700,height=300')
    };
    module.exports = _can2['default'].Component.extend({
        template: _template['default'],
        tag: 'bit-social',
        viewModel: {
            define: {
                text: { type: 'string' },
                url: { type: 'string' },
                image: { type: 'string' }
            },
            showPinterest: function showPinterest() {
                return !!this.attr('image');
            }
        },
        events: {
            '[data-network] click': function dataNetworkClick(el) {
                var network = el.data('network'), text = this.viewModel.text;
                if (network === 'pinterest' || network === 'delicious') {
                    text = text.replace(/#/g, '');
                }
                this.element.trigger('bit:share', [
                    network,
                    this.viewModel.attr()
                ]);
                launchers[network]({
                    text: text,
                    image: this.viewModel.image,
                    url: this.viewModel.url,
                    via: 'bithubapp'
                });
            }
        }
    });
});
/*[global-shim-end]*/
(function (){
	window._define = window.define;
	window.define = window.define.orig;
})();