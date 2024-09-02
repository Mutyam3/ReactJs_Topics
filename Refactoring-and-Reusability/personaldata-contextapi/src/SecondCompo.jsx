import React from 'react'
import Third from './ThirdCompo'
import MyContext from './MyContext'
function Second()
{
    var y = React.useContext(MyContext)
     return (
        <div className="Box">
            <h2>Second Component</h2>
            <div style={{display:'flex', gap:'20px'}}>
                 
                 <img src = {y.profilePic} width="100px" style={{ borderRadius:"50%", border:"2px solid black"}}/>
                 <h3 style={{display:'inline-block'}}>
                    Name : {y.firstName + " " + y.lastName }
                    <br/>  
                    Age : {y.age}
                    <br/>
                    Gender : {y.gender}
                     </h3>
            </div>
            <Third></Third>
        </div>
     )
}

export default Second 
