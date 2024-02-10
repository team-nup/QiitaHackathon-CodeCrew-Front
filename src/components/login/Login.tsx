import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'

import Header from '../header/header';

export default function Login() {
  const navigate = useNavigate();

    return (
      <>
        <Header></Header>
        <main className="main">
        <h1>Login</h1>
        <Button
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => { navigate('/signin')}}>
           ログインする
        </Button>
        <Button 
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => { navigate('/signup')}}>
          アカウントをお持ちでいない方はこちら
        </Button>
      </main>
      </>
    )
  }