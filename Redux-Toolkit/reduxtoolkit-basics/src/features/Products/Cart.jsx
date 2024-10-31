import React from 'react'
import { useSelector } from 'react-redux'

function Cart()
{

    const {cartItems} = useSelector(state=>state.products)

    return (
        <section>
            <h1>Cart</h1>

             {
                cartItems && cartItems.map((el)=>{
                    return <li>{el.title.slice(0,20)}</li>
                })
             }
        </section>
    )
}

export default Cart