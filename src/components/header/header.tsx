import Button from '@mui/material/Button';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

import {useNavigate } from 'react-router-dom'

import './header.css'

export default function Header() {
  const navigate = useNavigate();
  
  return (
    <header className='header'>
        <h1>Commit Space</h1>
        <Button
            variant="outlined"
            size="large"
            endIcon={<AutoGraphIcon />}
            onClick={() => { navigate('/ranking')}}>
            ランキング
        </Button>
    </header>
  )
}
