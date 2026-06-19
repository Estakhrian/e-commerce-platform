import React from 'react'
import BannerImg from "../../assets/women/women2.jpg"
import { GrSecure } from 'react-icons/gr'
import { IoFastFood } from 'react-icons/io5'
import { GiFoodTruck } from 'react-icons/gi'
const Banner = () => {
    return (
        <div className='min-h-[550px] flex justify-center items-center py-10 sm:py-0'>
            <div className='container'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                    {/** image section */}
                    <div data-aos="zoom-in">
                        <img
                            src={BannerImg}
                            alt=''
                            className='max-w-[400px] h-[370px] w-full rounded-md mx-auto object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]' />
                    </div>

                    {/**text section */}
                    <div className='max-w-[400px] mx-auto text-center  sm:text-left'>
                        <h1 data-aos="fade-up" className='text-2xl sm:text-3xl font-bold mb-1 md:mb-5'>
                            Winter Sale up to Off
                        </h1>
                        <p data-aos="fade-up" className='text-sm mb-1 md:mb-5 text-gray-500 tracking-wide leading-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <div data-aos="fade-up" className='flex items-center gap-4 mb-1 md:mb-3'>
                            <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                            Quality Products
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4 mb-1 md:mb-3'>
                            <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                            Fast Delivery
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4 mb-1 md:mb-3'>
                            <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400' />
                            Easy Payment method
                        </div>
                        <div data-aos="fade-up" className='flex items-center gap-4 mb-1 md:mb-3'>
                            <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400' />
                            Get Offers
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
