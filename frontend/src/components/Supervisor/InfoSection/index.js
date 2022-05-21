import React from 'react'
import { Button } from '../../ButtonElements';
import { ServicesCard } from '../Services/ServiceElements';
import { InfoContainer,
         InfoWrapper,
         Heading     
} from './InfoElements';

const InfoSection = ({lightBg,id,lightText}) => {
    return (
        <>
        <InfoContainer lightBg = {lightBg} id={id}>
            <InfoWrapper >
              <ServicesCard style={{margin: '50px 50px 50px 0px'}}>

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
                          <td><Button>Pending</Button></td>
                         </tr>
              <tr>
                          <td>fdddddddddddddddddddddddddddddddddddddddddd</td>  
                          <td>fdddddddddffffffffffffffffffff</td>
                          <td>fdddddddd</td>
                          <td><Button>View & Evaluate</Button></td>
                          <td><Button>Pending</Button></td>
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
