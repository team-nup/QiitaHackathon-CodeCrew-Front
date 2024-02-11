import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PublicIcon from '@mui/icons-material/Public';
import LockIcon from '@mui/icons-material/Lock';
import {useNavigate } from 'react-router-dom'

import './selectRoom.css'

import Header from '../header/header';

export default function SelectRoom() {
  const navigate = useNavigate();

    return (
      <>
        <Header></Header>
        <main className="main">
          <h1 style={{ marginBottom: "70px" }}>SelectRoom</h1>
          <div className="selectRoomContainer">
            <div className="roomItem">
            <PublicIcon sx={{ fontSize: 60 }} style={{ marginBottom: "30px" }} />
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => { navigate('/room')}}>
              グローバルルーム
            </Button>
          </div>
          <div className="roomItem">
            <LockIcon sx={{ fontSize: 60 }} style={{ marginBottom: "30px" }} />
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => { navigate('/private')}}>
              プライベートルーム
            </Button>
          </div>
        </div>
        </main>
      </>
    )
  }