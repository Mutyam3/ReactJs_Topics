import axios from 'axios'
import React from 'react'

function BankDetails(props)
{

    function handleIfsc_Code()
    {
         console.log(props.od.values.OtherDetails.IFSC_Code)
        let naaIfsc_Code
        axios.get('http://localhost:4000/bank_details').then((res)=>{
            
            console.log(res.data)

         naaIfsc_Code =  res.data.filter((el)=>{
                if(el.ifsc_code == props.od.values.OtherDetails.IFSC_Code.toUpperCase())
                {
                    return true 
                }
                else
                {
                    return false 
                }
            })

            console.log('naaIfsc_code',naaIfsc_Code)

            props.od.setFieldValue('OtherDetails.BankName', naaIfsc_Code[0].bank_name)
            props.od.setFieldValue('OtherDetails.BankAddress', naaIfsc_Code[0].branch_name)

        }).catch(()=>{


        })

    }
     
    return(
        <div className='smallCompo'>
            <h5>Bank Details For Refund of Fee (Only AccountNumber and IFSC code used for refund. Fill them with caution)</h5>

            <table width = "100%">
                <tbody>
                    <tr className='smallCompo_Tab'>
                        <td className='smallCompo_Tab'>
                            <label>
                                Name of Account Holder <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.AccountHolderName')}
                                className = {props.od.touched.OtherDetails?.AccountHolderName && props.od.errors.OtherDetails?.AccountHolderName && 'ErrorField'}/>
                            </label>

                            <div className='ErrorClass'>
                                <b>{props.od.touched.OtherDetails?.AccountHolderName && props.od.errors.OtherDetails?.AccountHolderName && props.od.errors.OtherDetails.AccountHolderName}</b>
                            </div>
                        </td>
                        <td className='smallCompo_Tab'>
                            <label>
                                Account Number <br/>
                                <input type="text"  />
                            </label>

                

                        </td>
                        <td className='smallCompo_Tab'>
                            <label>

                                Confirm Account Number <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.AccountNumber')}
                                className = {props.od.touched.OtherDetails?.AccountNumber && props.od.errors.OtherDetails?.AccountNumber && 'ErrorField'}/>
                                <div className='ErrorClass'>
                                    <b>{props.od.touched.OtherDetails?.AccountNumber && props.od.errors.OtherDetails?.AccountNumber && props.od.errors.OtherDetails.AccountNumber}</b>
                                </div>
                            </label>
                        </td>
                    </tr>

                    <tr className='smallCompo_Tab'>

                    <td className='smallCompo_Tab'>
                        <label>
                                IFSC Code <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.IFSC_Code')}/>
                                <button onClick = {handleIfsc_Code} type='button'>Confirm</button>

                        <div className='ErrorClass'>
                            <b>{props.od.touched.OtherDetails?.IFSC_Code && props.od.errors.OtherDetails?.IFSC_Code && props.od.errors.OtherDetails.IFSC_Code}</b>
                        </div>

                        </label>

                    </td>


                    <td className='smallCompo_Tab'>
                        <label>

                                 Name of Bank <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.BankName')} disabled/>

                        </label>
                    </td>

                    <td className='smallCompo_Tab'>
                        <label>
                                Bank Address <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.BankAddress')} disabled/>
                        </label>
                    </td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BankDetails