import React, { useContext } from 'react'
import { ShopContext } from '../context'
import Goods from './Goods'

export default function GoodList(props) {
    const {dataPlayer}=useContext(ShopContext)
    console.log(dataPlayer)
  return (
    <>  
        {
                dataPlayer.length!==0 ?
                dataPlayer.map((elem) => {
                  console.log(elem)
                    return (
                        <Goods  key={elem.id} icon={elem.images.icon}  {...elem}/>  
                    )
                })
                :
                 <h1>Nothing Found</h1>
        }
    </>
  )
}
