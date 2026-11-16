import React from 'react';
import useTitle from '../../../useTitle';

const About = () => {
  useTitle('About');

  return (
    <section className="page about">
      <h1>About this project</h1>
      <p className="lead">
        RouteShop is a practice project for <span translate="no">React Router</span>. It focuses on moving between
        pages, reading values from the URL and loading data for each page.
      </p>
      <h2>What it covers</h2>
      <ul className="list">
        <li><code>BrowserRouter</code> with a <code>basename</code>, so the app works under a GitHub Pages sub-path.</li>
        <li>A route table rendered with <code>Routes</code> and <code>Route</code>, plus a catch-all 404 page.</li>
        <li><code>NavLink</code> to highlight the active page in the menu.</li>
        <li>A dynamic route, <code>/product/:id</code>, read with <code>useParams</code>.</li>
        <li>Loading and error states while data is fetched from an API.</li>
      </ul>
      <h2>Built with</h2>
      <p>
        <span translate="no">React</span>, <span translate="no">React Router</span>, <span translate="no">Axios</span>{' '}
        and <span translate="no">Vite</span>. Data comes from the free <span translate="no">DummyJSON</span> API.
      </p>
    </section>
  );
};

export default About;
