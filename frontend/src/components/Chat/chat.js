import io from "socket.io-client";
import { useState, useContext, useEffect } from "react";
import ChatBox from "./chatBox";
import "./../../App.css";
import Card from 'react-bootstrap/Card';
import {AuthContext} from '../../context/AuthContext';
import axios from "axios"

const socket = io.connect("http://localhost:3001");

function Chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [group, setGroups] = useState([]);
  const auth = useContext(AuthContext);

  useEffect(() => {
  const getGroups=()=>{
      axios.get(`http://localhost:5000/api/requests/groups/${auth.userId}`).then((res)=>{
        setGroups(res.data)
      })
    }
      getGroups();
  },[])

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="chatContainer" style={{ /* fallback for old browsers */
                                  background: 'linear-gradient(to left,#7F00FF, #E100FF)',   /* Chrome 10-25, Safari 5.1-6 */
                                  display:'inline-grid',
                                  gridTemplateColumns: 'auto auto'
                                 }}>

                                 <Card className="text-center" 
                                       style={{ width: '28rem',
                                                marginTop: '5rem',
                                                marginBottom: '5rem', 
                                                boxShadow: '5px 8px 35px ',
                                                borderRadius: '20px',
                                                padding: '30px'}}>
                                  <Card.Body>
                                    <h3>Group List</h3>
                                    <table classname='table'>
                                    <tr>
                                       <th>Group ID</th></tr>
                                       {group.map(r=>(
                                        
                                         
                                       <tr>
                                       
                                         <td>
                                         {/* <Card style={{width:'10rem', height:'4rem',marginTop: '1rem',
                                                marginBottom: '1rem', 
                                                boxShadow: '1px 2px 25px ',}}><p style={{fontSize:'20px'}}>{r.groupId}</p></Card>   */}
                                                <div className='mb-3'>
                                                <input type="text" className='form-control' value={r.groupId}/></div>
                                         </td>
                                         <td><button className='btn btn-primary' style={{marginLeft:'5px'}}>View</button></td>
                                       </tr>
                                       
                                       ))}
                                    </table>
                                  </Card.Body>
                                 </Card>
      {!showChat ? (
           <Card className="text-center" 
                    style={{ width: '28rem',
                             marginTop: '5rem',
                             marginBottom: '5rem', 
                             boxShadow: '5px 8px 35px ',
                             borderRadius: '20px',
                             padding: '30px'}}
                    >
        <div className="joinChatContainer" >
          <h3>Join A Group Chat</h3>
          <center>
          <input
            type="text"
            placeholder="Your Name..."
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Group ID..."
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <button onClick={joinRoom}>Join A Room</button>
          </center>
        </div>
        </Card>
      ) : (
        <ChatBox socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default Chat;
