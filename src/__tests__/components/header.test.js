import Header from '../../components/Header'
import { render } from '../../utils/render'
import { screen } from '@testing-library/react'

describe('Header', () => {
  it('Should render header', async () => {
    render(<Header />)
    expect(screen.getByText('Wealth Health')).toBeTruthy()
  })
})
