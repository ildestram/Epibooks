import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; /* gestisce chiamate api tramite redux */

const initialState = {
    allBooks: [],
    totalBooks: 0,
    isLoading: false,
    error: ""
}

export const getAllBooks = createAsyncThunk (
    "allBooks/getAllBooks", 
    async() => {
        const endpoint = `https://epibooks.onrender.com/`
        try {
            const data = await fetch(endpoint)
            const response = data.json()
            return response
        } catch (error) {
            if(error) throw new Error("C'è un errore generico")
        }
    }
)

const renderAllBooks = createSlice({
    name: "renderAllBooks",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getAllBooks.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getAllBooks.fulfilled, (state, action) => {
            state.isLoading = false
            state.totalBooks = action.payload.length
            state.allBooks = action.payload
        })
        .addCase(getAllBooks.rejected, (state) => {
            state.error = "C'è un errore da qualche parte"
            state.isLoading = false
        })
    }
})

export const booksLoading = (state) => state.bookSlice.isLoading
export const booksError = (state) => state.bookSlice.error
export const numberOfBooks = (state) => state.bookSlice.totalBooks
export const arrayOfBooks = (state) => state.bookSlice.allBooks
export default renderAllBooks.reducer