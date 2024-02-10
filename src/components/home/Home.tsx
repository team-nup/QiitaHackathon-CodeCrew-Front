import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {useNavigate } from 'react-router-dom'

import Header from '../header/header';
import './home.css'

export default function Home() {
  const navigate = useNavigate();

    return (
      <>
        <Header></Header>
        <main className="headerMain">
          <div className='leftContainer'>
            <img src='assets/commit_space.png' alt="" />
          </div>
          <div className='rightContainer'>
            <div className='titleContainer'>
              <h1 className='title'>Commit Space</h1>
              <h1>作業中にもつながりを</h1>
              <h1>一緒に作業してみませんか？</h1> 
            </div>
            <Button 
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              onClick={() => { navigate('login')}}>
                <h1>はじめる</h1>
            </Button>
          </div>
        </main>
      </>
    )
  }