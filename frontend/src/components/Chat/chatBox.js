import React, { useEffect, useState } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import { Button } from 'react-bootstrap';

function ChatBox({ socket, username, room }) {
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        author: username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };

      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, [socket]);

  return (
    
    <div className="chat-window">
     <center>
     <h1 style={{marginTop:'-80px', color:'white', marginBottom:'50px'}}>Group Chat</h1>
     </center>
      <div className="chat-header">
        <p>{username}</p>
      </div>
      <div className="chat-body" style={{borderRadius:"0px"}}>
        <ScrollToBottom className="message-container">
          {messageList.map((messageContent) => {
            return (
              <div
                className="message"
                id={username === messageContent.author ? "you" : "other"}
              >
                <div>
                  <div className="message-content">
                    <p>{messageContent.message}</p>
                  </div>
                  <div className="message-meta">
                    <p id="time">{messageContent.time}</p>
                    <p id="author">{messageContent.author}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer" style={{borderRadius:"10px", boxShadow: '5px 8px 35px '}}>
        <input
          type="text"
          value={currentMessage}
          placeholder="Type a message here.."
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />
        <Button style={{backgroundColor:"#43a047"}} onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}

export default ChatBox;
