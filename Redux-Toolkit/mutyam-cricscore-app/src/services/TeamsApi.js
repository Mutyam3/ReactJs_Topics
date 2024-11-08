import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const teamsApi = createApi({
    reducerPath : 'teamsApi',
   
    baseQuery : fetchBaseQuery({baseUrl:'http://localhost:5000/teams'}),
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
        })
            
        }),

    })
    
export const {useAddTeamMutation, useGetTeamsQuery} = teamsApi


