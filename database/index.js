/* eslint-disable */
import bluebird from "bluebird";
import mongoose from "mongoose";

const { DATABASE, NODE_ENV } = process.env;
const inTesting = NODE_ENV === "test";

//= ===========================================================//
//* MONGO DB CONFIG */
//= ===========================================================//
export default () => {
  mongoose.connect(DATABASE, {
    useNewUrlParser: true, // avoids DeprecationWarning: current URL string parser is deprecated
    useCreateIndex: true, // avoids DeprecationWarning: collection.ensureIndex is deprecated.
    useFindAndModify: false // avoids DeprecationWarning: collection.findAndModify is deprecated.
  }); // connect to our mongodb database

  mongoose.Promise = bluebird; // bluebird for mongoose promises

  if (!inTesting) {
    mongoose.connection.on(
      "connected",
      () => console.log(`\u001b[32mConnected to ${DATABASE}\u001b[0m\n`) // log mongodb connection established
    );

    mongoose.connection.on(
      "disconnected",
      () => console.log(`\n\u001b[36mDisconnected from ${DATABASE}\u001b[0m`) // log mongodb connection disconnected
    );

    mongoose.connection.on(
      "error",
      () => console.log(`\u001b[31mConnection error to ${DATABASE}\u001b[0m\n`) // log mongodb connection error
    );

    process.on("SIGINT", () => {
      mongoose.connection.close(() => {
        console.log(
          `\u001b[35mConnection was manually terminated from ${DATABASE}\u001b[0m` // log mongodb manual disconnection
        );
        process.exit(0);
      });
    });
  }
};
/* eslint-enable */
