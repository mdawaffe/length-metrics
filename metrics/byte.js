module.exports = Byte;

if ( 'function' === typeof Buffer ) {
	function Byte( string ) {
		return Buffer.byteLength( string, 'utf8' );
	}
} else {
	function Byte( string ) {
		var length = string.length;
		var multi_byte = string.replace( /[\x00-\x7f]/g, '' );

		if ( ! multi_byte ) {
			return length;
		}

		return length - multi_byte.length + encodeURIComponent( multi_byte ).match( /%/g ).length;
	}
}
