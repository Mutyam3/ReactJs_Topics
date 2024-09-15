import React from 'react'
import { userDetails } from './data'

function DarkLight()
{

        let [dis, setDis] = React.useState("none")
        

        function toggleBtn()
        {
             
             if(dis=='block')
             {
                setDis('none')
                
             }
             else 
             {
                setDis('block')
             }
        }





        return (
            <div className={dis == "block" ? 'darkMode' : 'lightMode'}>
         
                 
                <section className='header'>

                <h1 style={dis=='block' ? {color:'whitesmoke', fontSize:'xx-large'}:{color:'black', fontSize:'xx-large'}}>Overreacted</h1>

                <div onClick = {toggleBtn}>

                    {
                           dis == 'none' ?
                               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-toggle-off" viewBox="0 0 16 16">
                                      <path d="M11 4a4 4 0 0 1 0 8H8a5 5 0 0 0 2-4 5 5 0 0 0-2-4zm-6 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8M0 8a5 5 0 0 0 5 5h6a5 5 0 0 0 0-10H5a5 5 0 0 0-5 5"/>
                               </svg>
                            
                            : 
                               <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-toggle-on" viewBox="0 0 16 16">
                                        <path d="M5 3a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10zm6 9a4 4 0 1 1 0-8 4 4 0 0 1 0 8"/>
                               </svg> 
                               
                    }

                </div>


                </section>

                <section className = 'myBody'>
                    {
                          userDetails.map((el)=>{

                            return (
                                <div>
                                    
                                    <h1>{el.title}</h1>
                                    <em>{el.date}</em>
                                    <p>{el.description}</p>
                                </div>
                            )
                          })
                    }
                </section>
 
            </div>
        )
}

export default DarkLight