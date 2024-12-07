"use client"

import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'next/navigation';

const Generate = () => {

    const SearchParams= useSearchParams()

    // const [link, setlink] = useState("")
    // const [linktext, setlinktext] = useState("")
    const [links, setlinks] = useState([{ link: "", linktext: "" }])
    const [handle, sethandle] = useState(SearchParams.get('handle'))
    const [pic, setpic] = useState("")


    const handleChange = (index, link, linktext) => {
        setlinks((initialLinks) => {
            return initialLinks.map((item, i) => {
                if (i == index) {
                    return { link, linktext }
                }
                else {
                    return item
                }
            })
        })
    }

    const addLink = () => {
        setlinks(links.concat([{ link: "", linktext: "" }]))
    }


    const submitLinks = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "links": links,
            "handle": handle,
            "pic": pic
        });
        console.log(raw)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };


        const r = await fetch("http://localhost:3000/api/add", requestOptions)
        const result = await r.json()
        if (result.success) {

            toast.success(result.message)
            setlinks([])
            setpic("")
            sethandle("")
        }
        else {
            toast.error(result.message)
        }

    }
    return (
        <div className='bg-[#e9c0e9] min-h-screen grid grid-cols-2'>


            <div className='col1 flex mt-40  flex-col justify-center items-center text-[rgb(45,48,40)]  ml-28'>

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

                        {links && links.map((item, index) => {

                            return <div key={index} className="mx-4">
                                <input value={item.link || ""} onChange={e => { handleChange(index, e.target.value, item.linktext) }} className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Enter your text' />
                                <input value={item.linktext || ""} onChange={e => { handleChange(index, item.link, e.target.value) }} className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Enter link' />

                            </div>
                        })
                        }

                        <button onClick={() => addLink()} className='bg-black rounded-full  py-2 px-5 text-white font-semibold ml-[5%]  m-2'> + Add Link</button>
                    </div>
                    <div className="item">
                        <h3 className='text-2xl font-semibold '>Step 3: Add Picture and Finalize</h3>
                        <div className="mx-4 flex flex-col">

                            <input value={pic || ""} onChange={e => { setpic(e.target.value) }} className='px-4 py-2 m-2 focus:outline-[#eaa8ea] rounded-full' type="text" placeholder='Enter Link to your picture' />
                            <button disabled={pic == "" || handle == "" || links[0].linktext == ""} onClick={() => { submitLinks() }} className='bg-black rounded-full py-2 px-5 text-white font-semibold  m-2 w-fit my-5 disabled:bg-slate-200' >Create your BitTree</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='col2 w-fit  h-screen justify-center items-center mt-6 ml-24 '>

                <img className='h-full object-contain' src="/generate.png" alt="banner" />

            </div>
            <ToastContainer />
        </div>
    )
}

export default Generate
