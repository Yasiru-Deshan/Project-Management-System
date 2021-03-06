import React,{ useEffect, useState, useRef, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";


const TopicAccept = ()=>{

   const auth = useContext(AuthContext);

   const id = useParams().id; 
   const [title,setTitle] = useState("");
   const [group,setGroup] = useState("");
   const [description,setDescription] = useState("");
   const [status,setStatus] = useState();
   const [feedback,setFeedBack] = useState();
   const [approvedBy,setApprovedBy] = useState();

   useEffect(()=>{

    async function fetchData(){
      const response = (await axios.get(`http://localhost:5000/api/topics/${id}`)).data;
      setTitle(response.title);
      setGroup(response.groupId);
      setDescription(response.description);
      setStatus(response.status);
      setFeedBack(response.feedback);
      setApprovedBy(response.approvedBy);
    
    }
   fetchData();
   },[id])

   const submitHandler  = async(e)=>{
      let update;

      e.preventDefault()
      const approvedTopic = {
        status: false,
        approvedBy:auth.fullName,
        feedback: feedback
      }

      try{
        update = await axios.put(`http://localhost:5000/api/topics/approve/${id}`,approvedTopic)

         if (update){
           
             window.alert("Topic has been approved")}
             
  
      }catch(err){
        console.log(err)
      }
    }

    const rejectHandler  = async(e)=>{
      let update;

      e.preventDefault()
      const approvedTopic = {
        
        approvedBy:auth.fullName,
        feedback: feedback
      }

      try{
        update = await axios.put(`http://localhost:5000/api/topics/approve/${id}`,approvedTopic)

         if (update){
           if(status){
             window.alert("Topic has been rejected")}

  }
      }catch(err){
        console.log(err)
      }
    }

    return(
        <div style={{background: '#7F00FF',  /* fallback for old browsers */
                     background: '-webkit-linear-gradient(to left, #7F00FF,#E100FF)',  /* Chrome 10-25, Safari 5.1-6 */
                     background: 'linear-gradient(to left,#7F00FF, #E100FF)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

}}>
  .
        <center>
              <Card className="text-center" 
                    style={{ width: '28rem',
                             marginTop: '5rem',
                             marginBottom: '5rem', 
                             boxShadow: '5px 8px 35px ',
                             borderRadius: '20px',
                             padding: '30px'}}
                    >
      
                   <Card.Body>
                        <Card.Title style={{fontWeight: 'bold', fontSize: '1.5rem'}}>{title}</Card.Title>
                        <h4>Group ID - {group}</h4>
                        <p style={{color:"black"}}>{description}</p>
                       <div className='mb-3'>
					            		<h5>FeedBack</h5>
						             	<input
							           	type='text'
							           	name='text'
							          	className='form-control mb-6'
							          	id='email'
							          	value={feedback}
							          	placeholder='Enter feedback here'
                          onChange={(e) => {setFeedBack(e.target.value);}} 
							        />
						</div>
            {status ?null:
            <div className='mb-3'>
					            		<h5>Approved By</h5>
						             	<input
							           	type='text'
							           	name='text'
							          	className='form-control mb-6'
							          	id='email'
							          	value={approvedBy}
							          	
                          
							        />
						</div>}
                  </Card.Body>
                  
               <Card.Footer>
                       {status ?
                             <div>
                            <Button className="btn btn-danger" style={{float: 'left'}} onClick={rejectHandler} >Decline</Button>
                          <Link to='/'><Button style={{float: 'right'}} onClick={ submitHandler}>Approve</Button></Link></div>
                          : null}
                </Card.Footer>
             </Card>
         </center>.
        </div>

    )
}

export default TopicAccept