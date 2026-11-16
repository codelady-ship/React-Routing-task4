import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useTitle from '../../../useTitle';

const URL = 'https://dummyjson.com/products/';

const ProductDetail = () => {
  const { id } = useParams(); // id from the URL, e.g. /product/5
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useTitle(product?.title ?? 'Product');

  useEffect(() => {
    let ignore = false; // skip stale responses when the id changes quickly
    setLoading(true);
    setError(null);
    setProduct(null);
    axios
      .get(URL + id)
      .then(({ data }) => !ignore && setProduct(data))
      .catch((err) => {
        if (ignore) return;
        setError(err.response?.status === 404 ? `There is no product with id ${id}.` : 'The product could not be loaded.');
      })
      .finally(() => !ignore && setLoading(false));
    return () => {
      ignore = true;
    };
  }, [id]);

  return (
    <section className="page detail">
      <Link to="/product" className="back">← All products</Link>
      {loading && <p role="status">Loading product...</p>}
      {error && (
        <>
          <h1>Product not found</h1>
          <p role="alert" className="error">{error}</p>
        </>
      )}
      {product && (
        <article className="detail-body">
          <img src={product.thumbnail} alt={product.title} width="300" height="300" />
          <div>
            <h1>{product.title}</h1>
            <p className="muted">Product ID: {product.id} · {product.category}</p>
            <p>{product.description}</p>
            <p className="price">${product.price}</p>
          </div>
        </article>
      )}
    </section>
  );
};

export default ProductDetail;
