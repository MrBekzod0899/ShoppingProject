import React, { useContext } from 'react'
import { ShopContext } from '../context'
import BasketItem from './BasketItem'

export default function BasketList() {
    const { order, showBasket, totalPrice } = useContext(ShopContext)
    return (
        <div className='bsk' onClick={showBasket}>
            <div className='container basketlist hoverable' onClick={e => e.stopPropagation(e)} >
                <div className='row'>
                    <i onClick={showBasket} className="fa-solid fa-xmark close"></i>
                    <div className="col l3 m4 s10">
                        {
                            order.length ?
                                <div>
                                    <table className='striped highlight'>
                                        <thead >
                                            <tr className='centered thead'>
                                                <th>No</th>
                                                <th>Product</th>
                                                <th>action</th>
                                                <th>Price</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                order.map((item, index) => {
                                                    return (
                                                        <BasketItem
                                                            key={index+1}
                                                            index={index}
                                                            {...item}
                                                        />
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                    <p className='totalPrice'><span>Total Price:</span><span>{totalPrice}<b>$</b></span></p>
                                </div>
                                : <h4>Items not found</h4>
                        }
                    </div>
                </div>

            </div>
        </div>

    )
}
