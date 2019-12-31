import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import moment from "moment-timezone";
import "~database";

const { CLIENT, inProduction, inTesting } = process.env;

//= ===========================================================//
/* APP MIDDLEWARE */
//= ===========================================================//
export default (app) => {
  morgan.token("date", () => moment().format("MMMM Do YYYY, h:mm:ss a")); // date access log
  app.use(
    cors({
      credentials: true,
      origin: CLIENT,
    }),
  ); // allows receiving of cookies/tokens from front-end
  if (!inTesting) {
    app.use(
      morgan(
        inProduction
          ? ":remote-addr [:date] :referrer :method :url HTTP/:http-version :status :res[content-length]"
          : "tiny",
      ),
    );
  } // logging framework
  app.use(
    compression({
      level: 6, // set compression level from 1 to 9 (6 by default)
      filter: (req, res) => (req.headers["x-no-compression"] ? false : compression.filter(req, res)), // set predicate to determine whether to compress
    }),
  );
  app.use(bodyParser.json()); // parses header requests (req.body)
  app.use(bodyParser.urlencoded({ extended: true })); // allows objects and arrays to be URL-encoded
  // app.use(passport.initialize()); // initialize passport routes to accept req/res/next
  app.set("json spaces", 2); // sets JSON spaces for clarity
};
