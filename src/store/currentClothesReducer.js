import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../firebase";


const initialState = {
    clothesData: null,
    params: {color: "#fff", size: "M"},
    isLoading: false,
    error: null
}

export const currentClothesSlice = createSlice({
    name: 'currentClothes', 
    initialState, 
    reducers: {
        setParam(state, action) {
            state.params[action.payload.param] = action.payload.value;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getClothesById.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getClothesById.fulfilled, (state, action) => {
                state.params.color = action.payload.colors[0];
                state.params.size = action.payload.sizes[0];
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
    const snapshot = await get(ref(database, `clothes/${id}`))
    let currentClothes = snapshot.val() 

    return currentClothes;
})


export const {setParam} = currentClothesSlice.actions;
export default currentClothesSlice.reducer;