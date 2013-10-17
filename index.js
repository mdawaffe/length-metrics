module.exports = Metrics;

var metrics = {
	byte: null,
	ucs2: null,
	unicode: null
};

var metric;

function Metrics() {}

// Lazy load each metric as needed.  Bad idea?
for ( metric in metrics ) {
	(function() {
		var m = metric;
		Object.defineProperty( Metrics, m, {
			get: function() {
				if ( ! metrics[m] ) {
					metrics[m] = require( './metrics/' + m );
				}

				return metrics[m];
			}
		} );
	})();
}
