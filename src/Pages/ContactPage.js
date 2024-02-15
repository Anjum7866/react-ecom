import React , {useState, useEffect} from 'react'
import axiosClient from '../axios';
import { useStateContext } from '../contexts/ContextProvider';
import PageComponent from '../components/PageComponent';
import Loader from '../menu/Loader';

function ContactPage() {
	const [loading, setLoading] = useState(true);
	const [formData, setFormData] = useState({
	  name: '',
	  subject: '',
	  email: '',
	  phone: '',
	  message: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const [successMessage, setSuccessMessage] = useState('');
  
  
	const { name, subject, email, phone, message } = formData;
  
	const handleInputChange = (e) => {
	  setFormData({
		...formData,
		[e.target.name]: e.target.value,
	  });
	};
  
	const handleSubmit = async (e) => {
	  e.preventDefault();
	  setLoading(true);
	  try {
		const response = await axiosClient.post('/contact', formData);
		console.log(response.data);
		setLoading(false);
		setSuccessMessage('Contact success.');
		setErrorMessage('');
		
	  } catch (error) {
		setLoading(false);
		if (error.response && error.response.status === 422) {
			setErrorMessage(error.response.data.error.email[0]);
		} else {
		  setErrorMessage('An error occurred while sending the message.');
		}
		setErrorMessage('');
	  }
	};
	useEffect(() => {
		setLoading(false);
	   
	  }, []);
	return (
		<PageComponent >
		{loading && <div className="flex justify-center"><Loader/></div>}
		{!loading && (

<>
		<div id="ContactPage">


			<div className="breadcrumbs">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="bread-inner">
								<ul className="bread-list">
									<li><a href="index1.html">Home<i className="ti-arrow-right"></i></a></li>
									<li className="active"><a href="blog-single.html">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>



			<section id="contact-us" className="contact-us section">
				<div className="container">
					<div className="contact-head">
						<div className="row">
							<div className="col-lg-8 col-12">
								<div className="form-main">
									<div className="title">
										<h4>Get in touch</h4>
										<h3>Write us a message</h3>
									</div>
									<form className="form" method="post" onSubmit={handleSubmit}>
										<div className="row">
											<div className="col-lg-6 col-12">
												<div className="form-group">
													<label>Your Name<span>*</span></label>
													<input name="name" type="text"value={name} onChange={handleInputChange} placeholder="" />
												</div>
											</div>
											<div className="col-lg-6 col-12">
												<div className="form-group">
													<label>Your Subjects<span>*</span></label>
													<input name="subject" type="text" value={subject} onChange={handleInputChange} placeholder="" />
												</div>
											</div>
											<div className="col-lg-6 col-12">
												<div className="form-group">
													<label>Your Email<span>*</span></label>
													<input name="email"  type="email" value={email} onChange={handleInputChange}  placeholder="" />
												</div>
											</div>
											<div className="col-lg-6 col-12">
												<div className="form-group">
													<label>Your Phone<span>*</span></label>
													<input name="phone" type="text" value={phone} onChange={handleInputChange} placeholder="" />
												</div>
											</div>
											<div className="col-12">
												<div className="form-group message">
													<label>your message<span>*</span></label>
													<textarea name="message" value={message} onChange={handleInputChange} placeholder=""></textarea>
												</div>
											</div>
											<div className="col-12">
												<div className="form-group button">
													<button type="submit" className="btn ">Send Message</button>
												</div>
											</div>
										</div>
									</form>
									{errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
								</div>
							</div>
							<div className="col-lg-4 col-12">
								<div className="single-head">
									<div className="single-info">
										<i className="fa fa-phone"></i>
										<h4 className="title">Call us Now:</h4>
										<ul>
											<li>+123 456-789-1120</li>
											<li>+522 672-452-1120</li>
										</ul>
									</div>
									<div className="single-info">
										<i className="fa fa-envelope-open"></i>
										<h4 className="title">Email:</h4>
										<ul>
											<li><a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></li>
											<li><a href="mailto:info@yourwebsite.com">support@yourwebsite.com</a></li>
										</ul>
									</div>
									<div className="single-info">
										<i className="fa fa-location-arrow"></i>
										<h4 className="title">Our Address:</h4>
										<ul>
											<li>KA-62/1, Travel Agency, 45 Grand Central Terminal, New York.</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



			


		</div>
		</>
		)}
		</PageComponent>
	);
}

export default ContactPage
