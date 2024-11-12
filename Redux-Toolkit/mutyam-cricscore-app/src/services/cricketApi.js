import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const CricketApi = createApi({
       
             reducerPath : 'CricketApi',
             baseQuery : fetchBaseQuery({
                baseUrl : 'http://localhost:5000'
             }),
             endpoints : (builder)=>({


                getTeamLogos : builder.query({
            
                    query : () => '/teamLogos'
       
               }),

               getVenues : builder.query({

                  query : () => '/venues'
               })

             })
})

export const {useGetTeamLogosQuery, useGetVenuesQuery} = CricketApi