import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, orderByChild, get } from "firebase/database";
import { database } from "../firebase";

const clothesRef = ref(database, 'clothes');

const initialState = {
    clothes: {},
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
                state.clothes = snapshot.val(); 
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
                state.clothes = {};
                state.clothes = action.payload;
                state.isLoading = false;
            })
            .addCase(getAllClothes.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
})

export const getAllClothes = createAsyncThunk('clothes/getAllClothes', async(type) => {
    let snapshot = await get(clothesRef);
    if (type === 'all') {
        return snapshot.val();
    }
    let filteredClothes = {} 
    for (let child in snapshot.val()) {
        if (snapshot.val()[child].sex.includes(type.charAt(0).toUpperCase() + type.slice(1))){
            filteredClothes[child] = snapshot.val()[child];
        }
    }
    return filteredClothes;
})

export default clothesSlice.reducer;