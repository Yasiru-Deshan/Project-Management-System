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
                              Presentation Evaluation
                          </Heading>

                 <table className='table'>
                       <thead>
                         <tr>
                           <th>Group ID</th>
                           <th>Date</th>
                           <th>Supervisor</th>
                           <th>Status</th>
                           <th></th>
                  
                         </tr>
                       </thead>
                       <tbody>
                       
                         <tr>
                          <td>SE 3050</td>  
                          <td>5/3/2022</td>
                          <td>Mr.Livingstone</td>
                          <td><Button>Pending</Button></td>
                          <td><Button>View & Evaluate</Button></td>
                          <td><Button>Send to Supervisor</Button></td>
                         </tr>
                         <tr>
                          <td>SE 3070</td>  
                          <td>5/3/2022</td>
                          <td>Mr.Livingstone</td>
                          <td><Button>Pending</Button></td>
                          <td><Button>View & Evaluate</Button></td>
                          <td><Button>Send to Supervisor</Button></td>
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
