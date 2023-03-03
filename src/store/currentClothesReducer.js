import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, orderByChild, get } from "firebase/database";
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
                state.currentClothes = action.payload;
                state.isLoading = false;
            })
            .addCase(getClothesById.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
})

export const getClothesById = createAsyncThunk('currentClothes/getClothesById', async(id) => {
    console.log('test');
    const query = orderByChild('clothes/id').equalTo(id);
    let currentClothes = await get(query);
    console.log(currentClothes.val());
    return currentClothes.val();
})

export default currentClothesSlice.reducer;