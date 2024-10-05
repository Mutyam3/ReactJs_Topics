import React from 'react'

function CategoryDetails()
{
    return (
        <div className='smallCompo'>
            <h5>Category Details</h5>

            <div className='innerSmallCompo'>
                <h5>Ex-Serviceman Details</h5>

                <label>
                    Are you an Ex-Serviceman ? <br/>
                    <select>
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
                       <select>
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