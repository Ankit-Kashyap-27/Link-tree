"use client"

import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {
    const [showdropdown, setshowdropdown] = useState(false)



    return (

        <nav >
            <div className='bg-white w-[88.5vw] flex  justify-between right-[5.25vw] fixed top-12 rounded-full  p-3 ' onMouseLeave={() => { setshowdropdown(false) }} >

                <div className='logo flex gap-12 items-center px-8  '  >
                    
                    <Image src="logo.svg" alt="" width={120} height={120} />
                    <ul className='flex  text-[#676b5f] cursor-pointer  font-medium text-[101%]  '>
                        <Link href={"/"}> <li onMouseOver={() => { setshowdropdown(false) }} className='hover:bg-[#eff0ec] px-4  py-3 rounded-lg'> Templates</li></Link>
                        <Link href={"/"}> <li onMouseOver={() => { setshowdropdown(false) }} className='hover:bg-[#eff0ec] px-4 py-3 rounded-lg'> Marketplace</li></Link>
                        <Link href={"/"}> <li onMouseOver={() => { setshowdropdown(true) }} className='hover:bg-[#eff0ec] px-4 py-3 rounded-lg'  > Discover</li></Link>
                        <Link href={"/"}> <li onMouseOver={() => { setshowdropdown(false) }} className='hover:bg-[#eff0ec] px-4 py-3 rounded-lg ' > Pricing</li></Link>
                        <Link href={"/"}> <li onMouseOver={() => { setshowdropdown(false) }} className='hover:bg-[#eff0ec] px-4 py-3 rounded-lg' > Learn</li></Link>
                    </ul>
                    <ul onMouseOver={() => { setshowdropdown(true) }} className={`${showdropdown ? "" : "hidden"} absolute top-[12.2vh] left-[25vw] flex flex-col justify-start gap-3 w-72 bg-[#ffffff] rounded-xl px-6 py-6 font-semibold`}>
                        <Link href=""><li className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>LinkTree for Instagram</li></Link>
                        <Link href=""><li className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>LinkTree for Tik Tok</li></Link>
                        <Link href=""><li className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>LinkTree for Facebook</li></Link>
                        <Link href=""><li className='hover:bg-[#e9e9e9] text-[#676b5f] px-4 py-3 rounded-xl'>LinkTree for Twitter</li></Link>
                    </ul>



                </div>
                <div className='flex gap-2'>
                    <button className="logoin bg-[#eff0ec] text-lg text-[#1e2330] px-6 py-4  rounded-lg font-medium">Log in</button>
                    <button className="signup  bg-[#1e2330]  px-7 text-lg  py-[7%] rounded-full  font-medium text-white">Sign up free</button>

                </div>



            </div>
        </nav>
    )
}

export default Navbar


