import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../Pages/About';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import ProductDetail from '../Pages/ProductDetail';
import Users from '../Pages/Users';
import NotFound from '../Pages/NotFound';

const routes = [
  { id: 0, path: '/', element: <Home /> },
  { id: 1, path: '/about', element: <About /> },
  { id: 2, path: '/product', element: <Product /> },
  { id: 3, path: '/product/:id', element: <ProductDetail /> },
  { id: 4, path: '/users', element: <Users /> },
  { id: 5, path: '*', element: <NotFound /> },
];

const Webroutes = () => (
  <Routes>
    {routes.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
    ))}
  </Routes>
);

export default Webroutes;
