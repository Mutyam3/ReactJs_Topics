import React from 'react'
import {useFormik} from 'formik'
import { useAddProductsMutation } from '../../services/products'

function AddProducts(props)
{

        const [addProductFn]  =  useAddProductsMutation()

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
                  
                addProductFn(values).then(()=>{
                    alert('product added successfully')
                    props.fn()
                })

              }

             })


    return(
        <section>
             
             <form onSubmit={ProductDetails.handleSubmit}>

                      Product Title :  <input type='text' name='title' onChange={ProductDetails.handleChange} /> <br/> 
                      Price : <input type='text'  name='price' onChange={ProductDetails.handleChange} /><br/>
                      Description : <input type='text' name='description' onChange={ProductDetails.handleChange}/><br/>
                      Category : <input type='text' name='category' onChange={ProductDetails.handleChange}/><br/>
                      Image : <input type='text'  name='image' onChange={ProductDetails.handleChange}/><br/>
                      rate : <input type='text'  name='rating.rate' onChange={ProductDetails.handleChange}/><br/>
                      count : <input type='text' name='rating.count' onChange={ProductDetails.handleChange} /><br/>

                      <button onClick = {()=>{}}>Add Product</button>

            </form>


        </section>
    )
}


export default AddProducts


// {
//     "id": 5,
//     "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
//     "price": 695,
//     "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
//     "category": "jewelery",
//     "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 400
//     }
//   }