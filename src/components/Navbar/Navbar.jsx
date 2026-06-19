import React, { useState } from "react"
import Logo from "./../../assets/logo/logo.png"
import { IoMdSearch } from "react-icons/io"
import { FaCartShopping } from 'react-icons/fa6'
import DarkMode from '../Darkmode/DarkMode'
import { FaCaretDown } from 'react-icons/fa6'
import { FaUserCircle } from "react-icons/fa";
import { menu, dropDownList } from "./NavabrDetails"
import Cart from "../Cart/Cart"
import LoginForm from "../Login/LoginForm"




const Navbar = () => {

    const [isCartOpen, setIsCartOpen] = useState(false)
    const [showLoginForm, setShowLoginForm] = useState(false)

    return (
        <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            {/* upper navbar */}
            <div className='bg-primary/40 py-2'>
                <div className='container flex items-center justify-between '>
                    {/*LOGO */}
                    <div>
                        <div className="flex items-center gap-3">
                            <a href='#' className='font-bold font-2xl sm:font-3xl flex gap-2 items-center'>
                                <img src={Logo} alt='' className='w-10' />
                                Ema shop
                            </a>
                            <div className="group">
                                <button 
                                onClick={() => setShowLoginForm(true)}
                                className=' bg-primary  dark:bg-gray-800 transition-all duration-200 text-white
                                 flex items-center gap-1 group rounded-full group-hover:px-1 group-hover:py-1'>
                                    <span className='hidden group-hover:block transition-all duration-1000'>
                                        Login
                                    </span>
                                    <FaUserCircle className='text-2xl group-hover:text-md cursor-pointer text-white drop-shadow-sm' />
                                </button>
                            </div>
                        </div>
                        {showLoginForm && <LoginForm CloseHandler={() => setShowLoginForm(false)}/>}
                    </div>
                    {/*Search bar - order & darkmode btn*/}
                    <div className='flex justify-between items-center gap-4'>

                        {/*search bar */}
                        <div className='group relative hidden sm:block'>
                            <input
                                type="text"
                                placeholder='search'
                                className='w-[200px] sm:w-[200px] group-hover:w-[250px] transition-all duration-300 rounded-full 
                                      border border-gray-300 px-2 py-1 focus:outline-none focus:border-primary
                                      dark:border-gray-500 dark:bg-gray-800'  />
                            <IoMdSearch className='text-gray-500 group-hover:text-primary absolute top-1/2 right-3 -translate-y-1/2' />
                        </div>

                        {/*order button */}
                        <button
                            className='bg-primary  dark:bg-gray-800 transition-all duration-200 text-white
                                py-1 px-2 flex items-center gap-3 group rounded-full'
                            onClick={() => setIsCartOpen(true)}
                        >
                            <span className='hidden group-hover:block transition-all duration-200'>
                                Order
                            </span>
                            <FaCartShopping className='text-xl cursor-pointer text-white drop-shadow-sm' />
                        </button>

                        {/*darkmode switch button */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>

            {/* lower navbar */}
            <div className=' justify-center hidden sm:flex '>
                <ul className='sm:flex justify-center items-center gap-5' >
                    {menu.map((data) => (
                        <li key={data.id}>
                            <a className='inline-block px-4 hover:text-primary hover:font-bold duration-200' href={data.link}>{data.name}</a>
                        </li>
                    ))}
                    {/**drop down menu */}
                    <li className="group relative cursor-pointer">
                        <a href='#' className='flex items-center gap-[2px] py-2 group hover:text-primary hover:font-bold'>
                            Trending Items
                            <span>
                                <FaCaretDown className='transition-all duratin-300 group-hover:rotate-180' />
                            </span>
                        </a>
                        <div className="absolute z-[999] hidden group-hover:block w-[150px]
                        p-2 bg-white text-black rounded-br-md rounded-bl-md shadow-sm">
                            <ul>
                                {dropDownList.map((data) => (
                                    <li key={data.id}>
                                        <a className="inline-block w-full text-sm p-2 rounded-md hover:bg-primary/20" href={data.link}>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            {isCartOpen && <Cart setIsCartOpen={setIsCartOpen} />}
           
        </div>
    )
}

export default Navbar
