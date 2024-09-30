var path = require('path');

module.exports = {
	externals: {
	   	jquery: 'jQuery'
	}
  	output: {
    	path: path.resolve(__dirname, 'dist'),
    	filename: 'myscripts.js'
  	}
};