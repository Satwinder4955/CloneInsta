import React from 'react'
import './Sidenav.css'


function Sidenav() {
  return (
    <div className='sidenav'>
        <img className='sidenav__logo' src='https://1000logos.net/wp-content/uploads/2017/02/Instagram-Logo-2010-2013.png' alt=''/>
        <div className='sidenav__buttons'>
            <div className='side__button'>
                {/* icon */}
                <span>Home</span>
            </div>
        </div>
    </div>
  )
}

export default Sidenav