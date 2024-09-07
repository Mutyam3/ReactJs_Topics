import React from 'react'

function MyCompo()
{

    console.log("Hi babu")
    const [a, setA] = React.useState(100)
    const [b, setB] = React.useState(200)

    function incA()
    {
        setA(a+10)
    }

    function incB()
    {
        setB(b+10)
    }


    return(
        <div className='App'>
            <h1>My Component</h1>
            <h2>A : {a}</h2>
            <h2>B : {b}</h2>
            <button onClick = {incA}>Increment A</button>
            <button onClick = {incB}>Increment B</button>
        </div>
    )
}

export default MyCompo