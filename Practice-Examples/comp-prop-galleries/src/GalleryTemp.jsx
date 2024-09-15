import React from 'react'


function GalleryTemp(props)
{

    return (
        <div className ='slideContainer'>
            <h2>Slide</h2>
            {
                props.x.map((el)=>{
                    return (
                        <img src = {el} width='150px' height = '100px'/>
                    )
                })
            }
        </div>
    )
}


export default GalleryTemp