import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ref, get } from "firebase/database";
import { database } from "../firebase";


const initialState = {
    cartItems: {},
    isLoading: false,
    error: null
}

export const cartSlice = createSlice({
    name: 'cart', 
    initialState, 
    reducers: {
        addToCart(state, action) {
            state.cartItems[action.payload.id] = {params: action.payload.params, count: 1};
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCartItemsInfo.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getCartItemsInfo.fulfilled, (state, action) => {
                Object.keys(action.payload).map(key => {
                    state.cartItems[key] = {data: action.payload[key], params: state.cartItems[key].params, count: 1};
                })
                state.isLoading = false;
            })
            .addCase(getCartItemsInfo.rejected, (state) => {
                state.isLoading = false;
            })
    }   
})


export const getCartItemsInfo = createAsyncThunk('cart/getCartItemsInfo', async (cartItems) => {
    let cartItemsInfo = {};

    const cartItemsPromises = Object.keys(cartItems).map(id => `clothes/${id}`)
    let snapshots = await Promise.all(cartItemsPromises.map(item => get(ref(database, item))));

    snapshots.map(childSnapshot => cartItemsInfo[childSnapshot.val().id] = childSnapshot.val());
    return cartItemsInfo;
})

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;