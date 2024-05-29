import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
    reducerPath: "api",
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    baseQuery: fetchBaseQuery({ baseUrl: "https://portfolio-api-k89a.onrender.com" }),
    // baseQuery: fetchBaseQuery({ baseUrl: "https://portfolio-801y13tte-shankara8880.vercel.app" }),
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
