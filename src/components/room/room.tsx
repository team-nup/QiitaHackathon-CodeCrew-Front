import Three from '../three/three';

import RoomPageHeader from '../header/roomPageHeader';

import './room.css'

export default function Room() {
  
    return (
      <>
        <RoomPageHeader />
        <main className="main">
          <div className='threeContainer'>
            <Three />
          </div>
        </main>
      </>
    )
}