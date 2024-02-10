import { useState } from 'react';
import Three from '../three/three';
import IconButton from '@mui/material/IconButton';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

import RoomPageHeader from '../header/roomPageHeader';
import './room.css'

export default function Room() {

  const [popupActive, setPopupActive] = useState(false);
  const [isclicedAIhelpBtn, setIsclicedAIhelpBtn] = useState('AIに相談する');
  const [inputText, setInputText] = useState('');
  const [socket, setSocket] = useState<WebSocket>();
  const [message, setMessage] = useState<string>('');//送る
  const [userName, setUserName] = useState<string>('');
  const [chatMessages, setChatMessages] = useState<string[]>([]);//受け取り
  
  // 表示情報について
  const [isInputInfo, setInputInfo] =useState(true); 

  const callGemini = async () => {
    // setisClickedBtn(true);
    // setLoadFlg(false);
    // const response = await startGemini(inputText);
    // setOutputText(response);
    // setLoadFlg(true);
    console.log(inputText)
  }

  const togglePopup = () => {
    setPopupActive(!popupActive);
    
    // popupActive の値に応じてボタンのテキストを変更
    if (popupActive) {
      setIsclicedAIhelpBtn('AIに相談する');
    } else {
      setIsclicedAIhelpBtn('チャットを閉じる');
    }
  };

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

    // 画面の切り替え
    setInputInfo(false);
    console.log('hoge')
    const beforeInfoElm =  document.getElementById('beforeInputInfo')!
    beforeInfoElm.classList.add('isInputInfo')

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
            <button onClick={joinRoom}>参加</button>
            <input type="text" placeholder='ユーザ名' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="text" placeholder='目標' value={message} onChange={(e) => setMessage(e.target.value)} />
            <button onClick={()=>{ sendMessage() }}>送信</button>
            <button onClick={leaveRoom}>退出</button>
            <div>
              {chatMessages.map((msg, index) => (
              <p key={index}>{msg}</p>
              ))}
            </div>
          </div>
        ):(
          <div className='InputedInfoScreen'>
            <RoomPageHeader />
            <main className="main">
              <div className='threeContainer'>
                <Three userName={userName} chatMessages={chatMessages} />
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
            </main>
            <div className={`popupContainer ${popupActive ? 'active' : ''}`}>
              <h3>AIと相談</h3>
              <div className='inputTextContainer'>
                <TextField 
                  fullWidth  
                  label="input message" 
                  variant="filled" 
                  color="primary"
                  // eslint-disable-next-line @typescript-eslint/no-explicit-any
                  onChange={(e:any) => setInputText(e.target.value)}/>
                <div className='isClicledChatBtn'>
                  <IconButton 
                    color="primary" 
                    aria-label="add to shopping cart" 
                    size="large"
                    onClick={callGemini}>
                      <SendIcon fontSize="inherit" className='text-white'/>
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    )
}