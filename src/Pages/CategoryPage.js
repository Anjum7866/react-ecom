import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axiosClient from '../axios';
import PageComponent from '../components/PageComponent';
import Loader from '../menu/Loader';

const CategoryPage = () => {
  const { category_name } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosClient.get(`/products/category/${category_name}`)
      .then(({ data }) => {
        console.log(data.products);
        setCategoryProducts(data.products);
        setLoading(false);
       
      })
      .catch(error => {
        setLoading(false);
        console.error('Error fetching product data:', error);
      });
  }, [category_name])
  
  return (
    <PageComponent >
    {loading && <div className="flex justify-center"><Loader/></div>}
		{!loading && (
<>
       
        <div className="product-area section">
		<div className="container">
        <div className="row">
				<div className="col-12">
					<div className="product-info">
					
							<div className="tab-pane fade show active" id="man" role="tabpanel">
								<div className="tab-single">
									<div className="row">
                  <div className="card-container">
          {categoryProducts.map(product => (
            <div className="card" key={product.id}>
              <img src={product.thumbnail} alt={product.title} />
              <div className="card-body">
              <Link to={`/product-details/${product.id}`}>
                <h3>{product.title}</h3>
                </Link>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
                 

										
										
									</div>
								</div>
							</div>
						
					</div>
				</div>
			</div>
      </div>
      </div>
   
    </>
    )}
    </PageComponent>
   
       
     
  );
};

export default CategoryPage;
