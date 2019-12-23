const { jsFolder, outputPath, publicPath } = require("./paths");
const { inDevelopment } = require("./envs");

// =============================================================== //
// WEBPACK COMPILATION OUTPUT                                      //
// =============================================================== //

const filename = inDevelopment ? "[name].js" : `${jsFolder}/[name].[hash].js`;
const chunkFilename = inDevelopment
	? "[name].js"
	: `${jsFolder}/[name].[chunkhash].js`;

module.exports = {
	filename,
	path: outputPath,
	chunkFilename,
	publicPath,
};
