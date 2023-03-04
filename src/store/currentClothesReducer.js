import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, once, query, equalTo, get } from "firebase/database";
import { database } from "../firebase";

const clothesRef = ref(database, 'clothes');

const initialState = {
    clothesData: null,
    params: {},
    isLoading: false,
    error: null
}

export const currentClothesSlice = createSlice({
    name: 'currentClothes', 
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getClothesById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getClothesById.fulfilled, (state, action) => {
                state.clothesData = action.payload;
                state.isLoading = false;
            })
            .addCase(getClothesById.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
})

export const getClothesById = createAsyncThunk('currentClothes/getClothesById', async (id) => {
    const snapshot = await get(clothesRef)
    let currentClothes = snapshot.val().filter((item) => item.id === id);

    return currentClothes[0];
})

export default currentClothesSlice.reducer;