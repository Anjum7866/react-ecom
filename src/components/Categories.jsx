import React, { useState, useEffect } from 'react';
import axiosClient from '../axios';
import { Link } from 'react-router-dom';
import Products from './Products';

const Categories = ({ onCategoryClick, categoryId  }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);


  useEffect(() => {
    // Fetch random categories from the database
    axiosClient.get('/categories/random')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  return (
    <div>
      <div className="product-area section">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="section-title">
						<h2>Trending Item</h2>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<div className="product-info">
						<div className="nav-main">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
        {categories.map(category => (
          <li className="nav-item" key={category.id} onClick={() => onCategoryClick(category.id)}>
            {category.name}
          </li>
        ))}
      </ul>
							
						</div>
                        {selectedCategoryId && (
                  <Products categoryId={selectedCategoryId} />
                )}
					</div>
				</div>
			</div>
		</div>
</div>
     
    </div>
  );
};

export default Categories;
