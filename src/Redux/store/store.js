import { configureStore } from "@reduxjs/toolkit";
import { newEmployeeReducer } from "../reducers/newEmployeeReducer";


export const store = configureStore({
  reducer: {
    newEmployee: newEmployeeReducer,
  }
})