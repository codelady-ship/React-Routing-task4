import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Product = () => {

  const url = "https://dummyjson.com/products"
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setProducts(data.products) 
    })
  }, [])

  return (
    <div className='product'>
      <h2> Product page </h2>
      <div className='productPage'>
        {
          products.map(({ id, title, thumbnail }) => {
            return (
              <div key={id}>
                <img src={thumbnail} alt={title} />
                <Link to={`/products/${id}`}>
                  {title}
                </Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Product
