import React,{ useEffect, useState} from 'react'
import { Button } from '../../ButtonElements';
import { ServicesCard } from '../Services/ServiceElements';
import { InfoContainer,
         InfoWrapper,
         Heading     
} from './InfoElements';
import {Link} from 'react-router-dom';
import axios from 'axios';

const InfoSection = ({lightBg,id,lightText}) => {

  const [groups,setGroups] = useState([]);

  useEffect(()=>{

    const getGroups = ()=>{
      axios.get('http://localhost:5000/api/groups/all').then((res)=>{
       setGroups(res.data);
      })

    }
    getGroups();
  },[])
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
                           <th></th>
                           <th>Status</th>
                           <th></th>
                  
                         </tr>
                       </thead>
                       <tbody>
                       
                       {groups.map(m=>(
                         <tr>
                          <td>{m.groupId}</td>  
                          <td>{m.groupName}</td>
                          <td>{m.evaluatedBy}</td>
                          {m.status ?
                          <td><Link to={`/presentation/${m._id}`} style={{textDecoration:'none'}}><button className="btn btn-primary">View</button></Link></td>:
                          <td><Link to={`/presentation/${m._id}`} style={{textDecoration:'none'}}><button className="btn btn-primary">View & Evaluate</button></Link></td>
                          }
                          {m.status ?
                          <td><button className="btn btn-success">Evaluated</button></td>:
                          <td><button className="btn btn-danger">Pending</button></td>
                          }
                          {m.sent ?
                          <td><Button>Sent</Button></td>:
                          <td><Button>Send to Supervisor</Button></td>}
                         </tr>))}
                         
                       </tbody>
                     </table>
                </ServicesCard>
            </InfoWrapper>
        </InfoContainer>
           

            
         </>
    )
}

export default InfoSection;
