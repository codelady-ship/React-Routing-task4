import React from 'react';

const Footer = () => (
  <footer className="footer">
    <p>
      © {new Date().getFullYear()} RouteShop · A React Router practice project. Product and user data come from{' '}
      <a href="https://dummyjson.com" target="_blank" rel="noreferrer">DummyJSON</a>.
    </p>
    <p>
      <a href="https://github.com/codelady-ship/React-Routing-task4" target="_blank" rel="noreferrer">Source on GitHub</a>
    </p>
  </footer>
);

export default Footer;
