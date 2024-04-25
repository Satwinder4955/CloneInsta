import React from 'react'
import './Sidenav.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatIcon from '@mui/icons-material/Chat';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


function Sidenav() {
  return (
    <div className='sidenav'>
        <img className='sidenav__logo' src='https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2010-2013.png' alt=''/>
        <div className='sidenav__buttons'>
            <button className='sidenav__button'>
                
                <HomeIcon/>
                <span>Home</span>
            </button>
            <button className='sidenav__button'>
                
                <SearchIcon/>
                <span>Search</span>
            </button>
            <button className='sidenav__button'>
                
                <ExploreIcon/>
                <span>Explore</span>
            </button>
            <button className='sidenav__button'>
                
                <SlideshowIcon/>
                <span>Reels</span>
            </button>
            <button className='sidenav__button'>
                
                <ChatIcon/>
                <span>Message</span>
            </button>
            <button className='sidenav__button'>
                
                <NotificationsNoneIcon/>
                <span>Notification</span>
            </button>
            <button className='sidenav__button'>
                
                <AddCircleIcon/>
                <span>Create</span>
            </button>
        </div>
        <div className='sidenav__more'>
            <button className='sidenav__button'>
                <MenuIcon/>
                <span>More</span>
            </button>
        </div>
    </div>
  )
}

export default Sidenav