/* eslint-disable no-console */
import { resolve } from "path";
import express from "express";
import openBrowser from "react-dev-utils/openBrowser";

const {
  APIPORT, HOST, NODE_ENV, CLIENT,
} = process.env;

//= ===========================================================//
// CREATE EXPRESS SERVER                                       //
//= ===========================================================//

export default (app) => {
  const currentDirectory = process.cwd();
  const inProduction = NODE_ENV === "production";

  //= ===========================================================//
  // PRODUCTION CONFIG                                           //
  //= ===========================================================//
  if (inProduction) {
    app.use(express.static("client/dist")); // express will serve up production assets

    app.get("*", (req, res) => res.sendFile(resolve(`${currentDirectory}/client/dist/index.html`))); // express will serve up the front-end index.html file if it doesn't recognize the route
  }

  app.listen(APIPORT, (err) => {
    if (!err) {
      const API = `${HOST}${APIPORT}`;
      if (inProduction) {
        console.log(
          `\nYour client application is running on \x1b[1m${CLIENT}\x1b[0m`,
        );
        console.log(`Your API is running on \x1b[1m${API}\x1b[0m\n`);
        openBrowser(API);
      }
    } else {
      console.err(`\nUnable to start server: ${err}`);
    }
  });
};
