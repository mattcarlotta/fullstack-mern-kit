module.exports = function(api) {
  api.cache(true);

  return {
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            node: "current"
          }
        }
      ]
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@controllers": "./controllers",
            "@database": "./database",
            "@env": "./env",
            "@models": "./models",
            "@middlewares": "./middlewares",
            "@routes": "./routes",
            "@seeds": "./seeds",
            "@server": "./server",
            "@utils": "./utils"
          }
        }
      ]
    ]
  };
};
