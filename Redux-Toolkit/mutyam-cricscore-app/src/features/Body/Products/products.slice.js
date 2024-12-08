import  {createSlice} from '@reduxjs/toolkit'


const initialState = {

    cart : [],
    cartCalc: {productCount : 1 },
    cartTotalPrice : 0
}

const productsSlice = createSlice({

    name : 'productSlice',
    initialState, 
    reducers : {
         
        addToCart : (state, action)=>{
               state.cart.push({...action.payload,...state.cartCalc})
        },

        incProductCount : (state, action)=>{
           const temp = state.cart.map((product)=>{
                    if(product.id == action.payload.id){
                       product.productCount++ 
                       product.lineTotalPrice = (product.productCount * product.price) 
                    }
                    return product
            })

            state.cart = temp
        },

        decProductCount : (state, action)=>{
            const temp = state.cart.map((product)=>{
                     if(product.id == action.payload.id){
                        product.productCount--
                        product.lineTotalPrice = (product.productCount * product.price) 
                     }
                     return product
             })
 
             state.cart = temp
         }, 

         deleteProduct : (state, action) => {

              const temp =  state.cart.filter((product)=>{
                       if(product.id == action.payload){
                             return false
                       }
                       else 
                       {
                              return true
                       }
                })

                state.cart = temp
            
         }




    }

})

export const {addToCart, incProductCount, decProductCount, deleteProduct }  = productsSlice.actions 
const productReducer = productsSlice.reducer 
export default  productReducer
