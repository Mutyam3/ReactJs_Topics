import React from 'react'

function CategoryDetails(props)
{

    console.log('Errors::',props.od.errors)

    return (
        <form >
        <div className='smallCompo'>
            <h5>Category Details</h5>

            <div className='innerSmallCompo'>
                <h5>Ex-Serviceman Details</h5>

                <label>
                    Are you an Ex-Serviceman ? <br/>
                    <select {...props.od.getFieldProps('OtherDetails.ex_serviceman')}
                    className = {props.od.touched.OtherDetails?.ex_serviceman && props.od.errors.OtherDetails?.ex_serviceman && 'ErrorField'}>
                         <option value='select' selected >Select</option>
                         <option value = 'Yes'>Yes</option>
                         <option value = 'No'>No</option>
                    </select>
                </label>

                <div className='ErrorClass'>
                    {console.log(props.od.touched.OtherDetails?.ex_serviceman )}
                    <b>{props.od.touched.OtherDetails?.ex_serviceman && props.od.errors.OtherDetails?.ex_serviceman && props.od.errors.OtherDetails.ex_serviceman}</b>
                </div>
            </div>

            <div className='innerSmallCompo'>
                <h5>Person with benchmark disability(PwBD) Details</h5>

                 <label>
                       Are you a person with benchmark disability ? <br/>
                       <select {...props.od.getFieldProps('OtherDetails.personWithBenchmarkDisability')}
                       className = {props.od.touched.OtherDetails?.personWithBenchmarkDisability && props.od.errors.OtherDetails?.personWithBenchmarkDisability && 'ErrorField'}>
                           <option value='select' selected >Select</option>
                           <option value = 'Yes'>Yes</option>
                           <option value = 'No'>No</option>
                       </select>
                 </label>

                 <div className='ErrorClass'>
                    <b>{props.od.touched.OtherDetails?.personWithBenchmarkDisability && props.od.errors.OtherDetails?.personWithBenchmarkDisability && props.od.errors.OtherDetails.personWithBenchmarkDisability}</b>
                </div>
            </div>
        </div>
        </form>
    )
}

export default CategoryDetails