import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["Books", "Book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: ({ term } = {}) => {
        let query = "/books";
        if (term) {
          query += `?name_like=${term}`;
        }
        return query;
      },
      providesTags: ["Books"],
      keepUnusedDataFor: 600,
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Books"],
    }),
    getBook: builder.query({
      query: (id) => ({
        url: `/books/${id}`,
      }),
      providesTags: (result, error, arg) => [
        "Books",
        { type: "Book", id: arg },
      ],
    }),
    editBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result, error, arg) => [
        "Books",
        { type: "Book", id: arg.id },
      ],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Books"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useAddBookMutation,
  useEditBookMutation,
  useDeleteBookMutation,
} = apiSlice;
