import React from 'react'
import { Button } from 'react-bootstrap';
import { ServicesCard } from '../Services/ServiceElements';
import { InfoContainer,
         InfoWrapper,
         Heading     
} from './InfoElements';
import {Link} from 'react-router-dom';

const InfoSection = ({lightBg,id,lightText}) => {
    return (
        <>
        <InfoContainer lightBg = {lightBg} id={id}>
            <InfoWrapper >
              <ServicesCard style={{margin: '50px 0px 50px 0px'}}>

                <Heading lightText={lightText}>
                              Documents Evaluation
                          </Heading>

                 <table className='table'>
                       <thead>
                         <tr>
                           <th>Group ID</th>
                           <th>Group Name</th>
                           <th>Documents</th>
                           <th></th>
                           <th>Status</th>
                  
                         </tr>
                       </thead>
                       <tbody>
                       
                         <tr>
                          <td>fdddddddddddddddddddddddddddddddddddddddddd</td>  
                          <td>fdddddddddffffffffffffffffffff</td>
                          <td>fdddddddd</td>
                          <td><Button>View & Evaluate</Button></td>
                          <td><button className="btn btn-success">Evaluated</button></td>
                         </tr>
              <tr>
                          <td>fdddddddddddddddddddddddddddddddddddddddddd</td>  
                          <td>fdddddddddffffffffffffffffffff</td>
                          <td>fdddddddd</td>
                          <td><Link to='/evaluation'><Button>View & Evaluate</Button></Link></td>
                          <td><button className='btn btn-danger'>Pending</button></td>
                         </tr>
                       </tbody>
                     </table>
                </ServicesCard>
            </InfoWrapper>
        </InfoContainer>
           

            
         </>
    )
}

export default InfoSection;
