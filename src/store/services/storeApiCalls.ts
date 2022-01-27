import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const imagesAPI = createApi({
  reducerPath: 'imagesAPI',
  baseQuery: fetchBaseQuery({
    // link to the base API is located in package.json => "proxy"
    // In case of CORS error
    baseUrl: 'http link to...'
  }),

  endpoints: (builder) => ({
    getPhotoCoverPic: builder.query({
      query: () => 'some Link'
    }),
    getSpecificData: builder.query({
      query: (searchFor: string) => 'simpleApiCall' + searchFor
    }),
  })
})

export const { reducer } = imagesAPI
export const { useGetPhotoCoverPicQuery, useGetSpecificDataQuery } = imagesAPI
export default imagesAPI