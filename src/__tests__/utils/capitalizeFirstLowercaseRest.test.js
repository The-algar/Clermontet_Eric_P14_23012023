import { capitalizeFirstLowercaseRest } from '../../utils/capitalizeFirstLowercaseRest'

it('Should capitalize first letter', () => {
  const string = 'tEst-caPiTaliZe-firSt-leTter'
  expect(capitalizeFirstLowercaseRest(string)).toBe('Test Capitalize First Letter')
})
