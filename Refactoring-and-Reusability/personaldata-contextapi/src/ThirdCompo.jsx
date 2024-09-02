import React, { useContext } from 'react' 
import MyContext from './MyContext'

function Third()
{

    var userDetails = useContext(MyContext)
    // userDetails lo manam mycontext nunchi vachina data ni dantloki velthadi 

   const {firstName, lastName,age,gender,profilePic} = userDetails
            //  console.log(lastName)
            //  console.log(age)
            console.log(profilePic)
    return (
        <div className="Box">
            <h2>
                Third Component 
            </h2>
            <div style={{display:'flex', gap:'20px'}}>
                 
                 <img src = {profilePic} width="100px" style={{ borderRadius:"50%", border:"2px solid black"}}/>
                 <h3 style={{display:'inline-block'}}>
                    Name : {firstName + " " + lastName }
                    <br/>  
                    Age : {age}
                    <br/>
                    Gender : {gender}
                     </h3>

                 
            </div>
            
        </div>
    )
}

export default Third 


                //     Object.keys(userDetails).map((el)=>{
                //         return (
                
                //         // //   <li>{(el==='profilePic')&& 
                //         // //         <img src= {userDetails[el]} width="300px;"/> 
                                 
                //         // //       } 
                //         //    </li>      

                //         // <li>{el} : {userDetails[el]}</li>
                            
                //         )
                //     })