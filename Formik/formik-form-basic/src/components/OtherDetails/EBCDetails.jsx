import React from 'react'


function EBCDetails(props)
{

    console.log(props)

    return (
        <div className='smallCompo'>
            
            <h5>Economically Backward Class (EBC) Details</h5>

            <label>
                Are you an EBC Certificate Holder ?  <br/>
                <select  {...props.od.getFieldProps('EBC_Certificate_Holder')}>
                    <option disabled selected>Select</option>
                    <option value = 'Yes'>Yes</option>
                    <option value = 'No'>No</option>
                </select>
            </label>
        </div>
    )
}

export default EBCDetails

