import React, { useContext } from 'react'
import { ShopContext } from '../context'
import Goods from './Goods'

export default function GoodList(props) {
    const {dataPlayer}=useContext(ShopContext)
  return (
    <>  
        {
                dataPlayer.length!==0 ?
                dataPlayer.map((elem) => {
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
