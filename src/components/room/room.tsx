import { useState } from 'react';
import Three from '../three/three';
import IconButton from '@mui/material/IconButton';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

import RoomPageHeader from '../header/roomPageHeader';

import './room.css'

export default function Room() {

  const [popupActive, setPopupActive] = useState(false);

  const togglePopup = () => {
    setPopupActive(!popupActive);
  };
  
    return (
      <>
        <RoomPageHeader />
        <main className="main">
          <div className='threeContainer'>
            <Three />
            <div className='AI'>
                <div className='chatAIBtn'>
                  <h3>AIに相談する</h3>
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
          <h3>ポップアップのコンテンツ</h3>
          <button onClick={togglePopup}>Close Popup</button>
        </div>
      </>
    )
}