import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, orderByChild, get } from "firebase/database";
import { database } from "../firebase";

const clothesRef = ref(database, 'clothes');

const initialState = {
    clothes: [],
    isLoading: false,
    error: null
}

export const clothesSlice = createSlice({
    name: 'clothes', 
    initialState, 
    reducers: {
        getClothesBySex(state, action) {
            const query = orderByChild('sex').equalTo(action.sex);
            state.isLoading = true;

            get(query).then((snapshot) => {
                state.clothes = []; 
                state.clothes.push(...snapshot.val()); 
            })
            state.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllClothes.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getAllClothes.fulfilled, (state, action) => {
                state.clothes = action.payload;
                state.isLoading = false;
                console.log(state.clothes);
            })
            .addCase(getAllClothes.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
})

export const getAllClothes = createAsyncThunk('clothes/getAllClothes', async() => {
    let clothes = []
    let snapshot = await get(clothesRef);
    snapshot.forEach(childSnapshot => {
        clothes.push(childSnapshot.val());
    })
    return clothes;
})

export default clothesSlice.reducer;