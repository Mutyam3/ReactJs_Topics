import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetProductsByIdQuery, useUpdateProductsMutation } from '../../services/products'
import { useFormik } from 'formik'

function EditProducts()
{

        var {pid} = useParams()
        console.log(pid)

        const  {data, isLoading}  = useGetProductsByIdQuery(pid)

          const [updateProductFn]  =  useUpdateProductsMutation(pid)

        console.log(data)
        
        React.useEffect(()=>{

                ProductDetails.setValues( data)

        }, [data])


       const  ProductDetails =  useFormik({
         
        initialValues :  {
           title : '',
           price : '',
           description : '',
           category : '',
           image : '',
           rating : {
               rate : 0,
               count : 0
           },

        },  

         onSubmit : (values)=>{
         
                 console.log(values)
                 updateProductFn(values)

         }

        })

        

    return(
        <section>
              <h1>Edit Products</h1>
               
               {
                  isLoading && <h2>Aagu dora edit cheyali ante baaga thondare</h2>
               }


                   <form onSubmit={ProductDetails.handleSubmit}>

                           Product Title :  <input type='text' value= {ProductDetails.values?.title} name='title' onChange={ProductDetails.handleChange} /> <br/> 
                           Price : <input type='text' value= {ProductDetails.values?.price} name='price' onChange={ProductDetails.handleChange} /><br/>
                           Description : <input type='text'value= {ProductDetails.values?.description} name='description' onChange={ProductDetails.handleChange}/><br/>
                           Category : <input type='text' value= {ProductDetails.values?.category} name='category' onChange={ProductDetails.handleChange}/><br/>
                           Image : <input type='text' value= {ProductDetails.values?.image} name='image' onChange={ProductDetails.handleChange}/><br/>
                           rate : <input type='text' value= {ProductDetails.values?.rating.rate} name='rating.rate' onChange={ProductDetails.handleChange}/><br/>
                           count : <input type='text' value= {ProductDetails.values?.rating.count} name='rating.count' onChange={ProductDetails.handleChange} /><br/>

                           <button onClick = {()=>{}}>Update Product</button>

                   </form>
        </section>
    )
}

export default EditProducts