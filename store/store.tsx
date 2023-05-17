import { configureStore } from "@reduxjs/toolkit";
import { origenSlice } from "./mySlice";

export default configureStore({
    reducer: {
        misValores:origenSlice.reducer,
    }
})