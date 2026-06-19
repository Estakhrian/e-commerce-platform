import React from 'react'
import { FooterLinks, BannerImgStyle} from './FooterDetails'
import Footerlogo from "../../assets/logo/logo.png"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'



const Footer = () => {
    return (
        <div style={BannerImgStyle} className='text-white flex flex-col justify-center items-center'>
            <div className='container'>
                <div className='grid md:grid-cols-3 py-10 pt-5'>
                    {/**company details */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-2xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'>
                            <img src={Footerlogo} className='max-w-[50px]' />
                            Ema shop</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur consequuntur possimus est exercitationem. Magni, inventore!</p>
                    </div>

                    {/*footer details */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10' id='social-media'>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-lg text-lg font-bold sm:text-left text-justify mb-3'>
                                Important Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link) => (
                                    <li key={link.id} className='cursor-pointer  hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='py-8 px-4'>
                            <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>
                                Links</h1>
                            <ul className='flex flex-col gap-3'>
                                {FooterLinks.map((link) => (
                                    <li key={link.id} className='cursor-pointer  hover:text-primary hover:translate-x-1 duration-300 text-gray-200'>
                                        <span>{link.title}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/**social links */}
                        <div className='flex items-center justify-center sm:items-start gap-7'>
                            <div className='felx justify-center mt-10 items-center'>
                                <a href='#'>
                                    <FaInstagram className='text-2xl my-2  hover:text-primary hover:translate-x-1 duration-300' />
                                </a>
                                <a href='#'>
                                    <FaFacebook className='text-2xl my-2  hover:text-primary hover:translate-x-1 duration-300' />
                                </a>
                                <a href='#'>
                                    <FaLinkedinIn className='text-2xl my-2 hover:text-primary hover:translate-x-1 duration-300' />
                                </a>
                            </div>
                            <div className='mt-10'>
                                <div className='flex items-center gap-3 my-2 cursor-pointer  hover:text-primary hover:translate-x-1 duration-300'>
                                    <FaLocationArrow />
                                    <p>Shiraz.iran</p>
                                </div>
                                <div className='flex items-center gap-3 my-2 cursor-pointer hover:text-primary hover:translate-x-1 duration-300'>
                                    <FaMobileAlt />
                                    <p>0917123456</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className='text-black '>Design By AlirezaEstakhrian</p>
        </div>
    )
}

export default Footer
