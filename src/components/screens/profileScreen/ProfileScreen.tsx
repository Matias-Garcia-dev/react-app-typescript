import React from 'react'
import Nav from '../../nav/Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../../userSlice/userSlice'
import { auth } from '../../../firebase'
import { useNavigate } from 'react-router-dom'
import "./ProfileScreen.css"

function ProfileScreen() {
    const user = useSelector(selectUser)
    const navigate = useNavigate()

    const logOut = () => {
        auth.signOut()
        navigate("/")
    }

  return (
    <div className="profileScreen">
        <Nav></Nav>
        <div className="profielScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img 
                src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt=""/>
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <button onClick={() => {logOut()}} className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen