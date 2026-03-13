import { useContext, useEffect } from "react";
import { createPost, getFeed, likePost ,UnlikePost} from "../services/post.api"
import { PostContext } from '../post.context'


export const usePost = () => {


    const context = useContext(PostContext)


    const { loading, setLoading, post, setPost, feed, setFeed } = context



    const handleGetFeed = async () => {
        setLoading(true)
        const data = await getFeed()
        setFeed(data.allPost)
        setLoading(false)
    }

    const handleCreatePost = async (imageFile, caption) => {
        setLoading(true)
        const data = await createPost(imageFile, caption)

        setFeed([data.post, ...feed])

        setLoading(false)
    }


    const handleLike = async(post)=>{
        const data = await likePost(post)
    }

  const handleUnLike = async(post)=>{
        const data = await UnlikePost(post)
    }

    useEffect(() => {
        handleGetFeed
    }, [])
    return {
        loading, feed, post, handleGetFeed, handleCreatePost
    }
}