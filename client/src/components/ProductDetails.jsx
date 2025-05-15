import React, { useCallback, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ProductDetails = () => {

  const [product,setProduct] = useState({});
  
  const {id} = useParams();
  console.log(id);


  const getProductDetails = useCallback( async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
      console.log('ksbfuysdbc',response.data);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  },[id]);

  useEffect(() => {
    getProductDetails();
  },[getProductDetails] );

  return (
    <div>
        <h1>ProductDetails</h1>
        <div className="details">
          <img src={product.image} alt="" height={"300px"} />
          <h3>{product.name}</h3>
          <h4><b>Price</b>{product.price} Taka</h4>
          <h5>{product.category}</h5>
          <p>{product.description}</p>
        </div>
        <Button variant="primary" href={`/update/${product.id}`}>Update</Button>
        <Button variant="danger" href={`/delete/${product.id}`}>Delete</Button>
    </div>
  )
}

export default ProductDetails