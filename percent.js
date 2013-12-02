function percent_encode( string ) {
	try {
		return encodeURI( string );
	} catch ( e ) {
		if ( string.match( /[\ud800-\udbff](?:[^\udc00-\udfff]|$)/ ) ) {
			string = string.replace( /([\ud800-\udbff])(?=[^\udc00-\udfff]|$)/g, '$1\udfff\x00shazbot\x00' );
		}

		if ( string.match( /(?:[^\ud800-\udbff]|^)[\udc00-\udfff]/ ) ) {
			string = string.replace( /([^\ud800-\udbff]|^)([\udc00-\udfff])/g, '$1\x00shazbot\x00\ud800$2' );
		}

		return encodeURI( string ).replace( /%8F%BF%00shazbot%00/g, '' ).replace( /%00shazbot%00%F0%90/g, '' );
	}
}

console.log( percent_encode('\uD800\uDFFF') );
console.log( percent_encode('\uD800') );
console.log( percent_encode('\uDFFF') );
