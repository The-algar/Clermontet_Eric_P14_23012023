import { createReducer } from "@reduxjs/toolkit"
import { createNewEmployee } from "../actions/newCreateEmployee"


const initialStateNewEmployee = {
  employee: {},
  isCreated: false,
}

export const newEmployeeReducer = createReducer(initialStateNewEmployee, (builder) => {
  return builder
    .addCase(createNewEmployee, (draft, action) => {
      draft.employee = action.payload
      draft.isCreated = true
      return
    })
})