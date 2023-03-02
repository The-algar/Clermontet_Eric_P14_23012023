import { createAction } from "@reduxjs/toolkit";

export const createNewEmployee = createAction(
  'create-new-employee',
  (employee) => {
    return {
      payload: employee,
    }
  }
)