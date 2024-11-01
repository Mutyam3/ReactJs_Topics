import React from 'react'
import { useGetProductsQuery } from '../../services/products'

function Products()
{

    const {isLoading, data} = useGetProductsQuery()

    return (
        <section>

        <h1>Products</h1>

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
                                return <li>{el.title.slice(0,20)}</li>
                            })
                        }
                    </div>
                )

            }



        </section>
    )
}

export default Products