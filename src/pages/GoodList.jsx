import React from 'react'
import Goods from './Goods'

export default function GoodList(props) {
    const {item,addCardToBasket}=props
  return (
    <>
        {
                item.map((elem) => {
                    return (
                        <Goods addCardToBasket={addCardToBasket} key={elem.id} {...elem}/>
                    )
                })
            }
    </>
  )
}
