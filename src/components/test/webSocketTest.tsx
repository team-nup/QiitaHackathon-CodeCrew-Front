import { useState, useEffect } from 'react';

export default function WebSocketTest() {
  const [socket, setSocket] = useState<WebSocket>();
  const [roomName, setRoomName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);

  const handleJoinRoom = () => {

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

      return () => {
        if (newSocket.readyState === WebSocket.OPEN) {
          newSocket.close();
        }
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

  return (
    <div>
      <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} />
      <button onClick={handleJoinRoom}>参加</button>
      <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
      <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} />
      <button onClick={sendMessage}>送信</button>
      <div>
        {chatMessages.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
    </div>
  );
}