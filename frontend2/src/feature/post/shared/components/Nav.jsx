import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import CreatePost from '../../pages/CreatePost'

const Nav = () => {
    const navigate = useNavigate()

    const [showPop, setshowPopUP] = useState(false)
    return (
        <div className='flex justify-between'>
            <p className='font-bold'>insta</p>
            <button className='text-white bg-red-500 rounded p-1 m-2 font-bold'
                onClick={() => {
                    setshowPopUP(true)
                }}
            >New post</button>


            {/* 
            {
                showPop && (
                    <div className=''>
                        <h2>this is popup</h2>
                        <button onClick={() => setshowPopUP(false)}>close</button>
                    </div>
                )
            } */}


          <CreatePost 
          showPop ={showPop}
          setshowPopUP ={setshowPopUP}
          ></CreatePost>
        </div>
    )
}

export default Nav
