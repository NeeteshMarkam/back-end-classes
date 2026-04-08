import axios from 'axios'


const api = axios.create({
    baseURL:"http://localhost:3000/api/posts",
    withCredentials:true
})

export async function getFeed() {
    const respone = await api.get('/feed')

    return respone.data
}

export async function createPost(imageFile,caption){
    const formData = new FormData()

    formData.append('imagePost',imageFile)
    formData.append('caption',caption)

    const respone = await api.post('/',formData)

    return respone.data
}

export async function likePost(postId){
    const respone = await api.post("/like/"+postId)

    return respone.data
}


export async function UnlikePost(postId){
    const respone = await api.post("/unlike/"+postId)

    return respone.data
}