import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function ProductCart() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost/api/products.php");
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        if (data.productData && Array.isArray(data.productData)) {
          setProducts(data.productData);
          setLoading(false);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    getProduct();
  }, []);
  
  
  

  const handleCardClick = (productId) => {
    navigate(`/cart/${productId}`);
  };

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        Array.isArray(products) && products.length > 0 ? (
          products.map((product,index) => (
            <div key={index} className="card m-2 mt-5 cursor-pointer" style={{ width: 300 }} role="button" onClick={() => handleCardClick(product.p_id)}>
              <div className="imgs">
                <img
                  src={`http://localhost/api/images/${product.p_img}`}
                  height={150}
                  width={180}
                  alt={product.p_name}
                  className="borderradious"
                />
              </div>
              <div className="card-body">
                <div className="card-title">
                  <h5 className="card-title">{product.p_name}</h5>
                  <h6>Price: {`₹${product.p_price}`}</h6>
                </div>
                <div className="mb-3">
                  {product.p_stock > 0 ? (
                    <button className="btn btn-success">Available</button>
                  ) : (
                    <p className="text-danger">Out of stock</p>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )
      )}
    </>
  );
}
