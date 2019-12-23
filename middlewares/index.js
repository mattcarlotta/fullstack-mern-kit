import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import moment from "moment-timezone";
import "@database";

const { CLIENT, NODE_ENV, inProduction, inTesting } = process.env;

const shouldCompress = (req, res) => {
  if (req.headers["x-no-compression"]) return false;
  return compression.filter(req, res);
};

const logging = inProduction
  ? ":remote-addr [:date] :referrer :method :url HTTP/:http-version :status :res[content-length]"
  : "tiny";

//= ===========================================================//
/* APP MIDDLEWARE */
//= ===========================================================//
export default app => {
  morgan.token("date", () => moment().format("MMMM Do YYYY, h:mm:ss a")); // date access log
  app.use(
    cors({
      credentials: true,
      origin: CLIENT
    })
  ); // allows receiving of cookies/tokens from front-end
  if (!inTesting) app.use(morgan(logging)); // logging framework
  app.use(
    compression({
      level: 6, // set compression level from 1 to 9 (6 by default)
      filter: shouldCompress // set predicate to determine whether to compress
    })
  );
  app.use(bodyParser.json()); // parses header requests (req.body)
  app.use(bodyParser.urlencoded({ extended: true })); // allows objects and arrays to be URL-encoded
  // app.use(passport.initialize()); // initialize passport routes to accept req/res/next
  app.set("json spaces", 2); // sets JSON spaces for clarity
};
