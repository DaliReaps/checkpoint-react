import React from 'react'
import pfp from './pfp.jpg';
import './ProfilePhoto.css'
const ProfilePhoto = () => {
  return (
    <div >
       <img  src={pfp} className="pfp" alt="pfp" />
    </div>
  )
}

export default ProfilePhoto