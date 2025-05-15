// import React, { use } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard/ProductCard';

const ShowProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const getProducts = async () => {
        const response =await axios.get('http://127.0.0.1:8000/api/'); 
        setProducts(response.data);
        console.log(response.data);
        setLoading(false);
    }
    useEffect(() => {
        getProducts();
    },[]);


  return (
    <div>
        <h1>Products</h1>
        {loading && <p>Loading...</p>}
        <div className="card" style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap',justifyContent: 'space-around', overflow: 'scroll'}}>

        {products.map((product) => (
            <ProductCard key={product.id} id={product.id} name={product.name} description={product.description} image={product.image} />
        ))
        }
        </div>

    </div>
  )
}

export default ShowProducts