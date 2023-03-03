// IMPORTS // ______________________________________________________________

import { createAction } from '@reduxjs/toolkit'

// ACTIONS // ______________________________________________________________

/**
 * Redux actions get user
 * @reduxAction
 */

export const employeesListLoading = createAction('firebase-employees-list-loading')

export const employeesListSuccess = createAction(
  'firebase-employees-list-success',
  (employees) => {
    return {
      payload: employees,
    }
  }
)

export const employeesListError = createAction(
  'firebase-employees-list-error', (error) => {
  return {
    payload: error,
  }
})