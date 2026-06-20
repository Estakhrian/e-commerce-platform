import React from 'react'
import { useCart } from '../../Context/CartContext'
import { MdDeleteForever } from "react-icons/md";



const Cart = ({ setIsCartOpen }) => {

  const { CartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart()

  const totalPrice = CartItems.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)
  console.log(CartItems)
  return (
    <div className='fixed top-0 right-0 w-full sm:w-96 h-screen bg-gray-800 dark:bg-gray-700 z-[99999] text-white p-3'>
      <div>
        <div>
          {/**header cart */}
          <div className='flex justify-between px-3 mb-2'>
            <h2 className='text-xl font-bold'>Cart</h2>
            <button onClick={() => setIsCartOpen(false)} className='text-sm font-bold'>X</button>
          </div>
          {/**show products */}
          <div>
            <div className='flex-1 overflow-y-auto max-h-[80vh]'>
              {CartItems.length === 0 ? (
                <p>your cart is empty </p>
              ) : (
                CartItems.map((item) => (
                  <div key={item.id} className='flex bg-gray-500 rounded-md p-3 mb-3'>
                    <div className='flex gap-16 items-center'>
                      {/**img and details */}
                      <div className='flex'>
                        <img src={item.img} className='w-32 h-32 sm:w-16 sm:h-16 rounded-md mr-2' />
                        <div className='flex flex-col items-start justify-center'>
                          <h3 className='text-sm font-bold'>{item.title}</h3>
                          <p className='text-xs'>{item.color}</p>
                          <p>{item.price}</p>
                        </div>
                      </div>
                      {/**delete button */}
                      <div className='flex flex-col'>
                        <div>
                          <button className='text-lg' onClick={() => removeFromCart(item.id)}>
                            <MdDeleteForever />
                          </button>
                        </div>
                        <div className='flex gap-2'>
                          <button onClick={() => decreaseQuantity(item.id)}>-</button>
                          <p>{item.quantity}</p>
                          <button onClick={() => increaseQuantity(item.id)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}

            </div>
          </div>
        </div>
        {/* bottomcart */}
        <div className='flex items-center justify-between border-t p-2 fixed bg-gray-800 dark:bg-gray-700 bottom-1 w-full sm:w-96 mb-2'>
          <div className='flex gap-1'>
            <span>total price :</span>
            <span>${totalPrice}</span>
          </div>
          {totalPrice > 0 && <button className=' bg-primary text-white py-1 px-2 rounded-xl duration-300 hover:bg-white hover:text-primary mt-3 mr-4'>Checkout</button>}
        </div>
      </div>
    </div>
  )
}

export default Cart
