import React, { useEffect, useState } from 'react'
import { API_KEY } from '../config';
import GoodList from './GoodList';
import Loader from './Loader/Loader';
import ShoppinCart from './ShoppinCart';
import { ToastContainer, toast } from 'react-toastify';
import BasketList from './BasketList';
import Error from './Error/Error';


export default function Main() {
    const contextEl = document.location.pathname.substring(1, document.location.pathname.length - 1)
    const [loading, setLoading] = useState(true);
    const [goods, setGoods] = useState([]);
    const [isShowBasket, setIsShowBasket] = useState(false)
    const [order, setOrder] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [dataPlayer,setDataPlayer]=useState([])
    const [seeMore,setSeeMore]=useState(10)
    const [error,setError]=useState(false)

    const addCardToBasket = (item) => {
        const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        }
        else {
            const newOrder = order.map((elem, index) => {
                if (index === itemIndex) {
                    return {
                        ...elem,
                        quantity: elem.quantity + 1
                    }
                }
                else {
                    return elem
                }
            })
            setOrder(newOrder)
        }
        toast.success("you added item to basket successfully", {
            autoClose: 2000,
        })
        console.log(totalPrice)
    }

    const deleteCardFromBasket = (itemId) => {
        const newOrder = order.filter(item => item.id !== itemId)
        console.log(newOrder)
        setOrder(newOrder)
        toast.error("Item deleted successfully", {
            autoClose: 1000
        }
        )
    }

    // increment Product Item
    const incrementQuantity = (itemId) => {
        const newOrder = order.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            else {
                return item
            }
        })
        setOrder(newOrder)
    }


    // decrement Product Item
    const decrementQuantity = (itemId) => {
        const newOrder = order.map((item) => {
            if (item.id === itemId) {
                return {
                    ...item,
                    quantity: item.quantity > 0 ? item.quantity - 1 : 0
                }
            }
            else {
                return item
            }
        })
        setOrder(newOrder)
    }

    const showBasket = () => {
        setIsShowBasket(!isShowBasket)
    }
    const seeMoreFunc=()=>{
        setSeeMore(prev=>prev+10)
    }

    useEffect(() => {
        let totalPrice = 0;
        order.length &&
            order.forEach((item) => {
                totalPrice += item.price * item.quantity;
            })
        setTotalPrice(totalPrice)
    }, [order])

    useEffect(() => {
        fetch(`https://fortniteapi.io/v2/items/list?lang=${contextEl}`, {
            headers: {
                Authorization: API_KEY
            }
        })
        .then(res => res.json())
        .then(data => {
            data.items ?
            setDataPlayer(data.items) : setError(true)
            setLoading(false)
        })
        .catch(err=> {
            setError(true)
        })
        const newData=dataPlayer.filter((item,index) => index<seeMore )
        setGoods(newData)
    }, [seeMore,contextEl,dataPlayer]);

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
                                order={order}
                                showBasket={showBasket}
                                deleteCardFromBasket={deleteCardFromBasket}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                totalPrice={totalPrice}
                            />
                        }
                        <ToastContainer />
                        <ShoppinCart items={order} showBasket={showBasket} />
                        <GoodList addCardToBasket={addCardToBasket} item={goods} />
                        <br/>
                    </div>
                    
                </div>
            }
            <div className="container-fluid">
            <div className="row">
                <div className="col l12 m12 s11">
                <div style={{display:'flex', paddingRight:'10px', width:'100%',justifyContent:'right',textAlign:'right'}}> <button style={{textAlign:'right'}}  className='btn blue dark3' onClick={seeMoreFunc}>See More</button></div>
                    </div>
                </div> 
            </div>
        </>

    )
}
