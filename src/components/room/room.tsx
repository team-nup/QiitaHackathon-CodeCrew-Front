import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'

import Three from '../three/three';

export default function Room() {
  const navigate = useNavigate();
  
    return (
      <main className="main">
        <h1>Room</h1>
        <Three />
        <Button
            variant="outlined"
            size="large"
            endIcon={<ArrowForwardIcon />}
            onClick={() => { navigate('/')}}>
            ホームに戻る
        </Button>
      </main>
    )
}