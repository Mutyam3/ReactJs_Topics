import React from 'react'

     function Child(props)
     {

        console.log("Namaste anna")
        // here u can check with useEffect without any dependency array
        // ide endhuku use chestam ante state update aina prathi sari ee function
        // call aithadi ade useEffect with empty dependency tho cheste matram 
        // ee component load ainapude function call jaruguthadi dani mounting time antaru

        return(
            <div className='App'>
                 <h1>Child Component</h1>
                <button onClick= {props.greet}>Greet</button>
            </div>
        )
     }

     export default React.memo(Child) 

     // manam React.memo use chesina sare child component rerender stop avvatam ledu 
     // React.memo anedi props lo changes lekapothene rerender avvakunda choosukuntadi child component ni 
     // kani props lo aa function reference vala props lo changes aithunai so react.memo child 
     // component ni stop cheyatle so dini callback hook dwara cheyochu

