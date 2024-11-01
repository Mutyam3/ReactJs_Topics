import React from 'react'
import { useDelProductsMutation, useGetProductsQuery, useLazyGetProductsQuery } from '../../services/products'
import AddProducts from './AddProducts'

function Products()
{

    const {isLoading, data} = useGetProductsQuery()
    const [delProductFn]  = useDelProductsMutation()
    const [rqFn]   =  useLazyGetProductsQuery()

    function handleDeleteFn(id)
    {
        delProductFn(id).then((res)=>{
            rqFn()
        })
    }

    return (
        <section>

        <h1>Products</h1>

        <AddProducts fn = {rqFn}/>

        <br/><br/><br/><br/>

            {
                isLoading && (
                    <h2>Babu data vastundi konchem aagu</h2>
                )
            }

            {
                !isLoading && (
                    <div>
                        {
                            data.map((el)=>{
                                return <li style={{display : 'flex', width : '300px', justifyContent: 'space-between'}}><div>{el.title.slice(0,20)}</div>
                                           <button onClick = {()=>{handleDeleteFn(el.id)}}>Delete</button>
                                       </li>
                            })
                        }
                    </div>
                )

            }



        </section>
    )
}

export default Products