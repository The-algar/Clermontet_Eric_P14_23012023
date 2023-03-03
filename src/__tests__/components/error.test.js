import Error from '../../components/Error'
import { render } from '../../utils/render'
import { screen } from '@testing-library/react'

describe('Error', () => {
  it('Should render Error component', async () => {
    render(<Error />)
    screen.debug()
    expect(screen.getByText('Whoops! The page you requested does not exist.')).toBeTruthy()
  })
})
