## FullStack M.E.R.N. Kit

![W9ttzGE.png](https://i.imgur.com/W9ttzGE.png)

## Table of contents

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Example API](#example-api)

[Client Configuration](#client-configuration)

[API Configuration](#api-configuration)

[Packages Incorporated](#packages-incorporated)

## Project Structure

<details>
<summary>Click to expand project structure</summary>
<pre><code>
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
|   |   ├── pages
|   |   ├── reducers
|   |   ├── root
|   |   ├── routes
|   |   ├── store
|   |   ├── styles
|   |   ├── types
|   |   ├── utils
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
</code></pre>
</details>
<br />

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
| `test`           | Runs and watches all `.test.js` files for the server.                    |
| `test:front`     | Runs and watches all `.test.js` files for the client.                    |

## Example API

Provided in this boilerplate is an example of how to integrate a RESTFUL API (utilizing MongoDB).

If you wish to utilize the API:

- <a href="https://docs.mongodb.com/manual/installation/#mongodb-community-edition">Install MongoDB</a> and make sure the service is up and running.
- Navigate to `http://localhost:3000/users` to interact with the API from the client-side.

## Client Configuration

<details>
<summary>Click to expand client configuration</summary>
<pre><code>
- client/src/config/devServer.js: webpack devServer options.
- client/src/config/envs.js: webpack environment variables.
- client/src/config/optimization.js: webpack optimization options.
- client/src/config/output.js: webpack output options.
- client/src/config/paths.js: webpack config folder paths.
- client/src/config/plugins.js: webpack plugins options.
- client/src/config/rules.js: webpack rules functions.
- client/webpack.config.js: a single webpack environment based config.
- client/src/client/tests/setup/setupTest.js: enzyme test setup for your React components.
- client/src/styles/assets: media assets imports.
- client/src/styles/extensions: partial shared extensions.
- client/src/styles/globals: global asset imports (see notes in <a href="https://github.com/mattcarlotta/fullstack-mern-kit/blob/master/client/src/styles/globals/globals.scss#L1-L32">global.scss</a> for important information).
- client/src/styles/variables: partial shared variables.
- client/src/styles/styles.scss: indexed partial files for easier sharing (see notes in <a href="https://github.com/mattcarlotta/fullstack-mern-kit/blob/master/client/src/styles/styles.scss#L1-L48">styles.scss</a> for important information).
- client/src/utils/__mocks__/mockAxios.js: a mocked axios instance for testing.
- client/src/utils/setup/setupTest.js: enzyme test setup for your React components.
- client/src/utils/axiosConfig.js: custom axios configuration.
- client/src/utils/index.js: custom test functions.
- client/.babelrc: babel config for react js files.
- client/.browserslistrc: browsers list config.
- client/.eslintignore: eslint config for ignoring scss files.
- client/.eslintrc: eslint config for linting js files.
- client/.prettierc: prettier config.
- client/.stylelintrc.json: stylelint config for linting scss files.
- client/jest.json: jest config.
</code></pre>
</details>
<br />

## API Configuration

<details>
<summary>Click to expand API configuration</summary>
<pre><code>
- controllers: express route controllers.
- database: mongoose connection to local mongodb.
- middlewares: express middlewares.
- models: mongoose models for a local mongodb.
- routes: express routes.
- seeds: mongo seed file.
- server: express configuration.
- utils: configurations for starting the server and running a test environment.
- app.js: API initialization configuration (registering babel for ES6 import/export syntax)
</code></pre>
</details>
<br />

## Packages Incorporated

If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/fullstack-mern-kit/issues">here</a>.

### Client

Click <a href="https://github.com/mattcarlotta/fullstack-mern-kit/blob/master/client/package.json#L70-L160">here</a> to see latest versions.

<details>
<summary>Click to expand brief overview of client packages</summary>
<pre><code>
- <a href="https://github.com/axios/axios">Axios</a>
- <a href="https://github.com/babel/babel">Babel</a>
- <a href="https://github.com/webpack-contrib/css-loader">CSS Loader</a>
- <a href="https://github.com/supasate/connected-react-router">Connected React Router</a>
- <a href="https://github.com/eslint/eslint/">Eslint</a>
- <a href="http://airbnb.io/enzyme/">Enzyme</a>
- <a href="https://github.com/smooth-code/error-overlay-webpack-plugin">Error Overlay Webpack Plugin</a>
- <a href="https://github.com/expressjs/express">Express</a>
- <a href="https://github.com/geowarin/friendly-errors-webpack-plugin">Friendly Errors Webpack Plugin</a>
- <a href="https://github.com/ReactTraining/history">History</a>
- <a href="https://github.com/typicode/husky">Husky</a>
- <a href="https://github.com/facebook/jest">Jest</a>
- <a href="https://github.com/lodash/lodash">Lodash</a>
- <a href="https://github.com/webpack-contrib/mini-css-extract-plugin">Mini CSS Extract Plugin</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
- <a href="https://github.com/facebook/prop-types">PropTypes</a>
- <a href="https://github.com/facebook/react">React</a>
- <a href="https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom">React Router Dom</a>
- <a href="https://github.com/reduxjs/redux">Redux</a>
- <a href="https://github.com/zalmoxisus/redux-devtools-extension">Redux DevTools Extension</a>
- <a href="https://redux-form.com/">Redux Form</a>
- <a href="https://github.com/reduxjs/redux-thunk">Redux Thunk</a>
- <a href="https://github.com/webpack-contrib/sass-loader">Sass Loader</a>
- <a href="https://stylelint.io/">Stylelint</a>
- <a href="https://github.com/kristerkari/stylelint-scss">Stylelint-SCSS</a>
- <a href="https://github.com/stylelint/stylelint-config-recommended">Stylelint-Config-Recommended</a>
- <a href="https://github.com/styled-components/styled-components">Stylized Components</a>
- <a href="https://github.com/webpack-contrib/style-loader">Style Loader</a>
- <a href="https://github.com/webpack/webpack">Webpack</a>
- <a href="https://www.npmjs.com/package/webpackbar">Webpackbar</a>
- <a href="https://github.com/webpack/webpack-dev-server">Webpack Dev Server (Hot Loaded)</a>
</code></pre>
</details>
<br />

### API

Click <a href="https://github.com/mattcarlotta/fullstack-mern-kit/blob/master/package.json#L78-L111">here</a> to see latest versions.

<details>
<summary>Click to expand brief overview of API packages</summary>
<pre><code>
- <a href="https://github.com/petkaantonov/bluebird">Bluebird</a>
- <a href="https://github.com/expressjs/body-parser">Body Parser</a>
- <a href="https://github.com/kimmobrunfeldt/concurrently">Concurrently</a>
- <a href="https://github.com/jarradseers/consign">Consign</a>
- <a href="https://github.com/expressjs/cors">CORS</a>
- <a href="http://expressjs.com/">Express</a>
- <a href="http://momentjs.com/">Moment</a>
- <a href="https://mongoosejs.com/">Mongoose</a>
- <a href="https://github.com/expressjs/morgan">Morgan</a>
- <a href="http://www.passportjs.org/">Passport</a>
- <a href="https://github.com/jaredhanson/passport-local">Passport Local</a>
- <a href="https://github.com/prettier/prettier">Prettier</a>
</code></pre>
</details>
<br />
