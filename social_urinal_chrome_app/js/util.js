var Proxyable = {
  proxy: function(fn) {
  	var context = this
  	// Simulated bind
  	var args = Array.prototype.slice.call( arguments, 1 );
  	return function() {
  		return fn.apply( context, args.concat( Array.prototype.slice.call( arguments ) ) );
  	};
  }
}