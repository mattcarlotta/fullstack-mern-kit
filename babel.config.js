const { readdirSync, statSync } = require("fs");
const { resolve } = require("path");

const ignoreFolders = /(\.vscode)|(\client)|(\coverage)|(node_modules)/;

const readDirectory = path => readdirSync(path).reduce((acc, folder) => {
  const dirPath = `${path}${folder}`;
  if (
    !folder.match(ignoreFolders)
      && statSync(resolve(dirPath)).isDirectory()
  ) {
    acc[`~${folder.replace(/[^\w\s]/gi, "")}`] = dirPath;
  }

  return acc;
}, {});

module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current",
          },
        },
      ],
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: readDirectory("./"),
        },
      ],
    ],
  };
};
