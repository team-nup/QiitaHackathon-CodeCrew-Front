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
  
    return (
      <>
        <RoomPageHeader />
        <main className="main">
          <div className='threeContainer'>
            <Three />
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
              onChange={(e) => setInputText(e.target.value)}/>
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
      </>
    )
}