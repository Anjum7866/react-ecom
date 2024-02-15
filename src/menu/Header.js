import React from 'react'
import myLogo from '../images/logo.png';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <>
    <header className="header shop">
		<div className="topbar">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-12 col-12">
						<div className="top-left">
							<ul className="list-main">
								<li><i className="ti-headphone-alt"></i> +060 (800) 801-582</li>
								<li><i className="ti-email"></i> support@shophub.com</li>
							</ul>
						</div>
					</div>
					<div className="col-lg-8 col-md-12 col-12">
						<div className="right-content">
							<ul className="list-main">
								<li><i className="ti-location-pin"></i> Store location</li>
								<li><i className="ti-alarm-clock"></i> <Link to="/">Daily deal</Link></li>
								<li><i className="ti-user"></i> <Link to="/">My account</Link></li>
								<li><i className="ti-power-off"></i><Link to="/login">Login</Link></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="middle-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-12">
						<div className="logo">
						<Link to="/" >
						<img src={myLogo} alt="logo"/>
						</Link>
							
						</div>
						<div className="search-top">
							<div className="top-search"><Link to="/"><i className="ti-search"></i></Link></div>
							<div className="search-top">
								<form className="search-form">
									<input type="text" placeholder="Search here..." name="search"/>
									<button value="search" type="submit"><i className="ti-search"></i></button>
								</form>
							</div>
						</div>
						<div className="mobile-nav"></div>
					</div>
					<div className="col-lg-8 col-md-7 col-12">
						<div className="search-bar-top">
							<div className="search-bar">
								<select>
									<option selected="selected">All Category</option>
									<option>watch</option>
									<option>mobile</option>
									<option>kid’s item</option>
								</select>
								<form>
									<input name="search" placeholder="Search Products Here....." type="search"/>
									<button className="btnn"><i className="ti-search"></i></button>
								</form>
							</div>
						</div>
					</div>
					<div className="col-lg-2 col-md-3 col-12">
						<div className="right-bar">
							<div className="sinlge-bar">
							<Link to="/"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
							</div>
							<div className="sinlge-bar">
							<Link to="/"><i className="fa fa-user-circle-o" aria-hidden="true"></i></Link>
							</div>
							<div className="sinlge-bar shopping">
							<Link to="/"><i className="ti-bag"></i> <span className="total-count">2</span></Link>
								<div className="shopping-item">
									<div className="dropdown-cart-header">
										<span>2 Items</span>
										<Link to="/cart">View Cart</Link>
									</div>
									<ul className="shopping-list">
										<li>
										<Link to="/"><i className="fa fa-remove"></i></Link>
										<Link to="/"><img src="https://via.placeholder.com/70x70" alt="#"/></Link>
											<h4><Link to="/">Woman Ring</Link></h4>
											<p className="quantity">1x - <span className="amount">$99.00</span></p>
										</li>
										<li>
										<Link to="/"><i className="fa fa-remove"></i></Link>
										<Link to="/"><img src="https://via.placeholder.com/70x70" alt="#"/></Link>
											<h4><Link to="/">Woman Necklace</Link></h4>
											<p className="quantity">1x - <span className="amount">$35.00</span></p>
										</li>
									</ul>
									<div className="bottom">
										<div className="total">
											<span>Total</span>
											<span className="total-amount">$134.00</span>
										</div>
										<Link to="/checkout" className="btn animate">
											Checkout
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="header-inner">
			<div className="container">
				<div className="cat-nav-head">
					<div className="row">
						
						<div className="col-lg-12 col-12">
							<div className="menu-area">
								<nav className="navbar navbar-expand-lg">
									<div className="navbar-collapse">	
										<div className="nav-inner">	
											<ul className="nav main-menu menu navbar-nav">
											<li>
												<NavLink exact to="/" className="btn animate" activeClassName="active">
												Home
												</NavLink>
											</li>
											<li>
												<NavLink to="/product" activeClassName="active">
												Product
												</NavLink>
											</li>
											<li>
												<NavLink to="/service" activeClassName="active">
												Service
												</NavLink>
											</li>
											<li>
												<NavLink to="/shop" activeClassName="active">
												Shop<i className="ti-angle-down"></i><span className="new">New</span>
												</NavLink>
												<ul className="dropdown">
												<li><NavLink to="/cart" activeClassName="active">Cart</NavLink></li>
												<li><NavLink to="/checkout" activeClassName="active">Checkout</NavLink></li>
												</ul>
											</li>
											<li>
												<NavLink to="/pages" activeClassName="active">
												Pages
												</NavLink>
											</li>
											<li>
												<NavLink to="/blog" activeClassName="active">
												Blog<i className="ti-angle-down"></i>
												</NavLink>
												<ul className="dropdown">
												<li><NavLink to="/blog-single" activeClassName="active">Blog Single Sidebar</NavLink></li>
												</ul>
											</li>
											<li>
												<NavLink to="/contact" className="btn animate" activeClassName="active">
												Contact Us
												</NavLink>
											</li>
											<li>
												<NavLink to="/about" className="btn animate" activeClassName="active">
												About
												</NavLink>
											</li>
										
												</ul>
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
      
    </>
  )
}

export default Header
