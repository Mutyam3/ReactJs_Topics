import React from 'react'


function MatchFormat({matchDetails})
{
    const oversDetails = [10,20,30,40,50]
    const [formatDetails, setFormatDetails ] =  React.useState([ 
                                                               {
                                                                    format : 'T10',
                                                                    status : false

                                                                },
                                                                {
                                                                    format : 'T20',
                                                                    status : false
    
                                                                },
                                                                {
                                                                    format : 'club',
                                                                    status : false
    
                                                                },
                                                                {
                                                                    format : 'One Day',
                                                                    status : false
        
                                                                },
                                                                {
                                                                    format : 'Test Match',
                                                                    status : false
            
                                                                },
                                                               ])

                        function handleFormat(el, ind)
                        {
                           var temp = formatDetails
                           temp = temp.map((f,i)=>{
                                        if(i==ind)
                                        {
                                           f.status = true
                                        }
                                        else 
                                        {
                                            f.status = false
                                        }
                                        return f
                           })

                           console.log(temp)

                           setFormatDetails([...temp])
                           matchDetails.setFieldValue('matchFormat',el.format)
                        }

            

    return (
        <section className='m-3'>
             <div>
                <h6>Select Overs</h6>
                <input type='text' className='field text-center w-75' placeholder='overs' {...matchDetails.getFieldProps('overs')} />
                <div className='p-2'>
                     {
                         oversDetails.map((el,i)=>{
                            return <button type='button' className = 'm-2 bg-primary text-light border border-0 rounded'  onClick={()=>{matchDetails.setFieldValue('overs', el)}}>{el}</button>
                        })
                     }
                </div>
             </div>

             <div>
                <h6>Select Format</h6>
                 <div className='d-flex p-2 w-75 flex-wrap'>{
                        formatDetails.map((el,i)=>{
                            return <div className={el.status ? 'clicked' : 'unClicked'} onClick ={()=>{handleFormat(el,i)}}>
                                         {el.format}
                                   </div>
                        })
                 }</div>
             </div>

             <div>
                <h6>Wickets</h6>
                <input type='text' className='field text-center w-75' placeholder='wickets' {...matchDetails.getFieldProps('wickets')} />
             </div>
        </section>
    )
}

export default MatchFormat