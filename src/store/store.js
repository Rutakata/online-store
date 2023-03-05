import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clothesReducer from "./clothesReducer";
import filtersReducer from "./filterReducer";
import currentClothesReducer from "./currentClothesReducer";
import cartReducer from "./cartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({clothesReducer, filtersReducer, currentClothesReducer, cartReducer});

export const setupStore = () => {
    return configureStore({reducer: rootReducer}, composeWithDevTools());
}