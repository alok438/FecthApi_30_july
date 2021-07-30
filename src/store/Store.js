import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../action/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
});
