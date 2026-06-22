import React  from 'react'
import { FaStar } from 'react-icons/fa6'

import { useCart } from '../../Context/CartContext'
import productsData from "./../../Backend/ProductDetails"

const Products = () => {


  const { addToCart } = useCart()




  return (
    <div className='mt-14 mb-20'>
      <div className='container'>

        {/*Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-sm text-primary' data-aos="fade-up" >Top Selling Products for you</p>
          <h1 className='text-3xl font-bold' data-aos="fade-up"  >Products</h1>
          <p className='text-xs text-gray-400' data-aos="fade-up" >Lorem ipsum dolor sit, amet consectetur adipisicing elit. A possimus eaque iste!
          </p>
        </div>

        {/**Body section */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
          lg:grid-cols-5 place-items-center gap-5'>
            {/**card section */}
            {productsData.map((data) => (
              <div key={data.id} className='space-y-3 mb-8'
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}>

                <img src={data.img} className='h-[220px] w-[150px] object-cover rounded-md' />
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <div className='flex gap-7 mt-1 sm:mt-2 md:mt-3'>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-500' />
                      <span>{data.rating}</span>
                    </div>
                    <div>
                      <p className='text-sm text-gray-600'>{data.color}</p>
                    </div>
                  </div>

                  <div className='flex gap-3 mt-1 sm:mt-2 md:mt-4 group'>
                    <p>${data.price}</p>
                    <button className='text-xs w-[80px] bg-primary group-hover:bg-gray-800 group-hover:text-primary transition-all duration-200 text-white
                                py-1 px-1 flex items-center gap-3 group rounded-full'
                      onClick={() => addToCart(data)}
                    >Add To Cart</button>

                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/**view all products  */}
        <div data-aos="fade-up" className='flex justify-center items-center'>
          <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-4 rounded-md'>
            View All Products
          </button>
        </div>
      </div>
    </div>
  )
}

export default Products
