import Loader from '../../components/Loader'
import { render } from '../../utils/render'
import { screen } from '@testing-library/react'

describe('Loader', () => {
  it('Should render loader', async () => {
    render(<Loader />)
    expect(screen.getByTestId('loader')).toBeTruthy()
  })
})
