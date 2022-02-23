/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { API_KEY } from '../config';
import GoodList from './GoodList';
import Loader from './Loader/Loader';
import ShoppinCart from './ShoppinCart';
import { ToastContainer, } from 'react-toastify';
import BasketList from './BasketList';
import Error from './Error/Error';
import { ShopContext } from '../context';
import { MainContext } from '../MainContext';

export default function Main() {
    const [language]=useContext(MainContext)
    const {setGoods,goods,filterData,isShowBasket,showMore,seeMore,order}=useContext(ShopContext)
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState(false);
    const [totalPrice,setTotalPrice]=useState(0)

    useEffect(()=>{
        let prices=0;
            order.length &&
                order.forEach((item) => {
                    prices+=item.quantity*item.price
            })
            setTotalPrice(prices)
    },[order])

    useEffect(() => {
        fetch(`https://fortniteapi.io/v2/items/list?lang=${language}`, {
            headers: {
                Authorization: API_KEY
            }
        })
        .then(res => res.json())
        .then(data => {
            setGoods(data.items)
            setLoading(false)
            setError(false)
        })
        .catch(err=> {
            setError(true)
        })
    },[language]);
    
    useEffect(()=>{
        const newData=goods.filter((item,index) => index<showMore)
        filterData(newData)
    },[goods,showMore])

    return (
        <>
            {
            loading ? <Loader /> :
               error ? <Error/> :
                <div className='main container-fluid-m container-fluid-l container-sm' >
                    <div className="row">       
                        {
                            isShowBasket &&
                            <BasketList
                              total={totalPrice}
                            />
                        }
                        <ToastContainer />
                        <ShoppinCart />
                        <GoodList  />
                        <br/>
                    </div>
                    
                </div>
            }
            <div className="container-fluid">
            <div className="row">
                <div className="col l12 m12 s11">
                <div style={{display:'flex', paddingRight:'10px', width:'100%',justifyContent:'right',textAlign:'right'}}> <button style={{textAlign:'right'}}  className='btn blue dark3' onClick={seeMore} >See More</button></div>
                    </div>
                </div> 
            </div>
        </>
    )
}
