import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, orderByChild, get } from "firebase/database";
import { database } from "../firebase";

const companiesRef = ref(database, 'companies');
const materialsRef = ref(database, 'materials');
const sizesRef = ref(database, 'sizes');
const typesRef = ref(database, 'types');

const initialState = {
    companies: [],
    materials: [],
    sizes: [],
    types: [],
    isLoading: false,
    error: null
}

export const filtersSlice = createSlice({
    name: 'filters', 
    initialState, 
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFilters.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getFilters.fulfilled, (state, action) => {
                state.companies = action.payload.companies;
                state.materials = action.payload.materials;
                state.sizes = action.payload.sizes;
                state.types = action.payload.types;
                state.isLoading = false;
                console.log(state);
            })
            .addCase(getFilters.rejected, (state, action) => {
                state.error = action.error.message;
                state.isLoading = false;
            })
    }
})

export const getFilters = createAsyncThunk('filters/getFilters', async() => {
    const [companiesSnapshot, materialsSnapshot, sizesSnapshot, typesSnapshot ] = await Promise.all([
        get(companiesRef),
        get(materialsRef),
        get(sizesRef),
        get(typesRef)
    ])

    const companies = companiesSnapshot.val();
    const materials = materialsSnapshot.val();
    const sizes = sizesSnapshot.val();
    const types = typesSnapshot.val();

    return {companies, materials, sizes, types};
})

export default filtersSlice.reducer;