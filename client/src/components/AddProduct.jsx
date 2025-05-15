import React from 'react'
import { useState } from 'react'
// import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const AddProduct = () => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [loading, setLoading] = useState(true);
    const history = useNavigate();

    console.log(name);
    console.log(price);
    console.log(category);
    console.log(description);

    const addProduct = async () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('description', description);
        if (image instanceof File) {
            formData.append('image', image);
          }
          
        // formData.append('image', image);
        const response = await axios.post('http://127.0.0.1:8000/api/', formData);
        console.log(response.data);
        setLoading(false);
        history('/');
    }


  return (
    <div>
        <h1>AddProduct</h1>
    <Form>
        <Form.Group controlId="formImage" className="mb-3">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" onChange={(e) => setImage(e.target.files[0])} />
        </Form.Group>


        
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control type="text" placeholder="Price" onChange={(e) => setPrice(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(e) => setDescription(e.target.value)}/>
        </Form.Group>
    </Form>
    {loading &&  <Button variant="primary" onClick={addProduct} >Submit</Button> }
    </div>
  )
}

export default AddProduct