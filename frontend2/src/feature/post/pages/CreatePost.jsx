import React, { useRef, useState } from "react";
import { usePost } from "../hook/usepost";
import {useNavigate} from 'react-router'

const CreatePost = ({ showPop, setshowPopUP }) => {



  const [caption, setCaption] = useState(null);
  const postImagerInputFielRefe = useRef(null)
  const [preview, setPreview] = useState(null)


  const navigate = useNavigate()

  const { loading, handleCreatePost } = usePost()






  function handleImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
    }
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const file = postImagerInputFielRefe.current.files[0]

    await handleCreatePost(file, caption)

    console.log(caption)
    console.log(postImagerInputFielRefe);

    navigate("/")
  }

  if (loading) {
    <h1>creating post ....</h1>
  }

  return (
    <>
      {
        showPop && (<div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
        >
          <form

            onSubmit={handleSubmit}
            className=" relative flex items-center flex-col w-80 p-5 rounded-xl bg-gray-300"
          >
            <div className="absolute top-1 right-2 text-white bg-red-500 rounded p-1"
              onClick={() => setshowPopUP(false)}
            >close</div>

            <div className='mt-8'>
              <label htmlFor="caption">caption</label>
              <input
                type="text"
                id="caption"
                name="caption"
                className="border p-2 rounded mb-4 "
                onChange={(e) => {
                  setCaption(e.target.value)
                }}
              />
            </div>

            <div className="p-4 ">
              <label
                htmlFor="imgUrl"
                className="cursor-pointer text-center p-4 border-2 border-indigo-500 rounded-lg bg-white hover:bg-indigo-100"
              >
                Upload file
              </label>
              <input type="file" id="imgUrl" name="imgUrl" hidden
                ref={postImagerInputFielRefe}
                onChange={handleImageChange}

              />
            </div>

            {preview && (<img src={preview} alt="preview"
              className='mt-4 rounded-lg h-40' />)
            }

            <button
              className="mt-4 bg-red-400 text-white w-20 rounded  "
              type="submit">Submit</button>
          </form>
        </div>)}
    </>
  );
};

export default CreatePost;
