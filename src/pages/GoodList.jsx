import React from 'react'
import Goods from './Goods'

export default function GoodList(props) {
    const {item,addCardToBasket}=props
    console.log(item)
  return (
    <>  
        {
                item.length!==0 ?
                item.map((elem) => {
                    return (
                        <Goods addCardToBasket={addCardToBasket} key={elem.id} icon={elem.images.icon}  {...elem}/>  
                    )
                })
                :
                 <h1>Nothing Found</h1>
        }
    </>
  )
}
