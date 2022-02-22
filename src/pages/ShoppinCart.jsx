import React, { useContext } from 'react'
import { ShopContext } from '../context'

export default function ShoppinCart() {
    
    const {showBasket,order}= useContext(ShopContext)

  return (
    <div className='shopping-cart'>
        <div className='likedItems'>
        <span className='red-text text-lighten-1'><i className="fa-solid fa-heart"></i></span>
        </div>
       <div className='carts purple darken-1' onClick={showBasket}>
        <span className=''><i className="fa-solid fa-cart-shopping"></i></span>
        <span>{order.length}</span>
       </div>
    </div>
  )
}
