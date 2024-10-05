import React from 'react'


function EBCDetails()
{
    return (
        <div className='smallCompo'>
            
            <h5>Economically Backward Class (EBC) Details</h5>

            <label>
                Are you an EBC Certificate Holder ?  <br/>
                <select>
                    <option disabled selected>Select</option>
                    <option value = 'Yes'>Yes</option>
                    <option value = 'No'>No</option>
                </select>
            </label>
        </div>
    )
}

export default EBCDetails