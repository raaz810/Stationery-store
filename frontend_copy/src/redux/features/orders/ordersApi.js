import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseUrl from "../../../utils/baseURL";

const ordersApi = createApi({
    reducerPath: 'ordersApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${getBaseUrl()}/api/orders`,
        credentials: 'include' // Automatically includes credentials for all requests
    }),
    tagTypes: ['Orders'],
    endpoints: (builder) => ({
        createOrder: builder.mutation({
            query: (newOrder) => ({
                url: "/",
                method: "POST",
                body: newOrder,
            }),
            invalidatesTags: ['Orders'] // Optionally invalidate orders to refresh data after creating a new order
        }),
        getOrderByEmail: builder.query({
            query: (email) => ({
                url: `/email/${email}`
            }),
            providesTags: ['Orders']
        }),
        getAllOrders: builder.query({ // New endpoint to fetch all orders
            query: () => ({
                url: "/allorders",
            }),
            providesTags: ['Orders']
        })
    })
});

export const {
    useCreateOrderMutation,
    useGetOrderByEmailQuery,
    useGetAllOrdersQuery // Export hook to use in your components
} = ordersApi;

export default ordersApi;