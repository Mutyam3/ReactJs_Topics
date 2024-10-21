import React from 'react'
import axios from 'axios'

function ContactForm()
{
    const [contactDetails, setContactDetails] = React.useState([])

    React.useEffect(()=>{

        axios.get("http://localhost:4000/Examinations").then((response)=>{
            setContactDetails([...response.data])
        }).catch(()=>{})
    },[])

   
    return(
        <div className='App'>
            <table className='border border-2 border-dark'>
              <thead className='border border-2 border-dark'>
                <tr className='text-center' style={{backgroundColor:'rgb(27,56,125)', color:'white'}}>
                    <th className='border border-2 border-dark p-2'>Name</th>
                    <th className='border border-2 border-dark'>Abbreviation</th>
                    <th className='border border-2 border-dark'>Website</th>
                    <th className='border border-2 border-dark'>Emails</th>
                    <th className='border border-2 border-dark'>Phones</th>
                </tr>
                </thead>
                <tbody className='contactList'>
                     {
                        contactDetails.map((el)=>{
                            return (
                                <tr className='border border-2 border-dark'>
                                    <td className='border border-2 border-dark '>{el.Name}</td>
                                    <td className='border border-2 border-dark'>{el.Abbreviation}</td>
                                    <td className='border border-2 border-dark'>{el.Website}</td>
                                    <td className='border border-2 border-dark'>{el.Emails.join(" , ")}</td>
                                    <td className='border border-2 border-dark'>{el.Phones.join(" , ")}</td>
                                </tr>
                            )
                        })
                     }
                </tbody>
            </table>

        </div>
    )
}

export default ContactForm