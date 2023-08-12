import { Text, View } from 'react-native'
import { Content } from '../../templates'
import { ScreenNav } from '../../organisms'

const WorkoutScreen = (): JSX.Element => {
  return (
    <>
      <Content>
        <View style={{ borderWidth: 1, borderColor: 'red', width: '100%' }}>
          <Text>Main content area</Text>
        </View>
      </Content>
      <ScreenNav />
    </>
  )
}

export default WorkoutScreen
