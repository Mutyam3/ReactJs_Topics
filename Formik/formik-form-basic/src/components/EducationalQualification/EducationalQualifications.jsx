import React from 'react'
import Matriculation from './SSC'
import Inter from './Inter'
import Degree from './Degree'
import { Link } from 'react-router-dom'

function EducatQualification()
{

    function save()
    {

    }
    return (
        <div>
            <Matriculation/>
            <Inter/>
            <Degree></Degree>

            <div className='Btns'>
                 <button onClick = {save} style={{backgroundColor:'green',color:'white'}}>SAVE</button>
                 <Link to="/studentForm/Upload-Profile-Documents" style={{textDecoration:'none',color:'white'}}>
                 <button style={{backgroundColor:'crimson', color: 'white'}}>NEXT</button>
                 </Link>
            </div>
        </div>
    )
}

export default EducatQualification

        