import axios from 'axios'
export function getAllCountries()
{

//    return ((dispatch)=>{fetch("https://restcountries.com/v2/all")
//     .then((res)=>res.json())
//     .then((data)=>{
//         dispatch({type : 'UPDATE_COUNTRIES', payload:data})
//     })}) 

return (
    (dispatch)=>{
        axios.get('https://restcountries.com/v2/all')
        .then((response)=>{
            dispatch({type:'UPDATE_COUNTRIES',payload : response.data})
        })
    }
)



}