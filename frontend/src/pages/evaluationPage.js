import React, { useEffect,  useState } from 'react';
import Card from 'react-bootstrap/Card'
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { useParams} from "react-router";
import { ServicesCard, ServicesContainer, ServicesWrapper } from '../components/Supervisor/Services/ServiceElements';
import axios from 'axios';

function EvaluationPage (){

    const id = useParams().id;
    const [groupId, setGroupId] = useState("");
    const [groupName,setGroupName] = useState("");
    const [status,setStatus] = useState(false);
    const [students,setStudents] = useState([]);
    const [marks,setMarks] = useState("");
    const [docName,setDocName] = useState("");
    const [feedback,setFeedBack] = useState("");

    useEffect(()=>{
        async function fetchdata(){
            const response = (await axios.get(`http://localhost:5000/api/groups/${id}`)).data;
            setGroupId(response.groupId);
            setGroupName(response.groupName);
            setStatus(response.status);
            setStudents(response.students);
            setMarks(response.marks);
            setDocName(response.docName);
            setFeedBack(response.feedback);

        }
        fetchdata();
    },[])

    const updateHandler = async(e)=>{
        let update;

        e.preventDefault()
        const updatedMarks = {
            status: status,
            marks:marks,
            feedback:feedback
        }

        try{
            update = await axios.put(`http://localhost:5000/api/groups/edit/${id}`,updatedMarks)
            if(update){
                window.alert("Success!")
            }      
        }catch(err){
            console.log(err)
        }
    }

    const submitHandler = async(e)=>{
        let update;

        e.preventDefault()
        const updatedMarks = {
            status: true,
            marks:marks,
            feedback:feedback
        }

        try{
            update = await axios.put(`http://localhost:5000/api/groups/edit/${id}`,updatedMarks)
            if(update){
                window.alert("Success!")
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
                        
                        <h4>{groupId}</h4>
                        <div className='mb-3'>
							
							<input
								type='text'
								name='text'
								className='form-control'
								id='email'
								value={docName}
								
                               
							/>
                           
						</div> <Button className="btn btn-danger" style={{float: ''}}>Download</Button>

                       
                        <div className='mb-3 mt-3'>
                            
                               
                                <div>
                                <table className="table">
                                <tr><th>Student Name</th>
                                    <th>Marks</th></tr>
                                    
                                    <tr><td>{students[0]}</td>
                                    <td>{marks}</td></tr>
                                    <tr><td>{students[1]}</td>
                                    <td>{marks}</td></tr>
                                    <tr><td>{students[2]}</td>
                                    <td>{marks}</td></tr>
                                    <tr><td>{students[3]}</td>
                                    <td>{marks}</td></tr>
                                </table></div>
                            <label htmlFor='marks'>Enter Marks</label>
                            <input
								type='text'
								name='text'
								className='form-control'
								id='email'
								placeholder='Enter Marks'
								value={marks}
                                onChange = {(e)=>{setMarks(e.target.value)}}
							/></div>
                        
                         <div className='mb-3'>
							<label htmlFor='feedback'>Feedback</label>
							<input
								type='text'
								name='text'
								className='form-control mb-6'
								id='email'
                                onChange={(e) =>{setFeedBack(e.target.value)}}
								value={feedback}
								placeholder='Enter feedback here'
							/>
						</div>
                  </Card.Body>
                  
               <Card.Footer>
                             {status ? <div>
                            <button className="btn btn-primary" onClick={updateHandler} >Edit</button>
                          </div> :
                             <div>
                            <button className="btn btn-primary" onClick={submitHandler}>Submit</button>
                          </div> }
                          
                </Card.Footer>
             </Card>

       </center>.
        </div>
    )
}

export default EvaluationPage
