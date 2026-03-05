import React from 'react'
import '../style/posts.css'
import Post from '../components/Post'
const Feed = () => {
    return (
        <div>
            <div className="allpost">
               <Post></Post>
               <Post></Post>
            </div>
        </div>
    )
}

export default Feed
