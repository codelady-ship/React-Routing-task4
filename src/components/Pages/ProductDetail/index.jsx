import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router';

const ProductDetail = () => {

const url = "https://dummyjson.com/products/";

const [product, setProduct] = useState({});

const {id} = useParams();// URL-dən id almaq

useEffect(() => {
    axios.get(url+id).then(({ data }) => {
      setProduct(data) 
    })
  }, [id])// id dəyişdikdə məlumatı yeniləyirik
 
  // Məhsul olmadqda "Loading..." 
  if (product === null) {
    return <div>Loading...</div>;
 }
  return (
    <div className='detail'>
      <img src={product?.thumbnail} />
      <h1>Product ID: {product?.id}</h1>
      <h2>{product?.title}</h2>  {/*sorgu gondemek*/ }
      <p><strong>Product  description :</strong> {product?.description}</p>
      <p><strong>Price:</strong> ${product?.price}</p>
    </div>
  )
}

export default ProductDetail
