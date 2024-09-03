import React from "react";


function CounterHoc(OldComponent)
{

        function LogicComponent()
        {

            const [count, setCount] = React.useState(1)

            function inc()
            {
                setCount(count+1)
            }
            
            function dec()
            {
                setCount(count-1)
            }


            return (
               <OldComponent count = {count} inc = {inc} dec ={dec}>
                      
               </OldComponent>
            )
        }

        return LogicComponent


}


export default CounterHoc