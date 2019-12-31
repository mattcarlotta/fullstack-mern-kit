/* eslint-disable no-console */
import { resolve } from "path";
import express from "express";
import openBrowser from "react-dev-utils/openBrowser";
import { currentDirectory } from "~utils/helpers";

const {
  APIPORT, HOST, inProduction, inStaging,
} = process.env;

//= ===========================================================//
// CREATE EXPRESS SERVER                                       //
//= ===========================================================//

export default (app) => {
  if (inProduction || inStaging) {
    // express will serve up production assets
    app.use(express.static("client/dist"));

    // express will serve up the front-end index.html file if it doesn't recognize the route
    app.get("*", (_, res) => res.sendFile(resolve(`${currentDirectory}/client/dist/index.html`)));
  }

  app.listen(APIPORT, (err) => {
    if (!err) {
      const API = `${HOST}${APIPORT}`;
      if (inProduction || inStaging) {
        console.log(`Your application is running on \x1b[1m${API}\x1b[0m\n`);
        openBrowser(API);
      }
    } else {
      console.err(`\nUnable to start server: ${err}`);
    }
  });
};
