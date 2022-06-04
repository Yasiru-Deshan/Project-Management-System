import React,{useEffect, useState} from 'react'
import { Button } from 'react-bootstrap';
import { ServicesCard } from '../components/Supervisor/Services/ServiceElements';
import { InfoContainer,
         InfoWrapper,
         Heading     
} from '../components/Supervisor/InfoSection/InfoElements';
import {Link} from 'react-router-dom';
import axios from 'axios';

const FinalEvaluation = ({lightBg,id,lightText}) => {

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
              <ServicesCard style={{margin: '100px 0px 50px 0px'}}>

                <Heading lightText={lightText}>
                              Final Evaluation
                          </Heading>

                 <table className='table'>
                       <thead>
                       
                         <tr>
                           <th>Group ID</th>
                           <th>Group Name</th>
                           <th></th>
                           <th>Status</th>
                  
                         </tr>
                       </thead>
                       <tbody>
                       {groups.map(m=>(
                         <tr>
                          <td>{m.groupId}</td>  
                          <td>{m.groupName}</td>
                          {m.status ?
                          <td><Link to={`/final/${m._id}`}><Button>View</Button></Link></td>:
                          <td><Link to={`/final/${m._id}`}><Button>View & Evaluate</Button></Link></td> }
                          {m.status ?
                          <td><button className="btn btn-success">Evaluated</button></td>:
                          <td><button className="btn btn-primary">Pending</button></td>}
                         </tr>))}
          
                       </tbody>
                     </table>
                </ServicesCard>
            </InfoWrapper>
        </InfoContainer>
           

            
         </>
    )
}

export default FinalEvaluation;
