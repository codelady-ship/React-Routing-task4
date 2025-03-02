import React from 'react';
import About from "../Pages/About";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import ProductDetail from "../Pages/ProductDetail";
import Users from "../Pages/Users"
import { Route, Routes } from 'react-router'; 

const Webroutes = () => {
  const routes=[
    {id:0, path:'/' ,element:<Home/>},
    {id:1, path:'/about' , element:<About/>},
    {id:2, path:'/product' , element:<Product/>},
    {id:3, path:'/users' , element:<Users/>},
    {id:4, path: '/product/:id', element: <ProductDetail/> },
   ];
  return (
      <Routes>
       {
        routes.map(({ id,path,element })=>{
          return(
          <Route  key ={id} path={path} element={element} />
          
        )
        })
       }
      </Routes>

  );
};

export default Webroutes;
