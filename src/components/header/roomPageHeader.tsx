import Button from '@mui/material/Button';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import LogoutIcon from '@mui/icons-material/Logout';

import {useNavigate } from 'react-router-dom'

import './roomPageHeader.css'

export default function RoomPageHeader() {
  const navigate = useNavigate();
  
  function hoge () {
    console.log('hoge log')
    navigate('/selectRoom')
  }

  return (
    <header className='header'>
        <h1>Commit Space</h1>
        <div>
            <Button
                variant="outlined"
                size="large"
                endIcon={<LogoutIcon />}
                onClick={() => { hoge();}}>
                退出
            </Button>
            <Button
                variant="outlined"
                size="large"
                endIcon={<AutoGraphIcon />}
                onClick={() => { navigate('/ranking')}}>
                ランキング
            </Button>
        </div>
    </header>
  )
}
