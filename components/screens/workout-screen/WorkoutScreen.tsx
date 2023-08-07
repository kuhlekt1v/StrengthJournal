import { Text, View } from 'react-native'
import { Content } from '../../templates'

const WorkoutScreen = (): JSX.Element => {
  return (
    <>
      <Content>
        <View style={{ borderWidth: 1, borderColor: 'red', width: '100%' }}>
          <Text>Main content area</Text>
        </View>
      </Content>
    </>
  )
}

export default WorkoutScreen
