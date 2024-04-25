import React from 'react'
import { Avatar } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Post.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


function Post() {
  return (
    <div className='post'>
        <div className='post__header'>
            <div className='post__Author'>
            <Avatar>G</Avatar>
            Sam_ • <span>21h</span>
            </div>

            <MoreHorizIcon/>
           
        </div>
        <div className='post__image'>
            <img src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg' alt=''/>
        </div>
        <div className='post__footer'>
            <div className='post__footerIcons'>
                <div className='post__iconMain'>
                   <FavoriteBorderIcon className='postIcon'/>
                   <ChatBubbleOutlineIcon className='postIcon'/>
                   <TelegramIcon className='postIcon'/>
                </div>
                <div className='post__iconMain'>
                   <BookmarkBorderIcon className='postIcon'/>
                </div>
                
            </div>
            Liked by 21 people
            
            
        </div>
    </div>
  )
}

export default Post