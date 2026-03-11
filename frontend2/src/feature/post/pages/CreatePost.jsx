import React, { useState } from "react";

const CreatePost = () => {
  const [caption, setCaption] = useState(null);
  const [imaUrl, setImgUrl] = useState(null)

  const [preview,setPreview] = useState(null)

  function handleSubmit(e) {
    e.preventDefault();
    
    const file = e.target.files[0]
setImgUrl(file)

if (file) {
  const image = URL.createObjectURL(file)
setPreview(image)
}
  }
  return (
    <div>
      <h1 className="text-2xl front-bold text-center">Create post</h1>
      <div className="flex justify-center items-center flex-col mt-10">
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-col w-80 p-5 rounded-xl bg-gray-300"
        >
          <div>
            <label htmlFor="caption">caption</label>
            <input
              type="text"
              id="caption"
              name="caption"
              className="border p-2 rounded mb-4 "
              onChange={(e) => {
                console.log(e.target.value)
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
            onChange={handleSubmit}
            />
          </div>
          
         {preview &&( <img src={preview} alt="preview"
          className='mt-4 rounded-lg' />)
}

          <button
            className="mt-4 bg-red-400 text-white w-20 rounded  "
            type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
