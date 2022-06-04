import React,{useState,useEffect, useContext} from 'react';
import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap';
import axios from "axios";
import {AuthContext} from '../context/AuthContext';

const Requests = ()=>{

  const [request,setRequest] = useState([]);
  const [id,setId] = useState([]);
  const [status,setStatus] = useState([])

  const auth = useContext(AuthContext);

  useEffect(() => {
  const getRequests=()=>{
      axios.get(`http://localhost:5000/api/requests/${auth.userId}`).then((res)=>{
        setRequest(res.data)
      })
    }
      getRequests();
  },[])

   const submitHandler  = async(id)=>{
      let update;

     
      const acceptedRequest = {
        status: true,
        
      }

      try{
        update = await axios.put(`http://localhost:5000/api/requests/${id}`,acceptedRequest)

         if (update){
           
             window.alert("Request Accepted")}
             
             
  
      }catch(err){
        console.log(err)
      }
    }

    const rejectRequest = async (id) => {
 
      await axios.delete(`http://localhost:5000/api/requests/${id}`);
    
  
  }


    return(
        <div style={{  background: 'linear-gradient(to left,#7F00FF, #E100FF)',
        }} >
        .<center>
         <Card className="text-center" 
                    style={{ width:'35rem',
                             marginTop: '5rem',
                             marginBottom: '5rem', 
                             marginRight:'5rem',
                             marginLeft:'5rem',
                             boxShadow: '5px 8px 35px ',
                             borderRadius: '20px',
                             padding: '30px'}}
                    >
                     <h1>Requests</h1>
                     <table className='table'>
                       <thead>
                         <tr>
                           <th>{auth.id}</th>
                           <th></th>
                           <th></th>
                           <th></th>
                  
                         </tr>
                       </thead>
                       <tbody>
                       
                      {request.map(r=>(
                          
                         <tr>
                           <td>{r.groupId}</td>
                           <td><button className="btn btn-success">View</button></td>
                           <td><Button onClick={()=>submitHandler(r._id)}>Accept</Button></td>
                           <td><button className='btn btn-danger' onClick={()=>rejectRequest(r._id)} >Reject</button></td>
                           
                         </tr>
                      ))}
                         

                       </tbody>
                     </table>

                    </Card>
           
           </center>.

        </div>
    )

}

export default Requests;