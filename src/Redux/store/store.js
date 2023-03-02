import { configureStore } from "@reduxjs/toolkit"
import { getEmployeesReducer } from "../reducers/getEmployeesReducer"

export const store = configureStore({
  reducer: {
    getEmployees: getEmployeesReducer,
  }
})