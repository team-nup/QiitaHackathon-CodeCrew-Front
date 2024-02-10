import Three from '../three/three';
import IconButton from '@mui/material/IconButton';
import SmartToyTwoToneIcon from '@mui/icons-material/SmartToyTwoTone';

import RoomPageHeader from '../header/roomPageHeader';

import './room.css'

export default function Room() {
  
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
                    onClick={() => { alert('hoge')}}>
                      <SmartToyTwoToneIcon 
                        fontSize="inherit"
                        style={{ color: 'white' }}/>
                  </IconButton>
                </div>
            </div>
          </div>
        </main>
      </>
    )
}