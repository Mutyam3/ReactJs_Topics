import React from 'react'


function Footer()
{

      const links = ['home', 'features', 'search', 'policy']
      const followUs = [ 'Facebook', 'Instagram','Twitter','Threads','Youtube']
      const download = ['Android', 'iOS'] 

    return (
        <section className=' box marginMania  p-4 border border-light rounded d-flex justify-content-evenly'>

              <ul type='none' className='footertext'>
                    <h5>Links</h5>
                  {
                    
                      links.map((el)=>{
                        return <li>{el}</li>
                      })
                  }
              </ul>

              <ul type='none' className='footertext'>
                 <h5>Follow us</h5>
                 {
                       followUs.map((el)=>{
                           return <li>{el}</li>
                       })
                 }
              </ul>

              <ul type='none' className='footertext'>
                 <h5>Download</h5>
                 {
                    download.map((el)=>{
                        return <li>{el}</li>
                    })
                 }
              </ul>

              <div className='footertext'>
                 <h5>Reach Out</h5>
                 <p> bhargavreddymutyam@gmail.com</p>
              </div>
             
             
        </section>
    )
}

export default Footer