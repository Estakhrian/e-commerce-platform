import React  from 'react'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay } from 'swiper/modules'
import imageList from './sliderDetails'


const Hero = () => {



    return (
        <div className=' relative overflow-hidden min-h-[550px]
    sm:min-h-[600px] bg-gray-100 md:flex justify-center items-center
    dark:bg-black/30 dark:text-white'>

            {/* background */}
            <div className='h-[600px] w-[600px] bg-primary/40 absolute -top-1/2 right-0
      rounded-3xl rotate-45 '>
            </div>

            {/* hero section */}
            <Swiper slidesPerView={1}
                loop={true}
                modules={[Autoplay]}
                autoplay={{ delay: 3000 }}
                speed={1000}>
                {imageList.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div className='container mt-[-10px] mb-11 pb-8 sm:pb-0 flex flex-col-reverse md:flex-row'>
                            <div >
                                {/*text section */}
                                <div className='grid grid-cols-1'>
                                    <div className='flex flex-col mt-[-45px] md:mt-[0px] lg:mt-[120px] lg:mr-6 items-center lg:justify-start gap-4 pt-12  sm:pt-0 text-center md:text-left
                         relative z-10'>
                                        <h1 className='text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold'
                                        >{data.title}</h1>
                                        <p className='text-sm' >{data.description}
                                        </p>
                                        <div className='text-sm'>
                                            <button className='bg-primary transition-all duration-200 text-white
                                py-1 px-4 flex items-center gap-3 group rounded-full'>Order Now</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/*img section */}
                            <div className=' flex md:mr-[20px] lg:mb-[100px]' >
                                <div className='w-[350px] md:ml-[80px]'>
                                    <img alt='' src={data.img} className='w-[400px] h-[300px] object-contain sm:h-[400px] sm:w-[450px] sm:scale-125 ' />
                                </div>
                            </div>
                        </div >
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default Hero





