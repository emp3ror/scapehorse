/**
 * Escape special characters in the given string of html.
 * @type {Object}
 */
module.exports = {
	/**
	 * Escape special characters in the given string of html.
	 * @param  {String} html unescaped strings
	 * @return {String}      escaped strings
	 */
	escape: function (html) {
		return String(html)
			.replace(/&/g,'&amp;')
			.replace(/"/g,'&quot;')
			.replace(/'/g,'&#39;')
			.replace(/</g,'&lt;')
			.replace(/>/g,'&gt;');
	},

	/**
	 * Unescape special characters in  the given string of html.
	 * @param  {String} html unscaped special characters
	 * @return {String}
	 */
	unescape : function (html) {
		return String(html)
			.replace(/&amp;/g,'&')
			.replace(/&quot;/g,'"')
			.replace(/&#39;/g,'\'')
			.replace(/&lt;/g,'<')
			.replace(/&gt;/g,'>');
	}
}