import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EmptyResponse } from 'src/types/common';
import { Owner } from 'src/types/owner';

export const ownersApi = createApi({
  baseQuery: fetchBaseQuery(),
  reducerPath: 'owners',
  endpoints: (builder) => {
    return {
      getOwners: builder.query<Owner[], void>({
        query: () => {
          return '/rest/owners';
        },
      }),
      createOwner: builder.mutation<
        EmptyResponse,
        {
          usherer: number;
          firstName: string;
          lastName: string;
          phoneNumber: string;
          email: string;
          userType: string;
          partnerCompany: string;
          channel: string;
          companyName: string;
          hasGlobalVisibility: boolean;
        }
      >({
        query: (data) => {
          return {
            url: `/rest/owners/new`,
            method: 'POST',
            data: data,
          };
        },
      }),
    };
  },
});

export const { useGetOwnersQuery, useCreateOwnerMutation } = ownersApi;
