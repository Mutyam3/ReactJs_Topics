import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decProductCount, deleteProduct, incProductCount } from './products.slice'


function Cart(){

    const {cart} = useSelector(state=>state.products)
    console.log(cart)
    const dispatch = useDispatch()
    


    return(
        <section className='m-5'>
                
            {
                cart && cart.map((cartProduct)=>{
                    return <div className='border border-light m-2 rounded-2 overflow-hidden d-flex align-items-center justify-content-between' >
                         
                          <div className='d-flex align-items-center gap-5 w-50'>
                          <img src={cartProduct.jerseyImage} width='150px' height='150px'/> 
                          <p className='w-25'>{cartProduct.productName}</p>
                          <p>price : <i class="bi bi-currency-rupee"></i>{cartProduct.price}</p>
                          </div>

                          <div className='border border-light rounded-2 d-flex justify-content-evenly align-items-center' style={{width:'120px'}}>
                               <span onClick ={()=>{dispatch(decProductCount({id :cartProduct.id}))}}><i class="bi bi-dash"></i></span>
                               <span className='count p-2'>{cartProduct.productCount}</span>
                               <span onClick ={()=>{dispatch(incProductCount({id :cartProduct.id}))}}><i class="bi bi-plus" ></i></span>
                            
                          </div>

                          <div onClick = {()=>{dispatch(deleteProduct(cartProduct.id))}}><i class="bi bi-trash3-fill fs-4 text-danger"></i></div>

                          <div className='m-5'>
                                 <h5>Total : <i class="bi bi-currency-rupee "></i>{cartProduct.price * cartProduct.productCount}</h5>   
                          </div>
                    </div>
                })
            }

            <div className='text-end m-5'>
               
                <h4>Grand Total : <i class="bi bi-currency-rupee"></i> {
                      cart && cart.reduce((acc,curr)=>{
                           const result = acc + curr.lineTotalPrice
                           return result
                      },0)
                }</h4>
            </div>
        </section>
    )
}

export default Cart