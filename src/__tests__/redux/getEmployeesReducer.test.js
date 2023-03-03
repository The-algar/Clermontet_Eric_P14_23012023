import { getEmployeesReducer } from '../../Redux/reducers/getEmployeesReducer'
import * as actions from '../../Redux/actions/actionGetEmployees'

const initialStateGetEmployees = {
  isLoading: false,
  employees: [],
  isEmpty: true,
  error: null,
}

describe('Reducer', () => {
  it('should return the initial state when state is undefined', async () => {
    expect(getEmployeesReducer(undefined, { type: '@INIT' })).toEqual({
      isLoading: false,
      employees: [],
      isEmpty: true,
      error: null,
    })
  })
  it('should return state updatedwhen data loading', async () => {
    expect(
      getEmployeesReducer(
        initialStateGetEmployees,
        actions.employeesListLoading
      )
    ).toEqual({
      isLoading: true,
      employees: [],
      isEmpty: true,
      error: null,
    })
  })
  it('should return state updated with fetched data', async () => {
    expect(
      getEmployeesReducer(
        initialStateGetEmployees,
        actions.employeesListSuccess
      )
    ).toEqual({
      isLoading: false,
      employees: undefined,
      isEmpty: false,
      error: '',
    })
  })
  it('should return state with an error if fetching data is rejected', async () => {
    expect(
      getEmployeesReducer(initialStateGetEmployees, actions.employeesListError)
    ).toEqual({
      isLoading: false,
      employees: [],
      isEmpty: true,
      error: undefined,
      user: [],
    })
  })
})
