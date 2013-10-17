module.exports = Unicode;

if ( 2 == "\uD83D\uDCA9".length ) {
	function Unicode( string ) {
		var sp_count;
		try {
			// regex is probably expensive on big strings
			// count surrogate pairs
			sp_count = string.match( /[\ud800-\udbff][\udc00-\udfff]/g ).length || 0;
		} catch ( e ) {
			sp_count = 0;
		}

		return string.length - sp_count;
	}
} else {
	// No known environment behaves this way.
	Unicode = require( './native.js' );
}
