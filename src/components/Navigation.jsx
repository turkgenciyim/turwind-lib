import React from 'react'
const Navigation = () => {
  return (
    <div className='sticky flex z-50 backdrop-blur-lg rounded-full  bg-blue-700 justify-between items-center h-24 p-8 container mx-auto'>
      <h1 className='text-3xl text-white  bg-clip-text text-transparent bg-gradient-to-tr from-blue-200 to-white font-black'>
        TurwindUI
      </h1>
      <div className='flex'>
        <button className='text-white px-6 py-3 border bg-blue-950 border-blue-800 rounded-full active:bg-opacity-75'>
          Send Feedback
        </button>
      </div>
    </div>
  )
}

export default Navigation
