import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <div className='m-10   text-center flex-col flex justify-center items-center'>
      <h1 className='font-semibold text-2xl'>Enter otp</h1>
      <div  className='mt-3 gap-5  text-center flex justify-center items-center'>
      <div className='w-10 h-10  border-2 border-gray-300 rounded-sm'>
        <input type="number"  className='w-[100%] text-center h-[100%] overflow-hidden' />
      </div>
      <div className='w-10 h-10  border-2 border-gray-300 rounded-sm'>
        <input type="number"  className='w-[100%] text-center h-[100%] overflow-hidden' />
      </div>
      <div className='w-10 h-10  border-2 border-gray-300 rounded-sm'>
        <input type="number"  className='w-[100%] text-center h-[100%] overflow-hidden' />
      </div>
      <div className='w-10 h-10  border-2 border-gray-300 rounded-sm'>
        <input type="number"  className='w-[100%] text-center h-[100%] overflow-hidden' />
      </div>
      <div className='w-10 h-10  border-2 border-gray-300 rounded-sm'>
        <input type="number"  className='w-[100%] text-center h-[100%] overflow-hidden' />
      </div>
      <div className='w-10 h-10  border-2 border-gray-300 rounded-sm'>
        <input type="number"  className='w-[100%] text-center h-[100%] overflow-hidden' />
      </div>
      </div>
      
     
    </div>
  )
}
export default App