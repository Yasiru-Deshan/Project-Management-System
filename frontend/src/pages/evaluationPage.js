import React from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { ServicesCard, ServicesContainer, ServicesWrapper } from '../components/Supervisor/Services/ServiceElements';

const EvaluationPage = ()=>{

    return(
        <div style={{background: '#7F00FF',  /* fallback for old browsers */
                     background: '-webkit-linear-gradient(to left, #7F00FF,#E100FF)',  /* Chrome 10-25, Safari 5.1-6 */
                     background: 'linear-gradient(to left,#7F00FF, #E100FF)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}}>
       .<center>

              <Card className="text-center" 
                    style={{ width: '28rem',
                             marginTop: '5rem',
                             marginBottom: '5rem', 
                             boxShadow: '5px 8px 35px ',
                             borderRadius: '20px',
                             padding: '30px'}}
                    >
      
                   <Card.Body>
                        <Card.Title style={{fontWeight: 'bold', fontSize: '1.5rem'}}></Card.Title>
                        
                        <h4>Group ID  </h4>
                        <div className='mb-3'>
							
							<input
								type='text'
								name='text'
								className='form-control'
								id='email'
								//value={email}
								placeholder='it19251110.pdf'
                               
							/>
                           
						</div> <Button className="btn btn-danger" style={{float: ''}}>Download</Button>

                        <div className='mb-3 mt-3'>
							<label htmlFor='marks'>Enter Marks</label>
							<input
								type='text'
								name='text'
								className='form-control'
								id='email'
								//value={email}
								
							/>
						</div>
                         <div className='mb-3'>
							<label htmlFor='feedback'>Feedback</label>
							<input
								type='text'
								name='text'
								className='form-control mb-6'
								id='email'
								//value={email}
								placeholder='Enter feedback here'
							/>
						</div>
                  </Card.Body>
                  
               <Card.Footer>
                       
                             <div>
                            <Button className="btn btn-primary" >Submit</Button>
                          </div>
                          
                </Card.Footer>
             </Card>

       </center>.
        </div>
    )
}

export default EvaluationPage
