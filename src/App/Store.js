import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/Counters/CountersSlice";

const store = configureStore({
    reducer:{
        counters: countersReducer
    }
})

export default store;