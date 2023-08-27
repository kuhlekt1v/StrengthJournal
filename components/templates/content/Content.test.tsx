import Content from './Content'
import { Text } from 'react-native'
import { render } from '@testing-library/react-native'
import { grey600 } from '../../../assets/constants/colors'

const renderContentComponent = () => {
  return render(
    <Content testID='content-component'>
      <Text>Test Child</Text>
    </Content>
  )
}

describe('Content template component', () => {
  it('Should render its children correctly', () => {
    const { getByText } = renderContentComponent()

    const childElement = getByText('Test Child')
    expect(childElement).toBeTruthy()
  })

  it('Should apply the correct styles', async () => {
    const { findByTestId } = renderContentComponent()

    const content = await findByTestId('content-component')
    expect(content).toBeTruthy()

    expect(content).toHaveStyle({
      flex: 1,
      width: '100%',
      paddingTop: 50,
      paddingBottom: 10,
      paddingLeft: 20,
      paddingRight: 20,
      backgroundColor: grey600
    })
  })
})
