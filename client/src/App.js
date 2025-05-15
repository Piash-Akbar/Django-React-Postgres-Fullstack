import './App.css';
import ShowProducts from './components/ShowProducts';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import ProductDetails from './components/ProductDetails';
import DeleteProduct from './components/DeleteProduct';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<ShowProducts />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update/:id" element={<UpdateProduct />} />
          <Route path="/:id" element={<ProductDetails />} />
          <Route path='/delete/:id' element={<DeleteProduct />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
