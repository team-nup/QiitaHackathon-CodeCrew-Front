import { useState } from 'react'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'

import Header from '../header/header';

export default function SignIn() {
  const navigate = useNavigate();

  // 入力値
  const [mailValue, setMailValue] = useState('');
  const [psValue, setPsValue] = useState('');

    return (
    <>
      <Header></Header>
      <main className="main">
        <h1>SignIn</h1>
        {/* onSubmit={handleSubmit} */}
        <form className='inputTextContainer'>
          <div className='inputElements'>
            <p>e-mail: </p>
            <input 
              type="email"
              placeholder='メールアドレスを入力'
              value={mailValue} onChange={(e) => setMailValue(e.target.value)}/>
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
            onClick={() => { navigate('/selectRoom')}}>
            ログインする
          </Button>

        </form>
      </main>
    </>
    )
}