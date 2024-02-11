import { useState } from 'react'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

import {useNavigate } from 'react-router-dom'

import Header from '../header/header';

import './siginin.css'
import { doLogin } from '../../service/api/supabase/login';

export default function SignIn() {
  const navigate = useNavigate();

  // 入力値
  const [mailValue, setMailValue] = useState('');
  const [psValue, setPsValue] = useState('');

  function handleSubmit () {
    doLogin(mailValue, psValue);
    navigate('/selectRoom')
  }

    return (
    <>
      <Header></Header>
      <main className="signInMain">
        <PeopleAltIcon sx={{ fontSize: 100 }}/>
        <h1>SignIn</h1>
        {/* onSubmit={handleSubmit} */}
        <form className='inputSigninContainer'>
          <div className='inputElements'>
            <TextField 
              type="email"
              fullWidth  
              label="メールアドレスを入力してください" 
              variant="filled" 
              color="primary"
              autoComplete="off"
              onChange={(e) => {setMailValue(e.target.value)}}/>
          </div>
          <div id='inpuelemBottom' className='inputElements'>
            <TextField 
              type="password"
              fullWidth  
              label="パスワードを入力してください" 
              variant="filled" 
              color="primary"
              autoComplete="off"
              onChange={(e) => {setPsValue(e.target.value)}}/>
          </div>
          <div className='loginBtn'>
            <Button 
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => { handleSubmit()}}>
              ログイン
            </Button>
          </div>

          <Link to={'/signup'}>アカウントをお持ちでない場合はこちら</Link>
        </form>
      </main>
    </>
    )
}