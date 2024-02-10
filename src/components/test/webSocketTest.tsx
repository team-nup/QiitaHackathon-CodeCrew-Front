import { useState, useEffect } from 'react';

export default function WebSocketTest() {
  const [socket, setSocket] = useState<WebSocket>();
  const [roomName, setRoomName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const joinRoom = () => {

    if (roomName) {
      const wsUrl = `ws://localhost:8000/public/${roomName}`;
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
    <div>
      <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
      <button onClick={joinRoom}>参加</button>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>送信</button>
      <button onClick={leaveRoom}>退出</button>
      <div>
        {chatMessages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}