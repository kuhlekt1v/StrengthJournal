import { render } from '@testing-library/react-native'
import IconTitle from './IconTitle'

jest.mock('react-native-vector-icons/FontAwesome', () => 'Icon')

describe('IconTitle Component', () => {
  const IconTitleComponent = (position: 'start' | 'end') => {
    return render(
      <IconTitle
        iconPosition={position}
        text='Test Description'
        icon={{ iconPack: 'FontAwesome', faIconName: 'warning' }}
        color='red'
      />
    )
  }

  it('displays icon at the beginning/end based on provided positon', () => {
    const { getByTestId: StartIcon } = IconTitleComponent('start')
    const { getByTestId: EndIcon } = IconTitleComponent('end')

    expect(StartIcon('icon-title')).toHaveStyle({
      flexDirection: 'row'
    })

    expect(EndIcon('icon-title')).toHaveStyle({
      flexDirection: 'row-reverse'
    })
  })

  it('has visible text', () => {
    const { getByText } = IconTitleComponent('start')
    expect(getByText('Test Description')).toBeTruthy()
  })

  it('includes an icon', () => {
    const { getByTestId } = IconTitleComponent('start')
    expect(getByTestId('icon-img')).toBeDefined()
  })
})
