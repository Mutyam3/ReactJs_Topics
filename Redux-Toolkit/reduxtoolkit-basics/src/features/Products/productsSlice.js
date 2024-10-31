import { createSlice } from "@reduxjs/toolkit";
import products from './Products.json'


const initialState = {

    products,

    cartItems : []

}


export const productsSlice =  createSlice({

      name : 'products',

      initialState,

      reducers : {

             addToCart : (state, action)=>{
                    state.cartItems.push(action.payload)
             },


      }




})

export const {addToCart} = productsSlice.actions

const   productsReducer = productsSlice.reducer

export default productsReducer