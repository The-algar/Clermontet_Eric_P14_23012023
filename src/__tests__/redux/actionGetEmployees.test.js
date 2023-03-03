import * as actions from '../../Redux/actions/actionGetEmployees'

describe('Actions', () => {
  it('Should create a loading action object', async () => {
    expect(actions.employeesListLoading()).toEqual({
      type: 'firebase-employees-list-loading',
    })
  })
  it('Should create a success action object', async () => {
    expect(actions.employeesListSuccess('employees')).toEqual({
      type: 'firebase-employees-list-success',
      payload: 'employees',
    })
  })
  it('Should create an error action object', async () => {
    expect(actions.employeesListError('error')).toEqual({
      type: 'firebase-employees-list-error',
      payload: 'error',
    })
  })
})
