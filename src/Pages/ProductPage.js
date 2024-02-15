import React, {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import axiosClient from '../axios'
import Loader from '../menu/Loader';
import PageComponent from '../components/PageComponent';
import "../css/Products.css"

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiosClient.get('/products')
      .then(({ data }) => {
        console.log(data.products);
        setLoading(false);
        setProducts(data.products);
      })
      .catch(error => {
        setLoading(false);
        console.error('Error fetching product data:', error);
      });
  }, [])
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
									<div className="">
                  <div className="card-container" style={{justifyContent:'center'}}>
          {products.map(product => (
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
  )
}

export default ProductPage