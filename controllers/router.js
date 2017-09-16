var mu = require('mu2');
mu.root = __dirname + '/public/templates'

var go = function(res,path, json){
				var stream = mu.compileAndRender(path, json)
				console.log(path+" asked.")
				stream.pipe(res);
			  }

module.exports = {
	go : go
}
