import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'

import Header from '../header/header';

export default function Home() {
  const navigate = useNavigate();

    return (
      <>
      <Header></Header>
      <main className="main">
        <h1>Home</h1>
        <Button 
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => { navigate('login')}}>
            はじめる
        </Button>
      </main>
      </>
    )
  }