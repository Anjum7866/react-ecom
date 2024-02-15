import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import axiosClient from '../axios';
import { Link } from 'react-router-dom';


function Products({ categoryId }) {
  const [products, setProducts] = useState([]);
  const backendBaseUrl = 'http://localhost/Ecommerce-react/storage/app/public/';

  useEffect(() => {
    // Fetch products for the selected category
    if (categoryId) {
      axiosClient.get(`/products?category=${categoryId}`)
        .then(response => {
          console.log(response.data.products);
          setProducts(response.data.products);
        })
        .catch(error => console.error('Error fetching products:', error));
    }
  }, [categoryId]);

  return (
    <div>
      <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="man" role="tabpanel">
          <div className="tab-single">
            <div className="row">
              {products.map(product => (
                <div key={product.id} className="col-xl-3 col-lg-4 col-md-4 col-12">
                  <div className="single-product">
                    <div className="product-img">
                      <Link to="/">
                        {product.product_images.map(image => (
                          <li key={image.id}>
                            <img className="default-img" src={backendBaseUrl + image.image_path} alt={`Product Image ${image.id}`} />
                          </li>
                        ))}
                        {/* <img className="default-img" src={product2} alt="#"/>
                    <img className="hover-img" src={product2} alt="#"/> */}
                      </Link>
                      <div className="button-head">
                        <div className="product-action">
                          <Link to="/" data-toggle="modal" data-target="#exampleModal" title="Quick View"><i className=" ti-eye"></i><span>Quick Shop</span></Link>
                          <Link to="/" title="Wishlist"><i className=" ti-heart "></i><span>Add to Wishlist</span></Link>
                          <Link to="/" title="Compare"><i className="ti-bar-chart-alt"></i><span>Add to Compare</span></Link>
                        </div>
                        <div className="product-action-2">
                          <Link to="/" title="Add to cart">Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="product-content">
                      <h3><Link to="/" href="product-details.html">{product.name}</Link></h3>
                      <div className="product-price">
                        <span>{product.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
                // <li>
                //   <h3>{product.name}</h3>
                //   <p>{product.description}</p>
                //   <p>Price: {product.price}</p>
                //   <p>Total Quantity: {product.total_quantity}</p>
                // </li>
              ))}



            </div>
          </div>
        </div>

      </div>
     
    </div>
  );
}

export default Products;
