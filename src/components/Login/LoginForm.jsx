import axios from 'axios'
import React, { useState } from 'react'

const LoginForm = ({ CloseHandler, setUser }) => {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [allValid, setAllValid] = useState(false)

    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_0]{5,19}$/
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/


    const submitHandler = async (event) => {
        event.preventDefault()
        setSubmitted(true)



        if (usernameRegex.test(username) && passwordRegex.test(password) && emailRegex.test(email)) {
            let userInfos = {
                username,
                password,
                email
            }

            await axios.post("https://my-json-server.typicode.com/Estakhrian/e-commerce-platform/users", userInfos)
                .then(res => {
                    console.log(res)
                    if (res.status == 201) {

                        setAllValid(true)
                        setUser(res.data)
                        localStorage.setItem("user", JSON.stringify(res.data))

                        setTimeout(() => {
                            setAllValid(false)
                            setUsername("")
                            setPassword("")
                            setEmail("")
                            setSubmitted(false)
                            CloseHandler()
                        }, 3000)
                    }
                })
        }

    }

    return (
        <div className='fixed inset-0 bg-black/70 flex items-center justify-center z-[1000]'>
            <div className=' bg-gray-800 dark:bg-gray-700 w-[350px]  md:w-[400px] p-4 h-[380px]  sm:h-[450px] md:h-[400px]
       rounded-md'>
                <div className='flex justify-between items-center mb-3 border-b-2 border-white'>
                    <h2 className='text-2xl font-bold text-left text-white'>login form</h2>
                    <button
                        onClick={() => CloseHandler()}
                        className='text-base font-bold text-white'>x</button>
                </div>
                <div className='mt-4 text-black text-sm'>
                    {submitted && allValid && (<h2 className='bg-green-500 text-white p-2 rounded-md'>login successfuly</h2>)}
                    <form>
                        <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value.trim())}
                            type='text'
                            placeholder='Enter Username'
                            className='mt-3 w-full p-2 bg-gray-200 rounded-md shadow-md' />
                        {submitted && !usernameRegex.test(username) && (<span className='text-xs text-red-600'>
                            *Username must be 5-19 characters and contain only letters, numbers, or underscores</span>)}
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value.trim())}
                            type='password'
                            placeholder='Enter Password...'
                            className='mt-4 w-full p-2 bg-gray-200 rounded-md shadow-md' />
                        {submitted && !passwordRegex.test(password) && (<span className='text-xs text-red-600'>
                            *Password must be at least 8 characters and include uppercase, lowercase and number</span>)}
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value.trim())}
                            type='email'
                            placeholder='Enter Email Address'
                            className='mt-4 w-full p-2 bg-gray-200 rounded-md shadow-md' />
                        {submitted && !emailRegex.test(email) && (<span className='text-xs text-red-600'>
                            *Please enter a valid email address</span>)}
                        <button onClick={(e) => submitHandler(e)} type='submit' className='mt-4 w-full p-2 bg-primary rounded-md shadow-md text-white' >Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
