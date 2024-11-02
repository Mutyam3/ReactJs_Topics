import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

  export const productsApi = createApi(
    {
        name : 'productsApi',
        baseQuery : fetchBaseQuery({baseUrl : 'http://localhost:5000/products'}),
        endpoints : (builder)=>({

            getProducts : builder.query({
                   query : ()=> '/' 
            }),

            getProductsById : builder.query({
                   query : (id)=> `/${id}`
            }),

            delProducts : builder.mutation(
                  {
                       query : (id)=> ({
                           
                              url : `/${id}`,
                              method : 'DELETE',

                           
                       }),

                  }
            ),

            addProducts : builder.mutation(
                {
                      query : (newProduct) => ({
                             url : '/',
                             method : 'POST',
                             body : newProduct
                      })
                     
                }
            ),

            updateProducts : builder.mutation(
              {
                   query : (product)  => ({
                           url :  `/${product.id}`,
                           method : 'PUT',
                           body :  product 
                   }) 
              }
            )
        })
    }
  )

  export  const {useGetProductsQuery, useDelProductsMutation, useLazyGetProductsQuery, useAddProductsMutation, useGetProductsByIdQuery, useUpdateProductsMutation} = productsApi

  