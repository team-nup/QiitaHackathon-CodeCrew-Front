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
              <h1 className='title2'>つながりを生む作業スペース</h1>
              <h1>一緒に作業してみませんか？</h1> 
            </div>
            <div className='homeBtnContainer'>
              <div className='homeBtnContainer1'>
                <Button 
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  onClick={() => { navigate('/signin')}}>
                    <h1>ログイン</h1>
                </Button>
              </div>
              <Button 
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardIcon />}
                onClick={() => { navigate('/signup')}}>
                  <h1>初めての方はこちら</h1>
              </Button>
            </div>
          </div>
        </main>
      </>
    )
  }