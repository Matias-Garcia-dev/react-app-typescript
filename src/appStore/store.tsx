import { configureStore } from '@reduxjs/toolkit'
import userReducer from "../components/userSlice/userSlice"

export default configureStore({
    reducer: {
        user: userReducer
    }
});