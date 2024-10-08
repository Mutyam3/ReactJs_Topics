import React from 'react'
import CategoryDetails from './CategoryDetails'
import EBCDetails from './EBCDetails'
import BankDetails from './BankDetails'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { useFormik } from 'formik'

function OtherDetails()
{

     const myOtherDetails = useFormik({
             initialValues : {
                  ex_serviceman : '',
                  personWithBenchmarkDisability : '',
                  EBC_Certificate_Holder : '',
                  AccountHolderName : '',
                  AccountNumber : '',
                  IFSC_Code : '',
                  BankName : '',
                  BankAddress : ''
             },

             onSubmit : (values)=>{
                   console.log(values)
             }
      })

    function save()
    {
        
    }
    return (
        <div>
           <form onSubmit={myOtherDetails.handleSubmit}>
              
              <CategoryDetails od = {myOtherDetails}/>
              <EBCDetails od={myOtherDetails}/>
              <BankDetails od={myOtherDetails}/>

            <div className='Btns'>
                 <button style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <Link to="/studentForm/Educational-Qualification" style={{textDecoration:'none',color:'white'}}>
                 <button style={{backgroundColor:'crimson', color: 'white'}}>NEXT</button>
                 </Link>
            </div>
            </form>
            

        </div>
    )
}

export default connect((store)=>{return store}) (OtherDetails)