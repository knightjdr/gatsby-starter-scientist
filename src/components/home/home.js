import React from 'react';

import About from './about/about-container';
import Landing from './landing/landing-container';

import './home.css';

const Home = () => (
  <>
    <Landing />
    <div className="home__inner">
      <About />
    </div>
  </>
);

export default Home;
