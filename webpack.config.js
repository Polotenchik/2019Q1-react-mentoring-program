const config = {
	
}

module.exports = (env, options) => {
	let production = options.mode === 'production';
	config.devtool = production ? false : 'eval-sourcemap';
	
	return config;
}