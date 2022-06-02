import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { NotificationContext } from '../../context/NotificationContext';
import Card from 'react-bootstrap/Card';

const CustomerProfile = (props) => {
	const notification = useContext(NotificationContext);
	const auth = useContext(AuthContext);
	const customer = props.location.state.customer;
	const role = props.location.state.role;
	const [profilePic, setProfilePic] = useState(customer.image);
	const [file, setFile] = useState();
	const [signrequest, setSignrequest] = useState();
	const [image, setImgurl] = useState();
	const [toggle, setToggle] = useState(false);

	const onImageChange = async (e) => {
		let file = e.target.files[0];
		if (file.type === 'image/jpeg' || file.type === 'image/png') {
			let ur = URL.createObjectURL(e.target.files[0]);
			setProfilePic(ur);
			setFile(file);
			let signed = await axios.get(
				`${process.env.REACT_APP_BASE_URL}/api/aws/signed?filename=${file.name}&filetype=${file.type}`
			);
			if (signed.status !== 200) {
				notification.showNotification(
					'Somthing went wrong please select the image again',
					true
				);
			} else {
				let re = signed.data.signedRequest;
				let reulr = signed.data.url;
				setSignrequest(re);
				setImgurl(reulr);
			}
		} else {
			notification.showNotification(
				'Please upload jpeg or png image',
				true
			);
		}
	};
	function uploadFile(file, signedRequest) {
		const xhr = new XMLHttpRequest();
		xhr.open('PUT', signedRequest);
		xhr.onreadystatechange = () => {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					return true;
				} else {
					notification.showNotification(
						'Somthing went wrong when uploading the image',
						true
					);
					return false;
				}
			}
		};
		xhr.send(file);
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		setToggle(false);
		try {
			await uploadFile(file, signrequest);
			const body = {
				image: image
			};

			const config = {
				headers: {
					'x-auth-token': `${auth.token}`,
					'Content-Type': 'application/json'
				}
			};
			const response = await axios.put(
				`${process.env.REACT_APP_BASE_URL}/api/auth/profilepic`,
				body,
				config
			);
			if (response.status === 200) {
				let cus = customer;
				cus.image = image;
				setTimeout(() => {
					auth.reloadUser(cus);
					window.location.replace('/');
				}, 4000);
				notification.showNotification('profile picture updated', false);
			} else {
				notification.showNotification('something went wrong', true);
			}
		} catch (err) {
			notification.showNotification('Server error', true);
		}
	};

	return (
		<div style={{background: '#7F00FF',  /* fallback for old browsers */
                     background: '-webkit-linear-gradient(to left, #7F00FF,#E100FF)',  /* Chrome 10-25, Safari 5.1-6 */
                     background: 'linear-gradient(to left,#7F00FF, #E100FF)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}}>
            <div className='row justify-content-center'>
		            <Card className="text-center" 
                    style={{ width: '30rem',
                             marginTop: '10rem',
                             marginBottom: '5rem', 
                             boxShadow: '5px 8px 35px ',
                             borderRadius: '20px',
                             padding: '30px'}}>
			
			
					
						<h3>My profile</h3>
					
					<hr />
					
						<center>
							<img
								src={profilePic}
								alt=''
								width='200'
								height='200'
								className='img-fluid  rounded-circle mb-3 img-thumbnail shadow-sm'
							/>
						</center>

						
							{toggle ? (
								<React.Fragment>
									<form method='post' onSubmit={handleSubmit}>
										<div
											className='form-group'
											controlId='formGridAddress1'>
											<input
												type='file'
												id='custom-file'
												label='Add image'
												name='image'
												accept='image/jpeg, image/png'
												onChange={(e) =>
													onImageChange(e)
												}
												custom
											/>
										</div>
										<button className='btn btn-primary'>
											Update
										</button>
									</form>
									<button
										className='btn btn-danger'
										onClick={() => setToggle(false)}>
										cancel
									</button>
								</React.Fragment>
							) : (
								<center>
								<button
									className='btn btn-primary'
									style={{width:'200px'}}
									onClick={() => setToggle(true)}>
									Change profile picture
								</button></center>
							)
						 }


						<div className='row' style={{marginTop:'50px'}}>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								Email
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								{customer.email}
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								Full Name
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								{customer.firstName} {customer.lastName}
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								Role
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								{auth.role}
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								Research Field
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								{customer.field}
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								Address
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								{customer.address}
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								Age
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								{customer.age}
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								Gender
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								{customer.gender}
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								Mobile
							</div>
							<div className='col-6 col-xs-6 col-md-6 text-start'>
								{customer.mobile}
							</div>

						</div>
				
				
			
		</Card>
	   </div>
	  </div>	
	);
};

export default CustomerProfile;
