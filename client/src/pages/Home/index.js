import React from 'react';
import logo from 'images/mernLogo.png';
import { app, logoContainer, logoStyle, title } from './styles.scss';

const Home = () => (
  <div className={app}>
    <div className={logoContainer}>
      <img className={logoStyle} src={logo} alt="" />
      <h1 className={title}>Fullstack M.E.R.N Kit</h1>
      <h1 className={title}>Edit client/src and save to reload.</h1>
    </div>
  </div>
);

export default Home;
