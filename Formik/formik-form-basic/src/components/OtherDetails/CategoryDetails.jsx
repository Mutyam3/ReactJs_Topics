import React from 'react'

function CategoryDetails(props)
{
    return (
        <div className='smallCompo'>
            <h5>Category Details</h5>

            <div className='innerSmallCompo'>
                <h5>Ex-Serviceman Details</h5>

                <label>
                    Are you an Ex-Serviceman ? <br/>
                    <select {...props.od.getFieldProps('ex_serviceman')}>
                         <option disabled selected>Select</option>
                         <option value = 'Yes'>Yes</option>
                         <option value = 'No'>No</option>
                    </select>
                </label>
            </div>

            <div className='innerSmallCompo'>
                <h5>Person with benchmark disability(PwBD) Details</h5>

                 <label>
                       Are you a person with benchmark disability ? <br/>
                       <select {...props.od.getFieldProps('personWithBenchmarkDisability')}>
                           <option disabled selected>Select</option>
                           <option value = 'Yes'>Yes</option>
                           <option value = 'No'>No</option>
                       </select>
                 </label>
            </div>
        </div>
    )
}

export default CategoryDetails