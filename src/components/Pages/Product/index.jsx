import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../useTitle';

const URL = 'https://dummyjson.com/products?limit=30&select=title,thumbnail,price';

const Product = () => {
  useTitle('Products');
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error

  useEffect(() => {
    axios
      .get(URL)
      .then(({ data }) => {
        setProducts(data.products);
        setStatus('ready');
      })
      .catch(() => setStatus('error'));
  }, []);

  return (
    <section className="page product">
      <h1>Products</h1>
      {status === 'loading' && <p role="status">Loading products...</p>}
      {status === 'error' && <p role="alert" className="error">Products could not be loaded. Please try again later.</p>}
      {status === 'ready' && (
        <ul className="productPage">
          {products.map(({ id, title, thumbnail, price }) => (
            <li key={id}>
              <Link to={`/product/${id}`}>
                <img src={thumbnail} alt={title} width="120" height="120" loading="lazy" />
                <span className="title">{title}</span>
                <span className="price">${price}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Product;
