import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../useTitle';

const Home = () => {
  useTitle();

  return (
    <section className="page home">
      <h1>RouteShop</h1>
      <p className="lead">
        A small multi-page React app that shows how client-side routing works. Browse a product catalogue, open a
        product by its id in the URL, and see a list of users, all without a full page reload.
      </p>
      <div className="cards">
        <Link to="/product" className="card">
          <h2>Products</h2>
          <p>30 products loaded from the DummyJSON API. Click one to open <code>/product/:id</code>.</p>
        </Link>
        <Link to="/users" className="card">
          <h2>Users</h2>
          <p>Sample user profiles with name, email, company and city.</p>
        </Link>
        <Link to="/about" className="card">
          <h2>About</h2>
          <p>What this project practises and how it is built.</p>
        </Link>
      </div>
    </section>
  );
};

export default Home;
