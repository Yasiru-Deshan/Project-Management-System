import React from "react";
import Card from 'react-bootstrap/Card'

const MyProfile=()=>{

    return(
        <div style={{background: '#7F00FF',  /* fallback for old browsers */
                     background: '-webkit-linear-gradient(to left, #7F00FF,#E100FF)',  /* Chrome 10-25, Safari 5.1-6 */
                     background: 'linear-gradient(to left,#7F00FF, #E100FF)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}}>
<div className='row justify-content-center'>
            <Card className="text-center" 
                    style={{ width: '28rem',
                             marginTop: '10rem',
                             marginBottom: '5rem', 
                             boxShadow: '5px 8px 35px ',
                             borderRadius: '20px',
                             padding: '30px'}}>
                  <Card.Body>
                      <Card.Title style={{fontSize:'50px'}}>My Profile</Card.Title>
                      	<form >
						<div className='mb-3'>
							<label htmlFor='fname'>First Name</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								//value={email}
								//onChange={handleChange}
								required
								placeholder='john'
							/>
						</div>
                        <div className='mb-3'>
							<label htmlFor='lname'>Last Name</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								//value={email}
								//onChange={handleChange}
								required
								placeholder='Doe'
							/>
						</div>
                        <div className='mb-3'>
							<label htmlFor='email'>Role</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								//value={email}
								//onChange={handleChange}
								required
								placeholder=''
							/>
						</div>
                        <div className='mb-3'>
							<label htmlFor='email'>Email</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								//value={email}
								//onChange={handleChange}
								required
								placeholder='john@gmail.com'
							/>
						</div>
                        <div className='mb-3'>
							<label htmlFor='email'>Mobile</label>
							<input
								type='email'
								name='email'
								className='form-control'
								id='email'
								//value={email}
								//onChange={handleChange}
								required
								placeholder='john@gmail.com'
							/>
						</div>
                        </form>
                  </Card.Body>           

            </Card>
            </div>
        </div>
    )


}

export default MyProfile;