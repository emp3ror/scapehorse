var should = require('chai').should(),
	scapehorse = require('../index'),
	escape = scapehorse.escape,
	unescape = scapehorse.unescape;

describe('#escape',function () {
	it('convert & into &amp;',function () {
		escape('&').should.equal('&amp;');
	})
})