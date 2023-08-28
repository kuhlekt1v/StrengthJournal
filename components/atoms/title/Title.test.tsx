import Title from './Title'
import { render } from '@testing-library/react-native'

describe('Title component', () => {
  it('displays supplied text', () => {
    const { getByText } = render(<Title type='h1'>Test</Title>)
    expect(getByText('Test')).toBeTruthy()
  })

  it('applies the correct style for type', () => {
    const { getByText: getByTextH1 } = render(<Title type='h1'>Test</Title>)
    const { getByText: getByTextH2 } = render(<Title type='h2'>Test</Title>)
    const h1Component = getByTextH1('Test')
    const h2Component = getByTextH2('Test')

    expect(h1Component).toHaveStyle({
      fontSize: 30,
      fontWeight: '500'
    })

    expect(h2Component).toHaveStyle({
      fontSize: 24,
      fontWeight: '300'
    })
  })
})
