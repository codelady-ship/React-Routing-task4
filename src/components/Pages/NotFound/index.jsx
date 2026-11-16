import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../useTitle';

const NotFound = () => {
  useTitle('Page not found');

  return (
    <section className="page notfound">
      <h1>404: page not found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="button">Back to home</Link>
    </section>
  );
};

export default NotFound;
