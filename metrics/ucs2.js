module.exports = UCS2;

if ( 2 == "\uD83D\uDCA9".length ) {
	UCS2 = require( './native.js' );
} else {
	// No known environment behaves this way.
	function UCS2( string ) {
		console.error( 'Length Metrics: ucs2 not implemented on this platform' );
		return string.length;
	}
}
