"use client"

import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Generate = () => {


    const [links, setlinks] = useState([{link:"",linktext:""}])
   
    const [handle, sethandle] = useState("")
    const [pic, setpic] = useState("")

    const addLink = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "linktext": text,
            "handle": handle
        });

        const requestOptions = {    
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        // const r = await fetch("http://localhost:3000/api/add", requestOptions)
     const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        toast(result.message)
        setlink("")
        setlinktext("")
    }
    return (
        <div className='bg-[#e9c0e9] min-h-screen grid grid-cols-2'>


            <div className='col1 flex  flex-col justify-center items-center text-[rgb(45,48,40)] mt-6'>

                <div className="flex flex-col gap-5 my-8">
                    <h2 className='text-4xl font-bold'>Create your BitTree</h2>
                    <div className="itm">
                        <h3 className='text-2xl font-semibold '>Step 1: Claim your Handle</h3>
                        <div className="mx-4">
                            <input value={handle || ""} onChange={e => { sethandle(e.target.value) }} className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    <div className="item">
                        <h3 className='text-2xl font-semibold '>Step 2: Add Links</h3>

                        <div className="mx-4">
                            <input value={link || ""} onChange={e => { setlink(e.target.value) }} className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Enter your text' />

                            <input value={linktext || ""} onChange={e => { setlinktext(e.target.value) }} className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Enter link' />
                            <button onClick={()=>addLink(linktext, link,handle)} className='bg-black rounded-full py-2 px-5 text-white font-semibold  m-2'> + Add Link</button>
                        </div>
                    </div>
                    <div className="item">
                        <h3 className='text-2xl font-semibold '>Step 3: Add Picture and Finalize</h3>
                        <div className="mx-4 flex flex-col">

                            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Enter Link to your picture' />
                            <button className='bg-black rounded-full py-2 px-5 text-white font-semibold  m-2 w-fit my-5' >Create your BitLink</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='col2 w-full h-screen justify-center items-center mt-6 ml-24 '>

                <img className='h-full object-contain' src="/generate.png" alt="banner" />

            </div>
            <ToastContainer />
        </div>
    )
}

export default Generate
