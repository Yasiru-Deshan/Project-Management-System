import io from "socket.io-client";
import { useState } from "react";
import ChatBox from "./chatBox";
import "./../../App.css";
import Card from 'react-bootstrap/Card';

const socket = io.connect("http://localhost:3001");

function Chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setShowChat(true);
    }
  };

  return (
    <div className="chatContainer" style={{background: '#7F00FF',  /* fallback for old browsers */
                                  background: '-webkit-linear-gradient(to left, #7F00FF,#E100FF)',  /* Chrome 10-25, Safari 5.1-6 */
                                  background: 'linear-gradient(to left,#7F00FF, #E100FF)', 
                                 }}>
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
