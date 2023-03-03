import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clothesReducer from "./clothesReducer";
import filtersReducer from "./filterReducer";
import currentClothesReducer from "./currentClothesReducer";


const rootReducer = combineReducers({clothesReducer, filtersReducer, currentClothesReducer});

export const setupStore = () => {
    return configureStore({reducer: rootReducer});
}