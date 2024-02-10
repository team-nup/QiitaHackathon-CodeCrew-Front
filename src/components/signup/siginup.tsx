import { useState } from 'react'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'

import Header from '../header/header';

export default function SignUp() {
  const navigate = useNavigate();
  
  // 入力値
  const [roomIDValue, setroomIDValue] = useState('');
  const [psValue, setPsValue] = useState('');


  return (
    <>
      <Header></Header>
      <main className="main">
        <h1>アカウントの新規作成</h1>
        <form className='inputTextContainer'>
          <div className='inputElements'>
            <p>メールアドレス: </p>
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
          <div className='inputElements'>
            <p>ユーザ名: </p>
            <input 
              type="password"
              placeholder='ユーザ名を入力' 
              value={psValue} onChange={(e) => setPsValue(e.target.value)}/>
          </div>

          <Button 
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => { navigate('/selectRoom')}}>
            新規登録
          </Button>
        </form>
    </main>
    </>
    )
}

