import React, { useState } from 'react';

const SellerDashboard = () => {
  const [products, setProducts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    // Add more fields as needed
  });

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    setProducts([...products, newProduct]);
    setNewProduct({
      name: '',
      price: '',
      // Reset other fields as needed
    });
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Seller Dashboard</h1>

      <button onClick={() => setModalOpen(true)}>Add Product</button>

      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.name}</h3>
          <p>Price: {product.price}</p>
          {/* Render other product details as needed */}
        </div>
      ))}

      {modalOpen && (
        <div>
          <h2>Add Product</h2>
          <form>
            <label>
              Product Name:
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Price:
              <input
                type="text"
                name="price"
                value={newProduct.price}
                onChange={handleInputChange}
              />
            </label>
            <br />
            {/* Add more form fields as needed */}
            <button type="button" onClick={handleAddProduct}>
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default SellerDashboard;
