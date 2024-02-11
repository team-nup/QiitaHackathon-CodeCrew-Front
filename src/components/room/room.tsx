import { useState } from 'react';
import Three from '../three/three';
import IconButton from '@mui/material/IconButton';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import RoomPageHeader from '../header/roomPageHeader';
import Gemini from '../room/gemini';

import './room.css'
import './gemini.css'
import { TextField } from '@mui/material';

type ChatData = {
  message: string;
  userName: string;
  action: string;
};

export default function Room() {

  const [popupActive, setPopupActive] = useState(false);
  const [isclicedAIhelpBtn, setIsclicedAIhelpBtn] = useState('AIに相談する');
  
  const [socket, setSocket] = useState<WebSocket>();
  const [message, setMessage] = useState<string>('');//送る
  const [userName, setUserName] = useState<string>('');
  const [chatMessage, setChatMessage] = useState<ChatData>();//受け取り
  
  // 表示情報について
  const [isInputInfo, setInputInfo] =useState(true); 

  const togglePopup = () => {
    setPopupActive(!popupActive);
    
    // popupActive の値に応じてボタンのテキストを変更
    if (popupActive) {
      setIsclicedAIhelpBtn('AIに相談する');
    } else {
      setIsclicedAIhelpBtn('チャットを閉じる');
    }
  };

  const screenSwitching = () => {
        // 画面の切り替え
        setInputInfo(false);
        console.log('hoge')
        const beforeInfoElm =  document.getElementById('beforeInputInfo')!
        beforeInfoElm.classList.add('isInputInfo')
  }

  const joinRoom = () => {
    const roomNum: string= "1" ;
    if (roomNum) {
      const wsUrl = `ws://localhost:8000/public/${roomNum}`;
      const newSocket = new WebSocket(wsUrl);
      setSocket(newSocket);

      newSocket.onopen = () => {
        console.log("チャット開始");
        const dataToSend = {
          message: message,
          userName: userName,
          action: "join"
        };
        newSocket.send(JSON.stringify(dataToSend));
      };

      newSocket.onmessage = (event) => {
        const message = event.data;
        console.log(message);
        const paseMessage : ChatData =JSON.parse(message); 
        setChatMessage(paseMessage);
      };

    }

    screenSwitching();
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
      <>
        {isInputInfo ? (
          <div id='beforeInputInfo'>
            <input type="text" placeholder='ユーザ名' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder='目標' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={ joinRoom }>ルームに参加</button>
          </div>
        ):(
          <div className='InputedInfoScreen'>
            <RoomPageHeader />
            <main className="main">
              <div className='threeContainer'>
                <Three chatMessage={chatMessage} />
                <div className='AI'>
                    <div className='chatAIBtn'>
                      <h3>{isclicedAIhelpBtn}</h3>
                      <IconButton 
                        color="primary" 
                        aria-label="add to shopping cart" 
                        size="large"
                        onClick={() => togglePopup()}>
                          <SmartToyTwoToneIcon 
                            fontSize="inherit"
                            style={{ color: 'white' }}/>
                      </IconButton>
                    </div>
                </div>
              </div>
              <button onClick={leaveRoom}>退出</button>
            </main>
            <div className={`popupContainer ${popupActive ? 'active' : ''}`}>
              <Gemini />
            </div>
            <div className={`chat`}>
            <div id='inpuelemBottom' className='inputElements'>
            <TextField 
              type="text"
              fullWidth  
              label="メッセージ" 
              variant="filled" 
              color="primary"
              value={message} onChange={(e) => setMessage(e.target.value)}/>
              <button onClick={ sendMessage }>送信</button>
          </div>

            </div>
          </div>
        )}
      </>
    )
}