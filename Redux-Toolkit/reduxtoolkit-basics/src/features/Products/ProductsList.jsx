import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './productsSlice'
import { Link } from 'react-router-dom'

function ProductsList()
{

   const {products} =  useSelector(state=>state.products)

   const dispatch = useDispatch()

    //    console.log('proudcts ::', products)

    return (
        <section>
            <h1>Products</h1>
           
            {
                products?.map((el)=>{
                    return <li>{el.title.slice(0,20)}
                      &nbsp;&nbsp;&nbsp;<Link to='/cart'><button onClick = {()=>{dispatch(addToCart(el))}}>Add to Cart</button></Link></li>
                })
            }
        </section>
    )
}

export default ProductsList