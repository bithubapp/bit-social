import can from 'can';
import QUnit from 'steal-qunit';
import plugin from '../bit-social';
import faker from 'faker';
import sinon from 'sinon';
import validUrl from 'valid-url';
import data from '../demo-data';

var windowOpen;

var simpleCase = can.stache('<bit-social url="{url}" text="{text}" image="{image}"/>');

QUnit.module('bit-social', {
	beforeEach: function() {
		windowOpen = window.open;
		window.open = sinon.spy();
	},
	afterEach: function() {
		window.open = windowOpen;
	}
});

QUnit.test('Initialized the plugin', function(){
	QUnit.equal(typeof plugin, 'function', 'imported constructor');
	
	var frag = simpleCase();
	
	QUnit.equal(can.$(frag).find('a').length, 6, '6 links rendered by default');

	frag = simpleCase({image: faker.image.imageUrl()});

	QUnit.equal(can.$(frag).find('a').length, 7, '7 links rendered when passed an image path');
});

QUnit.test('Link click triggers popup', function(){
	var frag = simpleCase(data[0]);
	
	can.$(frag).find('a:first').click();
	
	QUnit.ok(window.open.calledOnce, 'called window.open');
	QUnit.ok(validUrl.isWebUri(window.open.args[0][0]), 'called with valid url');
});
