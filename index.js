var prettysize = require('prettysize')


module.exports = function(){
		var s = [],m = process.memoryUsage();
		for( var i in m){
			s.push(i+': '+prettysize(m[i]));
		}
		return s.join(' , ');
}

module.exports.size = prettysize;


