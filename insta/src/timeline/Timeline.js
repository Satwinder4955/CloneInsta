import React, { useState } from 'react'
import './Timeline.css'
import Post from './posts/Post'
import Suggestions from './Suggestions'

function Timeline() {
    const [posts,setPosts] = useState([
        {
            user: 'Satwinder Singh',
            postImage: 'https://th.bing.com/th/id/OIG4.LgUj9FIjzUbdTSMn0mRg',
            likes: '50',
            timestamp: '2h'
        },
        {
            user: 'jaskaran Singh',
            postImage: 'https://pixlr.com/images/index/ai-image-generator-one.webp',
            likes: '40',
            timestamp: '21h'
        },
        {
            user: 'Sukhdeep Singh',
            postImage: 'https://www.befunky.com/images/prismic/1f427434-7ca0-46b2-b5d1-7d31843859b6_funky-focus-red-flower-field-after.jpeg?auto=avif,webp&format=jpg&width=863',
            likes: '80',
            timestamp: '4d'
        }
    ])

    return (
        <div className='timeline'>
            <div className='timeline__left'>
                <div className='timeline__posts'>
                    {posts.map((post) => (
                        <Post
                            user={post.user}
                            postImage={post.postImage}
                            likes={post.likes}
                            timestamp={post.timestamp}
                        />
                    ))}
                </div>
            </div>
            <div className='timeline__right'>
                <Suggestions />
            </div>
        </div>
    )
}

export default Timeline