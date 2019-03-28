import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';

import Home from 'pages/Home';
import Message from 'containers/PopMessage';
import NotFound from 'pages/NotFound';
import ShowUsers from 'pages/ShowUsers';

const config = {
  htmlAttributes: { lang: 'en' },
  title: 'Fullstack-MERN-Kit',
  titleTemplate: 'Fullstack-MERN-Kit - %s',
  meta: [
    {
      name: 'description',
      content: 'The best MERN starter boilerplate in the world.',
    },
  ],
};

const Routes = () => (
  <div>
    <Message />
    <Helmet {...config} />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={ShowUsers} />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default Routes;
