import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: "api",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    // baseQuery: fetchBaseQuery({ baseUrl: "https://portfolio-production-7da7.up.railway.app/api" }), /api/contact
    baseQuery: fetchBaseQuery({ baseUrl: "https://sbportfolio-backend.netlify.app" }),
    endpoints: builder => {
        return {
            addContact: builder.mutation({
                query: (contactData) => {
                    return {
                        url: '/api/contact/add-contact',
                        method: "POST",
                        body: contactData
                    }
                }
            })
        }
    }
})

export const { useAddContactMutation } = apiSlice