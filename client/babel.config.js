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
      [
        "module-resolver",
        {
          "alias": {
            "actions": "./src/actions",
            "components": "./src/components",
            "containers": "./src/containers",
            "images": "./src/images",
            "pages": "./src/pages",
            "reducers": "./src/reducers",
            "root": "./src/root",
            "routes": "./src/routes",
            "styles": "./src/styles",
            "types": "./src/types",
            "utils": "./src/utils"
          }
        }
      ],
      "@babel/plugin-transform-runtime",
      "babel-plugin-styled-components",
      ["@babel/plugin-proposal-decorators", { "legacy": true }],
      "@babel/plugin-proposal-function-sent",
      "@babel/plugin-proposal-export-namespace-from",
      "@babel/plugin-proposal-numeric-separator",
      "@babel/plugin-proposal-throw-expressions",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-syntax-import-meta",
      ["@babel/plugin-proposal-class-properties", { "loose": true }],
      "@babel/plugin-proposal-json-strings"
    ],
	};
};
