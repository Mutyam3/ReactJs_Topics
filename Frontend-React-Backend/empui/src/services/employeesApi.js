import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const employeeApi = createApi({
       reducerPath : 'employeeApi',
       baseQuery : fetchBaseQuery({baseUrl: 'http://localhost:4500/employees'}),
       endpoints: (builder) => ({
             getEmployees : builder.query({
                 query : () => '/',

             }),
             addEmployee : builder.mutation({
                query : (emp) => ({
                     url : '',
                     method : 'POST',
                     body : emp

                })
             })
       })
})

export const {useGetEmployeesQuery, useAddEmployeeMutation} = employeeApi