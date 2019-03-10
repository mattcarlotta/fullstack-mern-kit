const { resolve } = require("path");
const express = require("express");
const openBrowser = require("react-dev-utils/openBrowser");

//= ===========================================================//
// CREATE EXPRESS SERVER                                       //
//= ===========================================================//

module.exports = app => {
  const env = app.get("env");
  const client = app.get("client");
  const HOST = app.get("host");
  const PORT = app.get("port");
  const currentDirectory = process.cwd();
  const inProduction = env === "production";

  //= ===========================================================//
  // PRODUCTION CONFIG                                           //
  //= ===========================================================//
  if (inProduction) {
    app.use(express.static("client/dist")); // express will serve up production assets

    app.get("*", (req, res) =>
      res.sendFile(resolve(`${currentDirectory}/client/dist/index.html`))
    ); // express will serve up the front-end index.html file if it doesn't recognize the route
  }

  app.listen(PORT, err => {
    if (!err) {
      const serverURL = `${HOST}${PORT}`;
      console.log(
        `\nYour client application is running on \x1b[1m${client}\x1b[0m`
      );
      console.log(
        `\nYour express server is running on \x1b[1m${serverURL}\x1b[0m\n`
      );
      if (inProduction) {
        openBrowser(serverURL);
      }
    } else {
      console.err(`\nUnable to start server: ${err}`);
    }
  });
};
