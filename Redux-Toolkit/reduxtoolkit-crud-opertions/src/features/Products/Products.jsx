import React from 'react'
import { useDelProductsMutation, useGetProductsQuery, useLazyGetProductsQuery } from '../../services/products'
import AddProducts from './AddProducts'
import { useNavigate } from 'react-router-dom'


function Products()
{

    const {isLoading, data} = useGetProductsQuery()
    const [delProductFn]  = useDelProductsMutation()
    const [rqFn]   =  useLazyGetProductsQuery()
        const navigate  =   useNavigate()

    function handleDeleteFn(id)
    {
        delProductFn(id).then((res)=>{
            rqFn()
        })
    }


    function handleEditFn(id){

         navigate(`/editProducts/${id}`)      
        
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
                                           <button onClick = {()=>{handleEditFn(el.id)}}>Edit</button>
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