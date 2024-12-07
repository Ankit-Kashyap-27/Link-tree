"use client"

import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Generate = () => {


    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    // const [handle, sethandle] = useState("")
    // const [pic, setpic] = useState("")

    // const addLink = async (text, link, handle) => {
    //     const myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     const raw = JSON.stringify({
    //         "link": link,
    //         "linktext": text,
    //         "handle": handle
    //     });

    //     const requestOptions = {    
    //         method: "POST",
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: "follow"
    //     };

    //  const r = await fetch("http://localhost:3000/api/add", requestOptions)
    //     const result = await r.json()
    //     toast(result.message)
    //     setlink("")
    //     setlinktext("")
    // }
    return (
        <div className='bg-[#e9c0e9] min-h-screen grid grid-cols-2'>


            <div className='col1 flex  flex-col justify-center items-center text-[rgb(45,48,40)] mt-6'>

                <div className="flex flex-col gap-5 my-8">
                    <h2 className='text-4xl font-bold'>Create your BitTree</h2>
                    <div className="itm">
                        <h3 className='text-2xl font-semibold '>Step 1: Claim your Handle</h3>
                        <div className="mx-4">
                            <input  className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Choose a Handle' />
                        </div>
                    </div>
                    <div className="item">
                        <h3 className='text-2xl font-semibold '>Step 2: Add Links</h3>

                        <div className="mx-4">
                            <input  className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Enter your text' />

                            <input  className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Enter link' />
                            <button className='bg-black rounded-full py-2 px-5 text-white font-semibold  m-2'> + Add Link</button>
                        </div>
                    </div>
                    <div className="item">
                        <h3 className='text-2xl font-semibold '>Step 3: Add Picture and Finalize</h3>
                        <div className="mx-4 flex flex-col">

                            <input className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Enter Link to your picture' />
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
