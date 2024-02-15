// ProductDetails.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ProductDetails.css";
import Loader from '../menu/Loader';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    // Fetch product details based on the product id
    fetch(`https://dummyjson.com/products/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduct(data);
        setSelectedImage(data.thumbnail); // Set the default selected image to the main image
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching product details:', error);
        setLoading(false);
      });
  }, [id]);

  const handleThumbnailClick = (thumbnail) => {
    // Update the selected image when a thumbnail is clicked
    setSelectedImage(thumbnail);
  };

  return (
    <div className="product-details-container">
      {loading ? (
        <Loader/>
      ) : (
        <div className="product-details">
          <h2>{product.title}</h2>
          <img className="product-image" src={selectedImage} alt={product.title} />
          <p className="product-description">{product.description}</p>
          <p className="product-price">Price: ${product.price}</p>

          <div className="thumbnail-container">
            {product.images.map((thumbnail, index) => (
              <img
                key={index}
                className={`thumbnail ${thumbnail === selectedImage ? 'selected' : ''}`}
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(thumbnail)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
