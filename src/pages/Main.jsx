import React, { useContext, useEffect, useState } from 'react'
import { API_KEY } from '../config';
import GoodList from './GoodList';
import Loader from './Loader/Loader';
import ShoppinCart from './ShoppinCart';
import { ToastContainer, } from 'react-toastify';
import BasketList from './BasketList';
import Error from './Error/Error';
import { ShopContext } from '../context';


export default function Main() {
    
    const {setGoods,goods,filterData,isShowBasket}=useContext(ShopContext)
    const contextEl = document.location.pathname.substring(1, document.location.pathname.length - 1)
    const [loading, setLoading] = useState(true);
    const [error,setError]=useState(false)


    useEffect(() => {
        fetch(`https://fortniteapi.io/v2/items/list?lang=${contextEl}`, {
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

    },[contextEl]);
    
    useEffect(()=>{
        const newData=goods.filter((item,index) => index<10)
        filterData(newData)
    },[goods])

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
                <div style={{display:'flex', paddingRight:'10px', width:'100%',justifyContent:'right',textAlign:'right'}}> <button style={{textAlign:'right'}}  className='btn blue dark3' >See More</button></div>
                    </div>
                </div> 
            </div>
        </>
    )
}
