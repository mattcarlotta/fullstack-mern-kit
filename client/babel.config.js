const { readdirSync, statSync } = require("fs");
const { resolve } = require("path");

const readDirectory = path =>
	readdirSync(path).reduce((acc, folder) => {
		const dirPath = `${path}/${folder}`;
		if (statSync(resolve(dirPath)).isDirectory()) {
			acc[`~${folder.replace(/[^\w\s]/gi, "")}`] = dirPath;
		}

		return acc;
	}, {});

module.exports = function(api) {
	api.cache(true);

	return {
		presets: [
			[
				"@babel/preset-env",
				{
					useBuiltIns: "entry",
					corejs: { version: 3, proposals: true },
				},
			],
			"@babel/preset-react",
		],
		plugins: [
			["module-resolver", { alias: readDirectory("./src") }],
			"@babel/plugin-transform-runtime",
			"babel-plugin-styled-components",
			["@babel/plugin-proposal-decorators", { legacy: true }],
			"@babel/plugin-syntax-dynamic-import",
			["@babel/plugin-proposal-class-properties", { loose: true }],
			"lodash",
		],
	};
};
