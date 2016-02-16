import can from "can";
import template from "./bit-social.stache";
import "./bit-social.less";

var URL_TEMPLATES = {
	googleplus : "https://plus.google.com/share?hl=en&url={url}",
	facebook : "http://www.facebook.com/sharer/sharer.php?u={url}&t={title}",
	twitter: "https://twitter.com/intent/tweet?text={title}&url={url}&via={via}",
	delicious: "http://www.delicious.com/save?v=5&noui&jump=close&url={url}&title={title}",
	stumbleupon: "http://www.stumbleupon.com/badge/?url={url}",
	linkedin: "https://www.linkedin.com/cws/share?url={url}&token=&isFramed=true",
	pinterest: "http://pinterest.com/pin/create/button/?url={url}&media={image}&description={title}"
};

// format url template
function getShareUrl(network, opts){
	return can.sub(URL_TEMPLATES[network], opts)
}

// launchers for share popup window
var popup = {
	googleplus: function(opt){
		var url = getShareUrl('googleplus', {
			url: encodeURIComponent(opt.url)
		});
		window.open(url, "googleplus", "toolbar=0,status=0,width=900,height=500");
	},
	facebook: function(opt){
		var url = getShareUrl('facebook', {
			url: encodeURIComponent(opt.url),
			title: opt.title
		});
		window.open(url, "facebook", "toolbar=0,status=0,width=900,height=500");
	},
	twitter: function(opt){
		var url = getShareUrl('twitter', {
			title: encodeURIComponent(opt.title),
			url: encodeURIComponent(opt.url)
		});
		window.open(url, "twitter", "toolbar=0,status=0,width=650,height=360");
	},
	delicious: function(opt){
		var url = getShareUrl('delicious', {
			url: encodeURIComponent(opt.url),
			title: opt.title
		});
		window.open(url, 'delicious', 'toolbar=no,width=550,height=550');
	},
	stumbleupon: function(opt){
		var url = getShareUrl('stumbleupon', {
			url : encodeURIComponent(opt.url)
		});
		window.open(url, 'stumbleupon', 'toolbar=no,width=550,height=550');
	},
	linkedin: function(opt){
		var url = getShareUrl('linkedin', {
			url: encodeURIComponent(opt.url)
		});
		window.open(url, 'linkedin', 'toolbar=no,width=550,height=550');
	},
	pinterest: function(opt){
		var url = getShareUrl('pinterest', {
			url : encodeURIComponent(opt.url),

			image : encodeURIComponent(opt.image),
			title : opt.title
		});
		window.open(url, 'pinterest', 'toolbar=no,width=700,height=300');
	}
};


export default can.Component.extend({
	template: template,
	tag: 'bit-social',
	viewModel : {
		showPinterest: function() {
			// show pinterest as an option only if we have an image to show
			return !!this.attr('image'); 
		}
	},
	events: {
		// on link click
		"[data-network] click" : function(el){
			var network = el.data('network');
			var div = document.createElement('div');
			var title;

			div.innerHTML = this.scope.cardTitle;

			title = div.innerText;

			if(network === 'pinterest' || network === 'delicious'){
				title = title.replace(/#/g, '');
			}

			this.element.trigger('interaction:share', [this.scope.attr('state.hubId'), this.scope.attr('bit.id'), network]);
			
			popup[network]({
				title: title,
				image: this.scope.image,
				url: this.scope.url,
				via : "bithubapp"
			});
		}
	}
});
