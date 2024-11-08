import React from 'react'
import { useGetTeamsQuery } from '../../../services/TeamsApi'

function TeamsDashboard()
{

      const {isLoading, data}   = useGetTeamsQuery()
    return(
        <section>
            {
                isLoading && (<b>Loading.....</b>)
            }
            
            <section>

                <h5>Teams : </h5>

                
                  <div>
                      {

                          !isLoading && data.map((el)=>{
                                 return (
                                    <div>
                                        <img />
                                    </div>
                                 )
                          })
                          
                      }
                  </div>  
                
                    
                
                
            </section>


        </section>
    )
}

export default TeamsDashboard