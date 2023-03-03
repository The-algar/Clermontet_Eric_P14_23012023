import EmployeeList from '../../pages/ListEmployee'
import { render } from '../../utils/render'
import { screen } from '@testing-library/react'

describe('Employees List', () => {
  test('Should render Employees List tab', async () => {
    render(<EmployeeList />)
    const h2 = screen.getByText('List employees')
    expect(h2).toBeTruthy()
  })
})
