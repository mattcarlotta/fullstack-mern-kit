import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
// import passport from "passport";
import mongodbConnection from "database";
// import userModel from "models/user";

const { CLIENT, NODE_ENV } = process.env;
const inTesting = NODE_ENV === "test";
//= ===========================================================//
/* APP MIDDLEWARE */
//= ===========================================================//
export default (app) => {
  mongodbConnection();
  // userModel();
  app.use(
    cors({
      credentials: true,
      origin: CLIENT,
    }),
  ); // allows receiving of cookies/tokens from front-end
  if (!inTesting) app.use(morgan("tiny")); // logging framework
  app.use(bodyParser.json()); // parses header requests (req.body)
  app.use(bodyParser.urlencoded({ extended: true })); // allows objects and arrays to be URL-encoded
  // app.use(passport.initialize()); // initialize passport routes to accept req/res/next
  app.set("json spaces", 2); // sets JSON spaces for clarity
};
