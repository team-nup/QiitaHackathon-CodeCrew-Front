import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'


export default function Home() {

  
  const navigate = useNavigate();


    return (
      <main className="main">
        <div>Home</div>
        <Button 
          variant="outlined"
          size="large"
          endIcon={<ArrowForwardIcon />}
          onClick={() => { navigate('login')}}>
            はじめる
        </Button>
      </main>
    )
  }