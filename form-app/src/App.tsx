// import { useState } from 'react'

function App() {

  return (
    <>
      <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 px-4'>
        <div className='flex flex-col border border-gray-300 w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-lg shadow-2xl bg-white p-6 sm:p-8'>
          <h1 className='text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 text-gray-700 text-center'>Login Form</h1>
          <input className='border border-gray-300 rounded-lg text-base sm:text-lg w-full mb-4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200' type="text" placeholder='Username'/>
          <input className='border border-gray-300 rounded-lg text-base sm:text-lg w-full mb-4 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200' type="password" placeholder='Password'/>

          <div className='space-x-0 sm:space-x-4 mt-6 flex flex-col sm:flex-row justify-between'>
            <button className='bg-blue-500 text-white font-bold py-3 px-6 w-full sm:w-auto rounded-lg shadow-md hover:bg-blue-400 transition duration-300 mb-4 sm:mb-0'>Login</button>
            <button className='bg-gray-500 text-white font-bold py-3 px-6 w-full sm:w-auto rounded-lg shadow-md hover:bg-gray-400 transition duration-300'>Forgot Password</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
