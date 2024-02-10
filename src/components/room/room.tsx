import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'

import Three from '../three/three';
import { useEffect, useState } from 'react';

export default function Room() {
  const navigate = useNavigate();
  const [socket, setSocket] = useState<WebSocket>();
  const [message, setMessage] = useState<string>('');//送る
  const [userName, setUserName] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);//受け取り


  const joinRoom = () => {
    const roomNum: string= "1" ;
    if (roomNum) {
      const wsUrl = `ws://localhost:8000/public/${roomNum}`;
      const newSocket = new WebSocket(wsUrl);
      setSocket(newSocket);

      newSocket.onopen = () => {
        console.log("チャット開始");
        const dataToSend = {
          message: "プログラミング頑張ります",
          userName: "userName",
          action: "join"
        };
        newSocket.send(JSON.stringify(dataToSend));
      };

      newSocket.onmessage = (event) => {
        const message = event.data;
        setChatMessages(prevMessages => [...prevMessages, message]);
      };

    }
  };

  const sendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const dataToSend = {
        message: message,
        userName: userName,
        action: "message"
      };
      socket.send(JSON.stringify(dataToSend));
      setMessage('');
    }
  };

  const leaveRoom = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      const dataToSend = {
        message: "",
        userName: userName,
        action: "leave"
      };
      socket.send(JSON.stringify(dataToSend));
      console.log("close")
      //socket.close(1000,"");
      window.location.href = '/';
    }
  }
  
    return (
      <main className="main">
        <h1>Room</h1>
        <Three userName={userName} chatMessages={chatMessages} />
        <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => { navigate('/')}}>
            ホームに戻る
        </Button>
        <button onClick={joinRoom}>参加</button>
        <input type="text" placeholder='userName' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input type="text" placeholder='message' value={message} onChange={(e) => setMessage(e.target.value)} />
        <button onClick={sendMessage}>送信</button>
        <button onClick={leaveRoom}>退出</button>
        <div>
          {chatMessages.map((msg, index) => (
            <p key={index}>{msg}</p>
          ))}
        </div>
      </main>
    )
}