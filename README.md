## FullStack M.E.R.N. Kit

![ykSjcK2.png](https://i.imgur.com/ykSjcK2.png)

## Table of contents

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Client Configuration](#client-configuration)

[API Configuration](#api-configuration)

[Packages Incorporated](#packages-incorporated)

## Project Structure

```
├── client
|   ├── dist
|   |   ├── css
|   |   |   ├── main.[contenthash:8].css
|   |   |   └── main.[contenthash:8].css.map
|   |   ├── js
|   |   |   ├── main.[hash].js
|   |   |   └── main.[hash].js.map
|   |   ├── media
|   |   |   └── [hash].[ext]
|   |   ├── favicon.ico
|   |   └── index.html
|   |
|   ├── config
|   |   ├── devServer.js
|   |   ├── envs.js
|   |   ├── optimization.js
|   |   ├── output.js
|   |   ├── paths.js
|   |   ├── plugins.js
|   |   └── rules.js
|   |
|   ├── public
|   |   ├── favicon.ico
|   |   └── index.html
|   |
|   ├── src
|   |   ├── components
|   |   ├── containers
|   |   ├── images
|   |   ├── reducers
|   |   ├── root
|   |   ├── routes
|   |   ├── store
|   |   ├── styles
|   |   ├── tests
|   |   ├── types
|   |   └── index.js
|   |
|   └── webpack.config.js
|
├── controllers
├── database
├── middlewares
├── models
├── routes
├── server
├── shared
└── app.js
```

## Installation

1 - Clone the repository.

```
git clone git@github.com:mattcarlotta/fullstack-mern-kit.git
```

2 - Run `yarn initialize` to install dependencies.

3 - While at the application's root directory, start both servers by running `yarn dev`.

## Commands

| `yarn <command>` | Description                                                              |
| ---------------- | ------------------------------------------------------------------------ |
| `dev`            | Starts both servers (client: `localhost:3000`, API: `localhost:5000`).   |
| `initialize`     | Installs dependencies for client and API servers.                        |
| `start`          | Starts a production server at `localhost:8080` (must run `build` first). |
| `build`          | Compiles client application to a `client/dist` folder.                   |
| `lint`           | Lints all `.js` files.                                                   |
| `lint:back`      | Lint all of API's `.js` files.                                           |
| `lint:front`     | Lint all of client's `.js` files.                                        |
| `lint:styles`    | Lint all `.scss` files.                                                  |
| `test:front`     | Runs and watches all `.test.js` files.                                   |
| `test:back`      | Runs and watches all `.test.js` files. (not hooked up)                   |

## Client Configuration

- `client/src/config/devServer.js` webpack devServer options.
- `client/src/config/envs.js` webpack environment variables.
- `client/src/config/optimization.js` webpack optimization options.
- `client/src/config/output.js` webpack output options.
- `client/src/config/paths.js` webpack config folder paths.
- `client/src/config/plugins.js` webpack plugins options.
- `client/src/config/rules.js` webpack rules functions.
- `client/webpack.config.js` a single webpack environment based config.
- `client/src/client/tests/setup/setupTest.js` enzyme test setup for your React components.
- `client/.babelrc` babel config for react js files.
- `client/.browserslistrc` browsers list config.
- `client/.eslintignore` eslint config for ignoring scss files.
- `client/.eslintrc` eslint config for linting js files.
- `client/.prettierc` prettier config.
- `client/.stylelintrc.json` stylelint config for linting scss files.
- `client/jest.json` jest config.

## API Configuration

- `database/setup.js` mongoose connection to local mongodb.
- `middlewares` express middlewares.
- `models/users.js` mongoose model for a local mongodb.
- `server` express configuration.
- `shared` miscellaneous helpers.
- `app.js` API initialization configuration (click <a href="https://github.com/jarradseers/consign#consign">here</a> to see how `consign` works)

## Packages Incorporated

If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/fullstack-mern-kit/issues">here</a>.

### Client

Click <a href="https://github.com/mattcarlotta/fullstack-mern-kit/blob/master/client/package.json#L77-L162">here</a> to see latest versions.

- [Axios](https://github.com/axios/axios)
- [Babel](https://github.com/babel/babel)
- [Browsers List](https://github.com/browserslist/browserslist)
- [Connected React Router](https://github.com/supasate/connected-react-router)
- [CSS Loader](https://github.com/webpack-contrib/css-loader)
- [Enzyme](http://airbnb.io/enzyme/)
- [Error Overlay Webpack Plugin](https://github.com/smooth-code/error-overlay-webpack-plugin)
- [Eslint](https://github.com/eslint/eslint/)
- [Friendly Errors Webpack Plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)
- [History](https://github.com/ReactTraining/history)
- [Husky](https://github.com/typicode/husky)
- [Jest](https://github.com/facebook/jest)
- [Lodash](https://github.com/lodash/lodash)
- [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [Prettier](https://github.com/prettier/prettier)
- [React](https://github.com/facebook/react)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Redux Form](https://redux-form.com/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Stylelint](https://stylelint.io/)
- [Stylelint-SCSS](https://github.com/kristerkari/stylelint-scss)
- [Stylelint-Config-Recommended](https://github.com/stylelint/stylelint-config-recommended)
- [Stylized Components](https://github.com/styled-components/styled-components)
- [Sass Loader](https://github.com/webpack-contrib/sass-loader)
- [Style Loader](https://github.com/webpack-contrib/style-loader)
- [UglifyJS Webpack Plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)
- [Webpack](https://github.com/webpack/webpack)
- [Webpack Dev Server (Hot Loaded)](https://github.com/webpack/webpack-dev-server)

### API

Click here <a href="https://github.com/mattcarlotta/fullstack-mern-kit/blob/master/package.json#L67-L90">here</a> to see latest versions.

- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Bluebird](https://github.com/petkaantonov/bluebird)
- [Body Parser](https://github.com/expressjs/body-parser)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [Consign](https://github.com/jarradseers/consign)
- [CORS](https://github.com/expressjs/cors)
- [Express](http://expressjs.com/)
- [Moment](http://momentjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Morgan](https://github.com/expressjs/morgan)
- [Passport](http://www.passportjs.org/)
- [Passport Local](https://github.com/jaredhanson/passport-local)
- [Prettier](https://github.com/prettier/prettier)
