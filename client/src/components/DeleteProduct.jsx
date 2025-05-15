import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeleteProduct = () => {
    const {id} = useParams();
    const history = useNavigate();

    useEffect(() => {
        const deleteProduct = async () => {
            await axios.delete(`http://127.0.0.1:8000/api/${id}/`);
            history('/');
        }
        deleteProduct();
    },[id,history]);


  return (
    <div>
        <h1>DeleteProduct</h1>

    </div>
  )
}

export default DeleteProduct