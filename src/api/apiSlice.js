import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    // baseQuery: fetchBaseQuery({ baseUrl: "https://portfolio-production-7da7.up.railway.app/api" }), /api/contact
    // baseQuery: fetchBaseQuery({ baseUrl: process.env.API_LINK }),
    endpoints: builder => {
        return {
            addContact: builder.mutation({
                query: (contactData) => {
                    return {
                        url: '/contact/add-contact',
                        method: "POST",
                        body: contactData
                    }
                }
            })
        }
    }
})

export const { useAddContactMutation } = apiSlice