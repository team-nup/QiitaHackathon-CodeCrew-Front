import { useState } from 'react'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'

import Header from '../header/header';

export default function Private() {
  const navigate = useNavigate();
  
    // 入力値
    const [roomIDValue, setroomIDValue] = useState('');
    const [psValue, setPsValue] = useState('');


    return (
      <>
        <Header></Header>
        <main className="main">
          <h1>Private</h1>
          <form className='inputTextContainer'>
            <div className='inputElements'>
              <p>ルームID: </p>
              <input 
                type="number"
                placeholder='ルームIDを入力'
                value={roomIDValue} onChange={(e) => setroomIDValue(e.target.value)}/>
              </div>
              <div className='inputElements'>
              <p>password: </p>
              <input 
                type="password"
                placeholder='パスワードを入力' 
                value={psValue} onChange={(e) => setPsValue(e.target.value)}/>
            </div>

            <Button 
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => { navigate('/room')}}>
              参加する
            </Button>
            <Button 
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => { navigate('')}}>
              作成する
            </Button>
          </form>
        </main>
      </>
    )
}