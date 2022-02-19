import React from 'react'

export default function BasketItem(props) {
    const {id,name,index,price=0,quantity=0,deleteCardFromBasket,incrementQuantity,decrementQuantity}=props
  
    return (  
        <tr className='basketitem'>
            <td>{index+1}</td>
            <td>{name}</td>
            <td><button className='btn green darken-5' onClick={()=>incrementQuantity(id)}><i className="fa-solid fa-plus"  ></i></button><button className='btn blue darken-5' disabled>{quantity}</button><button className='btn red darken-5' onClick={()=>decrementQuantity(id)}><i className="fa-solid fa-minus"></i></button></td>
            <td>{price*quantity}</td>
            <td><i onClick={()=>deleteCardFromBasket(id)} className="fa-solid fa-trash-can"></i></td>
        </tr>
  )
}
