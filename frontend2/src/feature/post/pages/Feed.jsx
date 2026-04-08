import React, { useEffect } from 'react'
import '../style/feed.scss'
import Post from '../components/Post'

import { usePost } from '../hook/usepost'
import Nav from '../shared/components/Nav'
import CreatePost from './CreatePost'
const Feed = () => {

    const { feed, handleGetFeed, loading } = usePost()
    useEffect(() => {
        handleGetFeed()
    }, [])

    if (loading || !feed) {
        return (
            <h1> feed is loading...</h1>
        )
    }
    console.log(feed);
    return (
        <main className='feed-page relative z-0'>
            <div className="feed">
                <Nav/>
                <div className="posts">
{
    feed.map((post)=>{
        return <Post key ={post._id} user={post.user} post={post} />
    })
}

                </div>
            </div>
        </main>
    )
}

export default Feed
