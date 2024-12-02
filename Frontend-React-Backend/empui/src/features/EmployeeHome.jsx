import React from 'react'
import { useGetEmployeesQuery } from '../services/employeesApi'
import { Link } from 'react-router-dom';

function EmployeeHome()
{
    var {isLoading, data}  = useGetEmployeesQuery();

    return (
        <section>
             <h1>Mutyam company - Employees</h1>

             <Link to='/addEmployee'><button className='border border-0 p-2 m-3 bg-success rounded'>Add button</button></Link>

             {isLoading && <b>Loading...</b>}
             {
                !isLoading && <ul>
                     {
                        data.map((el)=>{
                            return <li>{el.firstname}</li>
                        })
                     }
                </ul>
             }

             
        </section>
    )
}

export default EmployeeHome