import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EmptyResponse, Nullable } from 'src/types/common';
import { Owner } from 'src/types/owner';

export const ownersApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8081/rest',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  reducerPath: 'owners',
  endpoints: (builder) => {
    return {
      getOwners: builder.query<Owner[], Nullable<string>>({
        query: (lastName?) => {
          return { url: '/owners', method: 'get', params: { lastName: lastName } };
        },
      }),
      createOwner: builder.mutation<
        EmptyResponse,
        {
          firstName: string;
          lastName: string;
          city: string;
          address: string;
          telephone: string;
        }
      >({
        query: (data) => {
          return {
            url: `/owners/new`,
            method: 'POST',
            data: data,
          };
        },
      }),
    };
  },
});

export const { useGetOwnersQuery, useCreateOwnerMutation } = ownersApi;
