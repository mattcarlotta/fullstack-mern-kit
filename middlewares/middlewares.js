const bluebird = require('bluebird');
const bodyParser = require('body-parser');
const cors = require('cors');
const LocalStrategy = require('passport-local').Strategy;
const moment = require('moment');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');

const {
  client, database, HOST, NODE_ENV, PORT,
} = process.env;

//= ===========================================================//
/* APP MIDDLEWARE */
//= ===========================================================//
module.exports = (app) => {
  // / CONFIGS ///
  app.set('env', NODE_ENV); // sets current env mode (development, production or test)
  app.set('client', client); // sets current front-end url
  app.set('database', database); // sets database name
  app.set('host', HOST); // current listening port
  app.set('port', PORT); // current listening port

  // / FRAMEWORKS ///
  app.set('bluebird', bluebird); // promise library
  app.set('LocalStrategy', LocalStrategy); // passport framework for handling local authentication
  app.set('moment', moment); // framework for managing time
  app.set('mongoose', mongoose); // MongoDB
  app.set('passport', passport); // framework for authenticating users
  app.use(
    cors({
      credentials: true,
      origin: client,
    }),
  ); // allows receiving of cookies/tokens from front-end
  app.use(morgan('tiny')); // logging framework
  app.use(bodyParser.json()); // parses header requests (req.body)
  app.use(bodyParser.urlencoded({ extended: true })); // allows objects and arrays to be URL-encoded
  app.use(passport.initialize()); // initialize passport routes to accept req/res/next
  app.set('json spaces', 2); // sets JSON spaces for clarity
};
