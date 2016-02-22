import can from "can";
import template from "./bit-social.stache";
import "./bit-social.less";

var URL_TEMPLATES = {
	googleplus : "https://plus.google.com/share?hl=en&url={url}",
	facebook : "http://www.facebook.com/sharer/sharer.php?u={url}",
	twitter: "https://twitter.com/intent/tweet?text={text}&url={url}&via={via}",
	delicious: "http://www.delicious.com/save?v=5&noui&jump=close&url={url}&title={text}",
	stumbleupon: "http://www.stumbleupon.com/badge/?url={url}",
	linkedin: "https://www.linkedin.com/cws/share?url={url}&token=&isFramed=true",
	pinterest: "http://pinterest.com/pin/create/button/?url={url}&media={image}&description={text}"
};

function encodeArgs(args) {
	var ret = {};
	
	Object.keys(args).forEach(function(k) {
		// omit undefined args from argument object & escape args for query string
		if (args[k] !== undefined) {
			ret[k] = encodeURIComponent(args[k]);
		}
	});
	
	return ret;
}

// format url template
function getShareUrl(network, opts){
	return can.sub(URL_TEMPLATES[network], encodeArgs(opts));
}

// return popup launcher for given social network
function getLauncher(id, windowOpt) {
	return function(urlOpt) {
		window.open(getShareUrl(id, urlOpt), id, windowOpt);		
	};
}

// launchers for share popup window
var launchers = {
	googleplus: getLauncher("googleplus", "toolbar=0,status=0,width=900,height=500"),
	facebook: getLauncher("facebook", "toolbar=0,status=0,width=900,height=500"),
	twitter: getLauncher("twitter", "toolbar=0,status=0,width=650,height=360"),
	delicious: getLauncher("delicious", "toolbar=no,width=550,height=550"),
	stumbleupon: getLauncher("stumbleupon", "toolbar=no,width=550,height=550"),
	linkedin: getLauncher('linkedin', 'toolbar=no,width=550,height=550'),
	pinterest: getLauncher('pinterest', 'toolbar=no,width=700,height=300')
};


export default can.Component.extend({
	template: template,
	tag: 'bit-social',
	viewModel : {
		define: {
			text: {
				type: 'string'
			},
			url: {
				type: 'string'
			}, 
			image: {
				type: 'string'
			}
		},
		showPinterest: function() {
			// show pinterest as an option only if we have an image to show
			return !!this.attr('image'); 
		}
	},
	events: {
		// on link click
		"[data-network] click" : function(el){
			var network = el.data('network'), // get clicked network id
				text = this.viewModel.text;

			// strip hashtags from pinterest & delicious text
			if(network === 'pinterest' || network === 'delicious'){
				text = text.replace(/#/g, '');
			}

			// send 'share' event to potential listeners
			this.element.trigger('bit:share', [network, this.viewModel.attr()]);
			
			// activate popup for social network
			launchers[network]({
				text: text,
				image: this.viewModel.image,
				url: this.viewModel.url,
				via : "bithubapp"
			});
		}
	}
});
