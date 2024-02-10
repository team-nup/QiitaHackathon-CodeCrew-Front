import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'


export default function Ranking() {
  const navigate = useNavigate();


    return (
      <main className="main">
        <h1>Ranking</h1>
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