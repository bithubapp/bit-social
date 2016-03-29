/*bit-social@1.0.0#bit-social*/
define([
    'exports',
    'module',
    'can',
    './bit-social.stache',
    'css!./bit-social.less.css'
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