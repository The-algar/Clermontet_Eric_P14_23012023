import { createReducer } from "@reduxjs/toolkit";
import {
  employeesListError,
  employeesListLoading,
  employeesListSuccess,
} from "../actions/actionGetEmployees";

const initialStateGetEmployees = {
  isLoading: false,
  employees: [],
  isEmpty: true,
  error: null,
};

export const getEmployeesReducer = createReducer(
  initialStateGetEmployees,
  (builder) => {
    return builder
      .addCase(employeesListLoading, (draft) => {
        draft.isLoading = true;
        return;
      })
      .addCase(employeesListSuccess, (draft, action) => {
        draft.isLoading = false;
        draft.isEmpty = false;
        draft.employees = action.payload;
        draft.error = "";
        return;
      })
      .addCase(employeesListError, (draft, action) => {
        draft.isLoading = false;
        draft.isEmpty = true;
        draft.user = [];
        draft.error = action.payload;
        return;
      });
  }
);
