import React from 'react'
import { useGetIplJerseryQuery } from '../../../services/cricketApi'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './products.slice'
import { useNavigate } from 'react-router-dom'
import Cricketball from '../../../assets/bestCricBallAni.png'

function ProductsList(){

    const {isLoading, data}  = useGetIplJerseryQuery()
    const dispatch   = useDispatch()
    const {cart} =  useSelector(state=>state.products)
    const navigate = useNavigate()

    function goToCart(productId){

        return (
            cart.find((cartProduct)=>{
                return cartProduct.id == productId
            })
        )
    }

    return (<section>
        
               
                    {isLoading && <><img src= {Cricketball} className='cricBall' /> <b>Loading....</b></>}

               
             {!isLoading &&
             
                <ul className='d-flex flex-wrap m-5 p-0 justify-content-center' type='none'>{

                     data?.map((product)=>{
                        return <li className='m-3 rounded-2 overflow-hidden border border-dark d-flex flex-column' style={{width:'200px'}}>
                                    <img src={product.jerseyImage} width='200px' height='200px'/>
                                    <div className='d-flex flex-column justify-content-between' style={{height:'130px'}}>
                                    <p className='p-2 text-center text-light  '>{product.productName.split(' Official Team Jersey')}</p>
                                    <div className='d-flex align-items-center justify-content-evenly border-top border-dark'>
                                    <p className='m-0 p-2'>price : <i class="bi bi-currency-rupee "></i>{product.price}</p>
                                    { !goToCart(product.id)  &&
                                       <i class="bi bi-cart-plus-fill fs-4" onClick = {()=>{dispatch(addToCart(product))}}></i>
                                    }
                                    
                                    {goToCart(product.id)  && <>
                                       <i class="bi bi-arrow-up-right-circle-fill fs-5" onClick={()=>{navigate('/products/cart')}}></i>
                                       </>
                                    }
                                    </div>

                                    </div>
                              </li>
                      })
                    }
                </ul>
             } 
    </section>)
}

export default ProductsList