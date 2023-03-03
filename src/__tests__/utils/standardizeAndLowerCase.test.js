import { standardizeAndLowerCase } from '../../utils/standardizeAndLowerCase'

it('Should standardize and lower case', () => {
  const string = 'Bâl.ädéÉ'
  expect(standardizeAndLowerCase(string)).toBe('baladee')
})
