import { BOOKS_URL } from '../constants';
import { apiSlice } from './apiSlice';

export const bookSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: BOOKS_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getBookDetails: builder.query({
      query: (bookId) => ({
        url: `${BOOKS_URL}/${bookId}`,
      }),
      keepUnusedDataFor: 5,
    }),

    addBook: builder.mutation({
      query: () => ({
        url: `${BOOKS_URL}`,
        method: 'POST',
      }),
      invalidatesTags: ['Book'],
    }),

  }),
});

export const { useGetBooksQuery, useGetBookDetailsQuery,useAddBookMutation } = bookSlice;