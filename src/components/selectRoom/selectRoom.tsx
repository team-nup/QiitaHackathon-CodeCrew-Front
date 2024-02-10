import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'

import './selectRoom.css'

import Header from '../header/header';

export default function SelectRoom() {
  const navigate = useNavigate();

    return (
      <>
        <Header></Header>
        <main className="main">
          <h1>SelectRoom</h1>
          <div className="selectRoomContainer">
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => { navigate('/room')}}>
              グローバルルーム
            </Button>
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => { navigate('/private')}}>
              プライベートルーム
            </Button>
          </div>
        </main>
      </>
    )
  }