import '../App.css';
import axiosClient from '../axios';
import '../css/bootstrap.css';
import '../css/magnific-popup.min.css';
import '../css/font-awesome.css';
import '../css/jquery.fancybox.min.css';
import '../css/themify-icons.css';
import '../css/niceselect.css';
import '../css/animate.css';
import '../css/flex-slider.min.css';
import '../css/owl-carousel.css';
import '../css/slicknav.min.css';
import '../css/reset.css';
import '../css/responsive.css';
import product from '../images/product.jpg'
import product2 from '../images/product2.jpg'
import product66 from '../images/product66.jpg'
import top from '../images/top.png'
import product14 from '../images/product14.jpg'
import PANT1 from '../images/PANT1.png'
import product11 from '../images/product11.jpg'
import girl from '../images/girl.png'
import shoe from '../images/shoe.jpg'
import product15 from '../images/product15.png'
import dress from '../images/dress.png'
import { Link } from 'react-router-dom';
import PageComponent from '../components/PageComponent';
import { useState, useEffect } from 'react';
import Loader from '../menu/Loader';
import Banner from "../images/banner-1.jpg"

function Home() {
	const [loading, setLoading] = useState(true);
	const [email, setEmail] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
	const [categories, setCategories] = useState([]);
	const [categoryProducts, setCategoryProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const handleInputChange = (e) => {
		setEmail(e.target.value);
	  };
	
	  const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
		  const response = await axiosClient.post('/subscribe', { email });
		  console.log(response.data);
		  setLoading(false);
		  setSuccessMessage('Subscription successful.');
		  setErrorMessage('');
		  
		} catch (error) {
		  setLoading(false);
		  if (error.response.status === 422) {
			setErrorMessage(error.response.data.error.email[0]);
		  } else {
			setErrorMessage('An error occurred while subscribing.');
		  }
		  setSuccessMessage('');
		}
	  };
	  
	  
	useEffect(() => {
		// Fetch random categories
		axiosClient.get('/products/categories')
		  .then(({ data }) => {
			// Shuffle the array to get random categories
			const shuffledCategories = data.sort(() => 0.5 - Math.random()).slice(0, 5);
			setCategories(shuffledCategories);
			if (shuffledCategories.length > 0) {
				setSelectedCategory(shuffledCategories[0]);
			  }
		  })
		  .catch(error => {
			console.error('Error fetching categories:', error);
		  });
	  }, []);
	
	  const fetchCategoryProducts = (categoryName) => {
		// Fetch products for a specific category
		axiosClient.get(`/products/category/${categoryName}`)
		  .then(({ data }) => {
			setCategoryProducts(data.products.slice(0, 4)); 
			
			setLoading(false);
		  })
		  .catch(error => {
			setLoading(false);
			console.error('Error fetching product data:', error);
		  });
	  };
	  useEffect(() => {
		if (selectedCategory) {
		  fetchCategoryProducts(selectedCategory);
		}
	  }, [selectedCategory]);
	  const handleCategoryClick = (category) => {
		
		setSelectedCategory(category);
		
	  };
	return (
	  <PageComponent >
		{loading && <div className="flex justify-center"><Loader/></div>}
		{!loading && (

<>

<section className="hero-slider">
	<div className="single-slider">
		<div className="container">
			<div className="row no-gutters">
				<div className="col-lg-9 offset-lg-3 col-12">
					<div className="text-inner">
						<div className="row">
							<div className="col-lg-7 col-12">
								<div className="hero-text">
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>


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
								<li key={category} className="nav-item">
									<Link
									className={`nav-link ${selectedCategory === category ? 'active' : ''}`}
									onClick={() => handleCategoryClick(category)}
									role="tab"
									>
									{category}
									</Link>
								</li>
								))}
							</ul>
						</div>
						<div className="tab-content" id="myTabContent">			
							 <div className="tab-content" id="myTabContent">
							 	<div  className="tab-pane fade show active" role="tabpanel">
									<div className="tab-single">
									<div className="row">
															
									{categoryProducts.map(product => (
										<div  className="col-xl-3 col-lg-4 col-md-4 col-12">
										<div className="single-product">
											<div className="product-img">
												<Link to="/" >
												<img className="default-img" src={product.thumbnail} alt={product.title} />
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
												<h3><Link to={`/product-details/${product.id}`}>{product.title}</Link></h3>
												<div className="product-price">
													<span>{product.price}</span>
												</div>
											</div>
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
</div>
<section className="cown-down">
	<div className="section-inner ">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-6 col-12 padding-right">
					<div className="image">
						<img src={Banner} alt="#"/>
					</div>	
				</div>	
				<div className="col-lg-6 col-12 padding-left">
					<div className="content">
						<div className="heading-block">
							<p className="small-title">Deal of day</p>
							<h3 className="title">Beatutyful dress for women</h3>
							<p className="text">Suspendisse massa leo, vestibulum cursus nulla sit amet, frungilla placerat lorem. Cars fermentum, sapien. </p>
							<h1 className="price">$1200 <s>$1890</s></h1>
							<div className="coming-time">
								<div className="clearfix" data-countdown="2021/02/30"></div>
							</div>
						</div>
					</div>	
				</div>	
			</div>
		</div>
	</div>
</section>
<section className="shop-services section home">
	<div className="container">
		<div className="row">
			<div className="col-lg-3 col-md-6 col-12">
				<div className="single-service">
					<i className="ti-rocket"></i>
					<h4>Free shiping</h4>
					<p>Orders over $100</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-12">
				<div className="single-service">
					<i className="ti-reload"></i>
					<h4>Free Return</h4>
					<p>Within 30 days returns</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-12">
				<div className="single-service">
					<i className="ti-lock"></i>
					<h4>Sucure Payment</h4>
					<p>100% secure payment</p>
				</div>
			</div>
			<div className="col-lg-3 col-md-6 col-12">
				<div className="single-service">
					<i className="ti-tag"></i>
					<h4>Best Peice</h4>
					<p>Guaranteed price</p>
				</div>
			</div>
		</div>
	</div>
</section>
<section className="shop-newsletter section">
	<div className="container">
		<div className="inner-top">
			<div className="row">
				<div className="col-lg-8 offset-lg-2 col-12">
					<div className="inner">
						<h4>Newsletter</h4>
						<p> Subscribe to our newsletter and get <span>10%</span> off your first purchase</p>
						<form onSubmit={handleSubmit} className="newsletter-inner">
							<input type="email" value={email} onChange={handleInputChange} placeholder="Your email address" required=""/>
							<button className="btn" type="submit">Subscribe</button>
						</form>
						{errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog">
		<div className="modal-dialog" role="document">
			<div className="modal-content">
				<div className="modal-header">
					<button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className="ti-close" aria-hidden="true"></span></button>
				</div>
				<div className="modal-body">
					<div className="row no-gutters">
						<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
							
								<div className="product-gallery">
									<div className="quickview-slider-active">
										<div className="single-slider">
											<img src="https://via.placeholder.com/569x528" alt="#"/>
										</div>
										<div className="single-slider">
											<img src="https://via.placeholder.com/569x528" alt="#"/>
										</div>
										<div className="single-slider">
											<img src="https://via.placeholder.com/569x528" alt="#"/>
										</div>
										<div className="single-slider">
											<img src="https://via.placeholder.com/569x528" alt="#"/>
										</div>
									</div>
								</div>
									</div>
						<div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
							<div className="quickview-content">
								<h2>Flared Shift Dress</h2>
								<div className="quickview-ratting-review">
									<div className="quickview-ratting-wrap">
										<div className="quickview-ratting">
											<i className="yellow fa fa-star"></i>
											<i className="yellow fa fa-star"></i>
											<i className="yellow fa fa-star"></i>
											<i className="yellow fa fa-star"></i>
											<i className="fa fa-star"></i>
										</div>
										<Link to="/"> (1 customer review)</Link>
									</div>
									<div className="quickview-stock">
										<span><i className="fa fa-check-circle-o"></i> in stock</span>
									</div>
								</div>
								<h3>$29.00</h3>
								<div className="quickview-peragraph">
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste laborum ad impedit pariatur esse optio tempora sint ullam autem deleniti nam in quos qui nemo ipsum numquam.</p>
								</div>
								<div className="size">
									<div className="row">
										<div className="col-lg-6 col-12">
											<h5 className="title">Size</h5>
											<select>
												<option selected="selected">s</option>
												<option>m</option>
												<option>l</option>
												<option>xl</option>
											</select>
										</div>
										<div className="col-lg-6 col-12">
											<h5 className="title">Color</h5>
											<select>
												<option selected="selected">orange</option>
												<option>purple</option>
												<option>black</option>
												<option>pink</option>
											</select>
										</div>
									</div>
								</div>
								<div className="quantity">
									<div className="input-group">
										<div className="button minus">
											<button type="button" className="btn btn-primary btn-number" disabled="disabled" data-type="minus" data-field="quant[1]">
												<i className="ti-minus"></i>
											</button>
										</div>
										<input type="text" name="quant[1]" className="input-number"  data-min="1" data-max="1000" value="1"/>
										<div className="button plus">
											<button type="button" className="btn btn-primary btn-number" data-type="plus" data-field="quant[1]">
												<i className="ti-plus"></i>
											</button>
										</div>
									</div>
								</div>
								<div className="add-to-cart">
								<Link to="/" className="btn">Add to cart</Link>
								<Link to="/"className="btn min"><i className="ti-heart"></i></Link>
								<Link to="/" className="btn min"><i className="fa fa-compress"></i></Link>
								</div>
								<div className="default-social">
									<h4 className="share-now">Share:</h4>
									<ul>
										<li><Link to="/"className="facebook" ><i className="fa fa-facebook"></i></Link></li>
										<li><Link to="/" className="twitter" ><i className="fa fa-twitter"></i></Link></li>
										<li><Link to="/" className="youtube" ><i className="fa fa-pinterest-p"></i></Link></li>
										<li><Link to="/"className="dribbble"><i className="fa fa-google-plus"></i></Link></li>
									</ul>
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
}

export default Home;
