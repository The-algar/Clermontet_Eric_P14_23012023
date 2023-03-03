import CreateEmployee from '../../pages/CreateEmployee'
import { render } from '../../utils/render'
import { screen, fireEvent, waitFor } from '@testing-library/react'

const setupModal = () => {
  const utils = render(<CreateEmployee />)
  const firstName = screen.getByTestId('first-name')
  const lastName = screen.getByTestId('last-name')
  const dateOfBirth = screen.getByTestId('date-of-birth')
  const startDate = screen.getByTestId('start-date')
  const street = screen.getByTestId('street')
  const city = screen.getByTestId('city')
  const zipCode = screen.getByTestId('zip-code')
  const save = screen.getByTestId('save')
  fireEvent.change(firstName, { target: { value: 'Tony' } })
  fireEvent.change(lastName, { target: { value: 'Stark' } })
  fireEvent.change(dateOfBirth, { target: { value: '1958-10-26' } })
  fireEvent.change(startDate, { target: { value: '2023-02-01' } })
  fireEvent.change(street, { target: { value: 'Avengers Blvd, 01' } })
  fireEvent.change(city, { target: { value: 'Montgomery' } })
  fireEvent.change(zipCode, { target: { value: 10001 } })

  fireEvent.click(save)

  return {
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    street,
    city,
    zipCode,
    save,
    ...utils,
  }
}

describe('Create Employee Tab', () => {
  test('Should render Create Employee Tab', async () => {
    render(<CreateEmployee />)
    const h2 = screen.getByText('Create employee')
    expect(h2).toBeTruthy()
  })
})