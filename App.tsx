import { StyleSheet, View } from 'react-native'
import { grey600 } from './assets/constants/colors'
import WorkoutScreen from './components/screens/workout-screen/WorkoutScreen'

const App = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <WorkoutScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: grey600
  }
})

export default App
