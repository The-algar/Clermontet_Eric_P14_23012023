import { configureStore } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { App } from '../App'
import { getEmployeesReducer } from '../Redux/reducers/getEmployeesReducer'

const store = configureStore({
  reducer: {
    getEmployees: getEmployeesReducer,
  },
})
describe('App', () => {
  it('Should render without crashing', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})
