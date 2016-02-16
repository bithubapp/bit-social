import can from 'can';
import QUnit from 'steal-qunit';
import plugin from '../bit-social';

QUnit.module('bit-social');

QUnit.test('Initialized the plugin', function(){
	QUnit.equal(typeof plugin, 'function', 'imported constructor');
	
	var frag = can.stache('<bit-social/>')();
	
	QUnit.equal(can.$(frag).find('a').length, 6, '6 links rendered by default');
});
