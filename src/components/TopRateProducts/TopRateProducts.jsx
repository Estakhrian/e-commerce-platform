import React  from 'react'
import topProductsDetails from "./../../Backend/topProductsDetails"
import { FaStar } from 'react-icons/fa6'
import { useCart } from '../../Context/CartContext'


const TopRateProducts = () => {

    const { addToCart } = useCart()

    return (
        <div>
            <div className='container mb-16'>
                {/* header section */}
                <div className='text-left mb-12 '>
                    <p className='text-sm text-primary' data-aos="fade-up" data-aos-delay="100">Top Rated Products for you</p>
                    <h1 className='text-3xl font-bold' data-aos="fade-up" data-aos-delay="100">Best Products</h1>
                    <p className='text-sm text-gray-400 mt-2' data-aos="fade-up" data-aos-delay="100">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, aliquid.
                    </p>
                </div>

                {/**body section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-20 md:grid-cols-3 lg:grid-cols-4 lg:gap-8
                place-items-center'>
                    {topProductsDetails.map((data) => (
                        <div key={data.id} data-aos="zoom-in" data-aos-delay="200" className='flex flex-col gap-16 rounded-2xl bg-white dark:text-white dark:bg-gray-800 hover:bg-gray-800
                        dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] h-[380px] sm:mx-3 lg:mx-0'>
                            {/**image section */}
                            <div className="h-[100px]">
                                <img
                                    alt=''
                                    src={data.img}
                                    className='max-w-[140px] block mt-2 mx-auto transform group-hover:-translate-y-12 group-hover:scale-105 duration-700 drop-shadow-md' />
                            </div>

                            {/**details section */}
                            <div className='p-4 flex flex-col items-center justify-start text-center transform group-hover:-translate-y-10 duration-500'>
                                {/*star rating */}
                                <div className='w-full flex items-center justify-center gap-1 mt-3'>
                                    <FaStar className='text-yellow-500 dark:group-hover:text-yellow-200' />
                                    <FaStar className='text-yellow-500  dark:group-hover:text-yellow-200' />
                                    <FaStar className='text-yellow-500  dark:group-hover:text-yellow-200' />
                                </div>
                                {/**text section */}
                                <h1 className='text-xl font-bold mt-1'>{data.title}</h1>
                                <p>${data.price}</p>
                                <p className='text-gray-500 my-3 group-hover:text-white duration-100 text-sm line-clamp-2'>{data.description}</p>
                                <button className='bg-primary group-hover:bg-white group-hover:text-primary transition-all duration-200 text-white
                                py-1 px-4 flex items-center gap-3 group rounded-full'
                                    onClick= {() => addToCart(data)} >Order Now</button>

                        </div>
                        </div>
                    ))}
            </div>
        </div>
        </div >
    )
}

export default TopRateProducts
