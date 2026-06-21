import React from 'react'

const LogOut = ({ LogOutCloseHandler, setUser }) => {
  return (
    <div className='fixed inset-0 bg-black/50 flex justify-center items-center'>
      <div className=' bg-gray-800 dark:bg-gray-700 w-[300px]  md:w-[350px] p-4 h-[100px] md:h-[150px]
       rounded-md'>
        <div className='flex flex-col items-center justify-center gap-4'>
          <h2 className='text-xl font-bold text-left text-white'>Are you sure for Logout?</h2>
          <div className='flex justify-end items-center gap-3'>
            <button
            onClick={() => {
              LogOutCloseHandler()
              setUser()
              localStorage.removeItem("user")
            }} 
            className='text-md bg-primary rounded-md text-white px-4 py-1'>
              Yes
            </button>
            <button
            onClick={()=> LogOutCloseHandler()}
            className='text-md bg-primary/50 rounded-md text-white px-4 py-1'>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogOut
