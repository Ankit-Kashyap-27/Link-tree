"use client"
import Image from "next/image";
import localFont from "next/font/local";
import { useState } from "react";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});



export default function Home() {

  const [Name, setName] = useState("")

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <main>


      <section className="bg-[#254f1a] min-h-[130vh] grid grid-cols-2">
        <div className=" flex  justify-center flex-col  ml-[7vw]  ">
          <p className={`text-[#d2e823] py-2  text-6xl    ${poppins.className}`}>Everything you are.</p>
          <p className={`text-[#d2e823] py-2  text-6xl  ${poppins.className}`}> In one,simple link </p>
          <p className={`text-[#d2e823] py-2  text-6xl  ${poppins.className}`}> in bio.</p>
          <p className="text-[#d2e823]  my-4 text-lg">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
          <div className="input flex gap-2 py-4">
            <div>
              <label htmlFor="yourname" className=" absolute bottom-[10%] text-xl pl-6 text-[#676b5f] ">BitLi.nk/</label>

              <input id="yourname" name="yourname" value={Name} onChange={(e) => { handleChange(e) }} className=" pl-24 py-5 rounded-xl focus:outline-green-700 placeholder:text-xl  text-[#676b5f]" type="text" placeholder="yourname" />
            </div>
            <button className="bg-[#e9c0e9] rounded-full p-4 text-xl">Claim your Linktree</button>
          </div>

        </div>

        <div className=" flex items-center justify-center flex-col mr-[7vw]">
          <Image width={600} height={600} src="/home.png" alt="home page" />
        </div>

      </section>
      <section className="bg-[#e9c0e9] min-h-[100vh]">

      </section>
    </main>
  );
}
