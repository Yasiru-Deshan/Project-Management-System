import React,{ useContext, useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import {AuthContext} from '../context/AuthContext';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { NotificationContext } from '../context/NotificationContext';
const MyProfile=(props)=>{

	const notification = useContext(NotificationContext);
	const auth = useContext(AuthContext);

	const [file, setFile] = useState();
	const [signrequest, setSignrequest] = useState();
	//const [image, setImgurl] = useState();
	const [toggle, setToggle] = useState(false);
	 const [field,setField] = useState("");
	 const [mobile,setMobile] = useState("");
	 const [mail,setMail] = useState("");
	 const [image,setImage] = useState("");
	 const [fname,setFname] = useState("");
	 const [lname,setLname] = useState("");
	 const [role,setRole] = useState("")
	 const id = useParams().id;

	 useEffect (()=>{
		 async function fetchData(){
			 const response = (await axios.get(`http://localhost:5000/api/auth/profile/${id}`)).data;
             setField(response.field);
			 setMobile(response.mobile);
			 setMail(response.email);
			 setImage(response.image);
			 setFname(response.firstName);
			 setLname(response.lastName);
			 setRole(response.role)

		 }

		 fetchData();

	 },[id])
	    
	
 

    return(
        <div style={{background: '#7F00FF',  /* fallback for old browsers */
                     background: '-webkit-linear-gradient(to left, #7F00FF,#E100FF)',  /* Chrome 10-25, Safari 5.1-6 */
                     background: 'linear-gradient(to left,#7F00FF, #E100FF)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}}>
<div className='row justify-content-center'>
            <Card className="text-center" 
                    style={{ width: '50rem',
                             marginTop: '10rem',
                             marginBottom: '5rem', 
                             boxShadow: '5px 8px 35px ',
                             borderRadius: '20px',
                             padding: '30px'}}>
	
				
                 <div className="imageContainer">
							<img
								src={image}
								alt=''
								width='200'
								height='200'
								className='img-fluid  rounded-circle mb-3 img-thumbnail shadow-sm'
							/>
	            </div>
						

						
							

                  <Card.Body>
                      <Card.Title style={{fontSize:'50px'}}>{fname} {lname}</Card.Title>
                      	<form >

                      
                        <div className='mb-3'>
							<label htmlFor='email'>Role</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								value={role}
								//onChange={handleChange}
								required
								placeholder=''
							/>
						</div>
						<div className='mb-3'>
							<label htmlFor='email'>Research Field</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								value={field}
								//onChange={handleChange}
								required
								placeholder=''
							/>
						</div>
						<div>
						<label htmlFor='email'>Mobile</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								value={mobile}
								//onChange={handleChange}
								required
								placeholder=''
							/>
						</div>
                      <div>
						<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								value={mail}
								//onChange={handleChange}
								required
								placeholder=''
							/>
						</div>
						<div><button className="btn btn-primary mt-6" style={{float:'right',marginTop:'20px'}}>Send Request</button></div>
						<div><button className="btn btn-success" style={{float:'left',marginTop:'20px'}}>Chat</button></div>
                        </form>
                  </Card.Body>           

            </Card>
            </div>
        </div>
    )


}

export default MyProfile;