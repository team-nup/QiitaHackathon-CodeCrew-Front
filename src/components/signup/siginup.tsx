import { useState } from 'react'
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import TextField from '@mui/material/TextField';

import {useNavigate } from 'react-router-dom'

import Header from '../header/header';

import './signup.css'
import { clickedSignUpBtn } from '../../service/api/supabase/signup';

export default function SignIn() {
  const navigate = useNavigate();

  // 入力値
  const [mailValue, setMailValue] = useState('');
  const [psValue, setPsValue] = useState('');


  function handleSubmit () {
    console.log(mailValue)
    console.log(psValue)
    clickedSignUpBtn(mailValue, psValue ,"userName"); // clickedSignUpBtn を呼び出し
    navigate('/selectRoom')
  }

    return (
    <>
      <Header></Header>
      <main className="signInMain">
        <PeopleAltIcon sx={{ fontSize: 100 }}/>
        <h1>SignUp</h1>
        <form className='inputSigninContainer'>
          <div className='inputElements'>
            <TextField 
              type="email"
              fullWidth  
              label="メールアドレスを入力してください" 
              variant="filled" 
              color="primary"
              onChange={(e) => {setMailValue(e.target.value)}}/>
          </div>
          <div className='inputElements'>
            <TextField 
              type="password"
              fullWidth  
              label="パスワードを入力してください" 
              variant="filled" 
              color="primary"
              onChange={(e) => {setPsValue(e.target.value)}}/>
          </div>
          <div  className='inputElements'>
            <TextField 
              type="text"
              fullWidth  
              label="ユーザ名を入力してください" 
              variant="filled" 
              color="primary"
              onChange={(e) => {setPsValue(e.target.value)}}/>
          </div>
          <div className='loginBtn'>
            <Button 
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => { handleSubmit()}}>
              新規登録
            </Button>
          </div>
        </form>
      </main>
    </>
    )
}