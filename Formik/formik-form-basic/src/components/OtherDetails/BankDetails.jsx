import React from 'react'

function BankDetails(props)
{


    return(
        <div className='smallCompo'>
            <h5>Bank Details For Refund of Fee (Only AccountNumber and IFSC code used for refund. Fill them with caution)</h5>

            <table width = "100%">
                <tbody>
                    <tr className='smallCompo_Tab'>
                        <td className='smallCompo_Tab'>
                            <label>
                                Name of Account Holder <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.AccountHolderName')}/>
                            </label>
                        </td>
                        <td className='smallCompo_Tab'>
                            <label>
                                Account Number <br/>
                                <input type="text" />
                            </label>
                        </td>
                        <td className='smallCompo_Tab'>
                            <label>

                                Confirm Account Number <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.AccountNumber')}/>

                            </label>
                        </td>
                    </tr>

                    <tr className='smallCompo_Tab'>

                    <td className='smallCompo_Tab'>
                        <label>
                                IFSC Code <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.IFSC_Code')}/>
                                <button>Confirm</button>

                        </label>
                    </td>

                    <td className='smallCompo_Tab'>
                        <label>

                                 Name of Bank <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.BankName')}/>

                        </label>
                    </td>

                    <td className='smallCompo_Tab'>
                        <label>
                                Bank Address <br/>
                                <input type="text" {...props.od.getFieldProps('OtherDetails.BankAddress')}/>
                        </label>
                    </td>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default BankDetails