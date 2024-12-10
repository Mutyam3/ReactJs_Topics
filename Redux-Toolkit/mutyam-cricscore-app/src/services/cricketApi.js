import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const CricketApi = createApi({
       
             reducerPath : 'CricketApi',
             baseQuery : fetchBaseQuery({
                baseUrl : 'https://json-server-cricapp.onrender.com'
             }),
             endpoints : (builder)=>({


                getTeamLogos : builder.query({
            
                    query : () => '/teamLogos'
       
               }),

               getVenues : builder.query({

                  query : () => '/venues'
               }),

               addMatch : builder.mutation({

                  query : (match) => ({
                     url : '/matches',
                     method : 'POST',
                     body : match
                  })
               }),

               getMatches  : builder.query({

                  query : () => '/matches'
               }),

               getMatchById : builder.query({
                  query : (id) => `/matches/${id}`
               }),

               updateMatch : builder.mutation({

                       query : ({id, match}) => (
                        {
                             url : `/matches/${id}`,
                             method : 'PUT',
                             body : match
                        }
                       )

               }),

               getIplJersery : builder.query({

                  query : () => '/iplJerseys'
               })



             })
})

export const {useGetTeamLogosQuery, useGetVenuesQuery, useAddMatchMutation, useGetMatchesQuery, useGetMatchByIdQuery, useUpdateMatchMutation, useGetIplJerseryQuery, useLazyGetMatchByIdQuery} = CricketApi