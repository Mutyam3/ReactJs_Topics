import React, { useEffect } from 'react'
import items from './Items'

function Cart()
{

    const [itemsArray , setItemsArray] = React.useState([...items])
    const [cartItemsTotal, setCartItemsTotal] = React.useState(itemsArray.length)
    const [cartTotal, setCartTotal] = React.useState(0)

    function decFn(i)
    {
        var temp = [...itemsArray]
        if(temp[i].quantity > 0)
        {
             temp[i].quantity--  
             setCartItemsTotal(cartItemsTotal-1)
             var total  = cartTotal - ( 1 * temp[i].price)
             setCartTotal(total)
             console.log(total)
        }
            setItemsArray([...temp])
            //console.log(temp)
    }


    function incFn(i)
    {
        var temp = [...itemsArray]
         temp[i].quantity++ 

        console.log(temp)
        // setItemsArray([...temp])
        setCartItemsTotal(cartItemsTotal+1)
       // console.log(cartTotal + temp[i].itemTotal*temp[i].price)
       var total  = cartTotal + ( 1 * temp[i].price )
                    setCartTotal(total)
                    console.log(total)
        setItemsArray([...temp])
    }

    function res()
    {
        
        var temp = [...itemsArray]
        
        for(var i = 0; i<=temp.length-1;i++)
        {
            temp[i].quantity = 0
           
        }
      //  console.log(temp)
        setItemsArray([...temp])
        setCartItemsTotal(0)
        setCartTotal(0)
        
    }


     React.useEffect(()=>{
            const p =  itemsArray.reduce((a,c)=>{

                return a + (c.quantity*c.price)
            },0)
            console.log(p)
        
            setCartTotal(p)
          },[]) // infinite loop lo pokunda reference ni memorise chesukoni untadi 


    return (
        <div>
           
         <ul id="innerDiv">
            <div id="header">
                <p style={{color:"white"}}>Cart items : <span >{cartItemsTotal}</span></p>
                <p style={{color:"white"}}>Cart Total : <span>${cartTotal}</span></p>
                <button onClick={()=>{res()}} style={{backgroundColor:"crimson",color: "white"}}>Reset</button>
            </div>
                {
                    itemsArray.map((el, ind)=>{
                        return <div>
                                    <span>{el.description}</span>
                                <div>
                                    <button style={{backgroundColor:"grey",color:"white"}}>{el.quantity}</button> 

                                    <span>X</span>

                                    <button style={{backgroundColor:"grey", color:"white"}}><b>${el.price}</b></button>

                                    <span>=</span>

                                    <button style={{backgroundColor:"yellow"}}>${el.quantity * el.price}</button>

                                    <button onClick ={()=>{decFn(ind)}} style={{backgroundColor:"red", color:"whitesmoke"}}><b>-</b></button>

                                    <button onClick ={()=>{incFn(ind)}} style={{backgroundColor:"green", color:"whitesmoke"}}><b>+</b></button>
                                </div>

                            </div>
                    }) 
                }
            </ul>
        </div>
    )
}

export default Cart 

// we can use disabled option for button conditionally 
{/* <button disabled={el.quantity== 0} ></button> */}