import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, orderByChild, get } from "firebase/database";
import { database } from "../firebase";

const clothesRef = ref(database, 'clothes');

const initialState = {
    cartItems: [],
    isLoading: false,
    error: null
}

export const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
    },
    extraReducers: (builder) => {
    }
})


export default cartSlice.reducer;