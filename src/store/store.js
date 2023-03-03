import { configureStore, combineReducers } from "@reduxjs/toolkit";
import clothesReducer from "./clothesReducer";
import filtersReducer from "./filterReducer";


const rootReducer = combineReducers({clothesReducer, filtersReducer});

export const setupStore = () => {
    return configureStore({reducer: rootReducer});
}