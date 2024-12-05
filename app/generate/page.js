import React from 'react'

const Generate = () => {
  return (
    <div className='bg-[#e9c0e9] min-h-screen grid grid-cols-2'>
<div className='col1 flex  flex-col justify-center items-center'>
<h1>Create your BitTree</h1>
<div className="flex flex-col gap-5">
    <input type="text" placeholder='Enter your text' />
    <input type="text" placeholder='Enter link' />
</div>
</div>


<div className='col2 w-full h-screen '>

    <img className='h-full object-contain' src="/generate.png" alt="banner" />

    </div>      
    </div>
  )
}

export default Generate
