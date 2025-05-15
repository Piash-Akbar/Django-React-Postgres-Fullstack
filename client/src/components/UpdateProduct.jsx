import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect, useCallback } from 'react';
import { Button, Form } from 'react-bootstrap';

const UpdateProduct = () => {

  const {id} = useParams();
  console.log(id);


  // const [product,setProduct] = useState({});

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  const updateProduct = async () => {
    try {
      
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('category', category);
      formData.append('description', description);
      if (image instanceof File) {
        formData.append('image', image);
      }
      
      // formData.append('image', image);
      const response = await axios.put(`http://127.0.0.1:8000/api/${id}/`, formData);
      console.log(response.data);
      setLoading(false);
      history('/');
    }
    catch (error) {
      console.error("Error updating product details:", error);
    }
  }

  const getIndividualProduct = useCallback(async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/${id}/`);
      console.log('ksbfuysdbc',response.data);
      setName(response.data.name);
      setPrice(response.data.price);
      setCategory(response.data.category);
      setDescription(response.data.description);
      setImage(response.data.image);
      // setProduct(response.data);

      loading && setLoading(false);

    } catch (error) {
      console.error("Error fetching product details:", error);
    }

  },[loading,id]);

  useEffect(() => {
    getIndividualProduct();
  },[getIndividualProduct] );

  return (
    <div>
        <h1>UpdateProduct</h1>

        {/* <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <input type="text" placeholder={name} value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder={price} onChange={(e) => setPrice(e.target.value)} />
        <input type="text" placeholder={category} onChange={(e) => setCategory(e.target.value)} />
        <input type="text" placeholder={description} onChange={(e) => setDescription(e.target.value)} />
        <button onClick={updateProduct}>Update</button> */}



        <Form>
        <Form.Group controlId="formImage" className="mb-3">
            {typeof image === 'string' && (
            <div className="mt-2">
              <img src={image} alt="Current" width="150" />
            </div>
          )}
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" accept="image/*"  onChange={(e) => setImage(e.target.files[0])} />
        </Form.Group>


        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)}/>
        </Form.Group>
    </Form>
    {  <Button variant="primary" onClick={updateProduct} >Update</Button> }
      </div>
    
  )
}

export default UpdateProduct