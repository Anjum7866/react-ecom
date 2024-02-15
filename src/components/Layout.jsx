import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import myLogo from '../images/logo.png';
import { Link, NavLink, Outlet , useLocation } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios";
import { useEffect } from "react";
import Toast from "./Toast";
import Footer from "./../menu/Footer";
import '../App.css';
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


export default function Layout() {
	const { currentUser, userToken } =
    useStateContext();
	const location = useLocation();
	const [categories, setCategories] = useState([]);

  const isLinkActive = (pathname) => {
    return location.pathname === pathname;
  };

	
	  
	  useEffect(() => {
		axiosClient.get('/products/categories')
		.then(({ data }) => {
		  console.log(data);
		  setCategories(data);
		})
		.catch(error => {
		  console.error('Error fetching product data:', error);
		});
		
	  }, [])
	  
	
	
  
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
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
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="middle-inner">
			<div className="container">
				<div className="row">
					<div className="col-lg-2 col-md-2 col-12" style={{
						textAlign:"end"
					}}>
						<div className="logo">
						<Link to="/" >
						<img src={myLogo} alt="logo"/>
						</Link>
							
						</div>
						
						<div className="mobile-nav">
						<div  className="hidden justify-end md:order-last"  style={{ justifyContent: 'flex-end' }}>
                  <Disclosure.Button className="text-white bg-dark p-2 focus:outline-none">
                    <i className="ti-menu text-2xl"></i>
                  </Disclosure.Button>
                  <Disclosure.Panel className="bg-dark">
				  <div  style={{ display: 'grid', placeItems: 'center' }}>
					<NavLink
                        to="/"
                        className={`text-white  p-2 ${isLinkActive('/') ? 'bg-gray-700' : ''}`}
                      >
                        Home
                      </NavLink>
                      <NavLink
                        to="/product"
                        className={`text-white  p-2 ${isLinkActive('/product') ? 'bg-gray-700' : ''}`}
                      >
                        Product
                      </NavLink>
                      <Disclosure>
                        {({ open }) => (
                          <>
						 
                      
                            <Disclosure.Button
							style={{ backgroundColor: '', border: 'none' }}
                            
								 className={`text-white p-2  border-dark bg-dark`}>
                              Categories <i className="ti-angle-down"></i>
                            </Disclosure.Button>
                            <Disclosure.Panel className="bg-gray-700">
                              <ul className="list-none p-0 bg-dark text-center">
							 
                                {categories.map(category => (
                                  <li
                                    key={category.id}
                                    className={`text-white p-2 ${isLinkActive(`/categories/${category.id}`) ? 'bg-gray-700' : ''}`}
                                  >
                                    <NavLink to={`/categories/${category}`}>{category}</NavLink>
                                  </li>
                                ))}
                              </ul>
                            </Disclosure.Panel>
							<NavLink to="/contact" className={`text-white  p-2 ${isLinkActive('/contact') ? 'bg-gray-700' : ''}`}
                     >
          Contact Us
        </NavLink>
                          </>
                        )}
                      </Disclosure>
                   
                    </div>
                  </Disclosure.Panel>
                </div>
						</div>
					</div>
					<div className="col-lg-8 col-md-7 col-12">
						
					</div>
					<div className="col-lg-2 col-md-3 col-12">
						<div className="right-bar">
							
             
							<div className="sinlge-bar shopping">
							<Link to="/" className="shopping">
								{/* <i className="ti-bag"></i> */}
								{userToken ? (
									<>
									<span className="text-gray-400 pr-2">Hi, {currentUser.name}</span>
									<i className="ti-angle-down"></i>
									</>
								) : (
									<Link to="/login">
									<i className="ti-power-off"></i> Login
									</Link>
								)}
								</Link>
								
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
											<li className={isLinkActive('/') ? 'active' : ''}>
        <Link to="/" className="btn animate">
          Home
        </Link>
      </li>
      <li className={isLinkActive('/product') ? 'active' : ''}>
        <Link to="/product">Product</Link>
      </li>
	  <li className={isLinkActive('/categories') ? 'active' : ''}>
	  <Link to={`/categories/${categories[0]}`}>
          Categories<i className="ti-angle-down"></i>
        </Link>
        <ul className="dropdown">
           {categories.map(category => (
              <li key={category.id} className={isLinkActive(`/categories/${category.id}`) ? 'active' : ''}>
                <Link to={`/categories/${category}`}>{category}</Link>
              </li>
            ))}</ul>
      </li>
      
      
      
    
      <li className={isLinkActive('/contact') ? 'active' : ''}>
        <Link to="/contact" className="btn animate">
          Contact Us
        </Link>
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
          )}
        </Disclosure>

        <Outlet />

        <Toast />
        <Footer/>
      </div>
    </>
  );
}
