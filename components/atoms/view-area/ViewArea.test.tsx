import { render } from '@testing-library/react-native'
import ViewArea from './ViewArea'
import { Text } from 'react-native'

describe('View area component', () => {
  it('Displays children components', () => {
    const { getByText } = render(
      <ViewArea>
        <Text>Placeholder</Text>
      </ViewArea>
    )

    expect(getByText('Placeholder')).toBeTruthy()
  })
})
