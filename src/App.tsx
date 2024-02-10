import { Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import SignIn from './components/signin/signin'
import Login from './components/login/Login'
import SignUp from './components/signup/siginup'
import Room from './components/room/room'
import SelectRoom from './components/selectRoom/selectRoom'
import Ranking from './components/ranking/ranking'
import Private from './components/private/private'
import WebSocketTest from './components/test/webSocketTest'
import NotFound from './components/notfound/notfound'

import './App.css'

export default function App ()  {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/signin' element={<SignIn/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/room' element={<Room/>} />
      <Route path='/selectRoom' element={<SelectRoom/>} />
      <Route path='/ranking' element={<Ranking/>} />
      <Route path='/private' element={<Private/>} />
      <Route path='/test' element={<WebSocketTest/>} />
      <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}
