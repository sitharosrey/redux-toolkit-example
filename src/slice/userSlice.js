import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios"

export const getUsers = createAsyncThunk(
    "getUsers",
    async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            return response.data;
        } catch (error) {
            console.error(error);
        }
    });

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: [],
        isLoading: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.users = action.payload;
                state.isLoading = false;
                state.hasError = false
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.hasError = true
                state.isLoading = false;
            })
    }
})

export default userSlice.reducer