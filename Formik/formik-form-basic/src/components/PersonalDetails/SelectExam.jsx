import React from 'react'


function SelectExam(props)
{
    return (
        <div className='smallCompo'>
            <h5>Select Exam</h5>
            <label>
            
                Select your Exam  &nbsp;&nbsp;&nbsp;
                <select {...props.st.getFieldProps('SelectedExam.selected_Exam')}>
                    <option value='select' selected>---select your exam ---</option>
                    <option value='Civil_Services_Examination'>Civil-Service-Examination</option>
                    <option value='Staff_Selection_Commission'>Staff-Selection-Commission</option>
                    <option value='Banking_IBPS_PO'>Banking-IBPS-PO</option>
                    <option value='Railway_Recruitment_Board(NPTC)'>Railway-Recruitment-Board(NPTC)</option>
                    <option value='Railway-Recruitment-Board(Group-D)'>Railway-Recruitment-Board(Group-D)</option>
                    <option value='State_Civil_Service'>State-Civil-Service</option>
                    <option value='National_Defence_Academy(NDA)'>National_Defence_Academy(NDA)</option>
                    <option value='Graduate Aptitude Test in Engineering (GATE)'>Graduate Aptitude Test in Engineering (GATE)</option>
                    <option value='Indian Forest Services (IFS)'>Indian Forest Services (IFS)</option>
                    <option value='UP Police Constable Exam'>UP Police Constable Exam</option>
                    <option value='Combined Defence Services (CDS)'>Combined Defence Services (CDS)</option>
                    <option value='Indian Economic Services (IES)'>Indian Economic Services (IES)</option>
                    <option value='Delhi Police Sub-Inspector (SI) Exam'>Delhi Police Sub-Inspector (SI) Exam</option>
                    <option value='UPSC Geologist Exam'>UPSC Geologist Exam</option>
                    <option value='RBI Grade B Officer Exam'>RBI Grade B Officer Exam</option>
                    <option value='LIC AAO (Assistant Administrative Officer)'>LIC AAO (Assistant Administrative Officer)</option>
                    <option value='UPTET (Uttar Pradesh Teacher Eligibility Test)'>UPTET (Uttar Pradesh Teacher Eligibility Test)</option>
                    <option value='Central Teacher Eligibility Test (CTET)'>Central Teacher Eligibility Test (CTET)</option>
                    <option value='Indian Coast Guard (Navik GD)'>Indian Coast Guard (Navik GD)</option>
                    <option value='Indian Army Technical Entry Scheme (TES)'>Indian Army Technical Entry Scheme (TES)</option>
                    <option value='State Eligibility Test (SET)'>State Eligibility Test (SET)</option>
                    <option value='Railway_Recruitment_Board(RPF)'>Railway_Recruitment_Board(RPF)</option>
                 
                </select>
            </label>
            
        </div>
    )
}

export default SelectExam