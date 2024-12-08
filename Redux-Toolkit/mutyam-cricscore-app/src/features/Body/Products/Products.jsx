import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet , Link} from 'react-router-dom'


function Products()
{

    const {cart} = useSelector(state=>state.products)

     
    return(
        <section>

            <div className=' m-3  d-flex justify-content-evenly align-items-center '>
                  <Link to='/products/productsList' className='text-decoration-none text-light'><h5>Products</h5></Link>
                  <Link to='/products/cart' className='text-decoration-none text-light '>
                  {
                    cart.length==0 && <i class="bi bi-cart fs-2 text-primary position-relative"><span className='position-absolute top-0 start-50 translate-middle badge fs-4 text-warning'>{cart.length}</span></i>
                  }

                  {
                    cart.length>0 && <i class="bi bi-cart-fill fs-2 text-primary position-relative"><span className='position-absolute top-0 start-50 translate-middle badge fs-4 text-warning'>{cart.length}</span></i>
                  }


                  
                  </Link>

            </div>

            <div>
                    
                    <Outlet/>
                     
             </div>

             
        </section>
    )
}

export default Products