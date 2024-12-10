import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const teamsApi = createApi({
    reducerPath : 'teamsApi',
   
    baseQuery : fetchBaseQuery({baseUrl:'https://json-server-cricapp.onrender.com/teams'}),
    endpoints : (builder)=>({

        addTeam : builder.mutation({
            query : (newTeam)=>({
                url : '/',
                method : 'POST',
                body : newTeam

            })
        }),

        getTeams : builder.query({
            query : () => '/'
        }),

        getTeamsById : builder.query({
               
              query : (id) => `/${id}`

        })
            
        }),

    })
    
export const {useAddTeamMutation, useGetTeamsQuery, useGetTeamsByIdQuery, useLazyGetTeamsByIdQuery} = teamsApi


