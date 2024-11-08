import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const PlayerApi = createApi({
       
             reducerPath : 'PlayerApi',
             baseQuery : fetchBaseQuery({
                baseUrl : 'http://localhost:5000/players'
             }),
             endpoints : (builder)=>({

                addPlayer : builder.mutation({
                    query : (player)=>({
                        url : '/',
                        method : 'POST',
                        body : player

                    })
                }),

                getPlayers : builder.query({
            
                    query : () => '/'
       
               })

             })
})

export const {useAddPlayerMutation, useGetPlayersQuery} = PlayerApi