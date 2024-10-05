import React from 'react'

function Inter()
{
    return(
        <div className='smallCompo'>
             <h5>Intermediate/10+2</h5>
            <section className='educateDiv'>


            <label>
                Group <br/>
                <select>
                    <option disabled selected>Select</option>
                    <option value="Mpc">Mpc</option>
                    <option value="Bipc">Bipc</option>
                    <option value="CEC">CEC</option>
                    <option value="ITI">ITI</option>
                </select>
            </label>


            <label>
                State<br/>
                <select>
                    <option disabled selected>Select</option>
                    <option value="Telangana">Telangana</option>
                    <option value="AndhraPradesh">AndhraPradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="TamilNadu">TamilNadu</option>
                </select>
            </label>

            <label>
                 Board <br/>
                <input type="text"/>
            </label>

            <label>
                Date of Passing <br/>
                <input type="date"/>
            </label>

            <label>
                Roll No <br/>
                <input type="text"/>
            </label>

            

            </section>
        </div>
    )
}

export default Inter