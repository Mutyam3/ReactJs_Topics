import React from 'react'
import {useFormik} from 'formik'
import { useAddEmployeeMutation } from '../services/employeesApi'
import { useNavigate } from 'react-router-dom'

function AddEmployee()
{
        const [addEmployeeFn]  =   useAddEmployeeMutation()
        const navigate = useNavigate()
        const employee = useFormik({
            initialValues : {
                firstname : '',
                lastname : '',
                gender : '',
                qual : ''
            },
            onSubmit : (values)=>{
                 console.log(values)
                 addEmployeeFn(values).then((res)=>{
                    navigate('/')
                 })
            }
        })
    return (
        <section className='m-4 p-2'>

             <form onSubmit={employee.handleSubmit}>
                FirstName &nbsp;<input type='text' {...employee.getFieldProps('firstname')}/> <br/><br/>
                LastName &nbsp;<input type='text' {...employee.getFieldProps('lastname')}/> <br/><br/>
                Gender &nbsp;<input type='radio'  {...employee.getFieldProps('gender')} value= 'Male'/>Male  &nbsp;
                             <input type='radio'  {...employee.getFieldProps('gender')} value= 'Female'/> Female <br/><br/>
                Qualification &nbsp;<input type='text' {...employee.getFieldProps('qual')}/> <br/><br/>
                
                 <button type='submit'>Submit</button>
             </form>
            

        </section>
    )
}

export default AddEmployee