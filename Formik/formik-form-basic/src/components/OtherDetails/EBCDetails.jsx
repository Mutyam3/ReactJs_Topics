import React from 'react'


function EBCDetails(props)
{

    console.log(props)

    return (
        <div className='smallCompo'>
            
            <h5>Economically Backward Class (EBC) Details</h5>

            <label>
                Are you an EBC Certificate Holder ?  <br/>
                <select  {...props.od.getFieldProps('OtherDetails.EBC_Certificate_Holder')}
                className = {props.od.touched.OtherDetails?.EBC_Certificate_Holder && props.od.errors.OtherDetails?.EBC_Certificate_Holder && 'ErrorField'}>
                    <option value='select' selected >Select</option>
                    <option value = 'Yes'>Yes</option>
                    <option value = 'No'>No</option>
                </select>
            </label>

            <div className='ErrorClass'>
                <b>{props.od.touched.OtherDetails?.EBC_Certificate_Holder && props.od.errors.OtherDetails?.EBC_Certificate_Holder && props.od.errors.OtherDetails.EBC_Certificate_Holder}</b>
            </div>
        </div>
    )
}

export default EBCDetails

