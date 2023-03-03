import Input from '../../components/CreateEmployee/Input'
import { render } from '../../utils/render'
import { screen } from '@testing-library/react'

const handleChange = jest.fn()

describe('Input', () => {
  it('Should render input', async () => {
    render(
      <Input
        direction={'row'}
        charAndId={'first-name'}
        inputType={'text'}
        value={'Test'}
        onChange={handleChange}
        required={true}
      />
    )
    expect(screen.getByDisplayValue('Test')).toBeTruthy()
  })
})
