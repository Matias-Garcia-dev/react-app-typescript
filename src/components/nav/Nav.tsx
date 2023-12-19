import React,{useState ,useEffect} from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate()

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  } 

  useEffect(()=> {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav_contents'>
        <img className='nav_logo'
        onClick={() => navigate("/")} 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158" alt=""/>
        <img 
        onClick={() => navigate("/profile")}
        className='nav_avatar' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt=""/>
        
      </div>
    </div>
  )
}

export default Nav