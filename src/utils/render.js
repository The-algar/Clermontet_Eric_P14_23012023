// IMPORTS // ______________________________________________________________

import { configureStore } from '@reduxjs/toolkit'
import { getEmployeesReducer } from '../Redux/reducers/getEmployeesReducer'
import { MemoryRouter } from 'react-router'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'

export function render(ui, options) {
  const store = configureStore({
    reducer: {
      getEmployees: getEmployeesReducer,
    },
  })

  function Wrapper({ children }) {
    return (
      <MemoryRouter {...options}>
        <Provider store={store}>{children}</Provider>
      </MemoryRouter>
    )
  }
  rtlRender(ui, { wrapper: Wrapper })
}
