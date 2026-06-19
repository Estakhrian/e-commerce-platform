import React from 'react'

const LoginForm = ({CloseHandler}) => {
    return (
        <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-[1000]'>
            <div className=' bg-primary w-[300px] sm:w-[350px] md:w-[400px] p-4 h-[300px] sm:h-[350px] md:h-[400px]
       rounded-md'>
                <div className='flex justify-between items-center mb-3 border-b-2 border-gray-800'>
                    <h2 className='text-2xl font-bold text-left text-gray-800'>login form</h2>
                    <button
                    onClick={() => CloseHandler()} 
                    className='text-base font-bold text-red-700'>x</button>
                </div>
                <div className='mt-6'>
                    <form>
                        <input type='text' placeholder='Enter Username' className='mt-3 w-full p-2 bg-gray-200 rounded-md shadow-md' />
                        {/* <span className='text-sm text-red-800'>*please enter username</span> */}
                        <input type='password' placeholder='Enter Password...' className='mt-4 w-full p-2 bg-gray-200 rounded-md shadow-md' />
                        {/* <span className='text-sm text-red-800'>*please enter password</span> */}
                        <input type='email' placeholder='Enter Email Address' className='mt-4 w-full p-2 bg-gray-200 rounded-md shadow-md' />
                        {/* <span className='text-sm text-red-800'>*please enter email</span> */}
                        <button type='submit' className='mt-4 w-full p-2 bg-gray-800 rounded-md shadow-md text-white
                        hover:bg-gray-700' >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
