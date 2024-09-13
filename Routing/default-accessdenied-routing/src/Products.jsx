import React from 'react'
import {Link} from 'react-router-dom'

function Products()
{
    return (
        <div className="App">
            <h1>Products</h1>

            <ul>
                <li><Link to="/mobile">Mobile</Link></li>
                <li><Link to="/laptop">Laptop</Link></li>
                <li><Link to="/Ac">AC</Link></li>
            </ul>
            
        </div>
    )
}

export default Products 