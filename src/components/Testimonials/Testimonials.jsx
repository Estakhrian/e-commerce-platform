import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/autoplay"
import { Autoplay, Pagination } from 'swiper/modules'
import axios from 'axios'



const Testimonials = () => {

    const [testimonialsData, setTestimonialsData] = useState([])

    useEffect(() => {
        axios.get("https://raw.githubusercontent.com/Estakhrian/e-commerce-platform/refs/heads/main/db.json")
            .then(res => {
                console.log(res)
                setTestimonialsData(res.data.TestimonialData)
            })
    }, [])
    return (
        <div className='py-5 mb-20'>
            <div className='container'>
                {/**header section */}
                <div className='text-center mb-10 max-w-[600px] mx-auto'>
                    <p className='text-sm text-primary' data-aos="fade-up" >What our customers are saying</p>
                    <h1 className='text-3xl font-bold' data-aos="fade-up"  >Testimonials</h1>
                    <p className='text-xs text-gray-400' data-aos="fade-up" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. A possimus eaque iste!
                    </p>
                </div>

                {/**Testimonial card */}
                <div data-aos="zoom-in" className=' rounded-xl dark:text-white'>
                    <Swiper
                        loop={true}
                        loopAdditionalSlides={true}
                        slidesPerView={3}
                        spaceBetween={20}
                        modules={[Autoplay, Pagination]}

                        autoplay={{ delay: 3000 }}
                        speed={{
                            delay: 2000,
                            disabledOnInteraction: false
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                            },
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                        }}>
                        {testimonialsData.map((data) => (
                            <SwiperSlide key={data.id} className='h-auto'>
                                <div className='h-full flex flex-col gap-4 bg-white shadow-lg py-8 px-6 
                                rounded-xl m-3 dark:bg-gray-700'>
                                    <div className='mb-4'>
                                        <img src={data.img} alt=''
                                            className='rounded-full w-20 h-20' />
                                    </div>
                                    <div className='flex flex-col items-center gap-4'>
                                        <div className='space-y-3'>
                                            <p className='text-xs text-gray-500  dark:text-white'>{data.text}</p>
                                            <h1 className='text-xl font-bold text-black/80  dark:text-white'>{data.name}</h1>
                                        </div>

                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
