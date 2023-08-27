import { View } from 'react-native'
import WorkoutScreen from './components/screens/workout-screen/WorkoutScreen'
import ProgressScreen from './components/screens/progress-screen/ProgressScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenNav } from './components/organisms'

const Stack = createNativeStackNavigator()

const App = (): JSX.Element => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Progress'>
          <Stack.Screen
            name='Progress'
            component={ProgressScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Workouts'
            component={WorkoutScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <ScreenNav />
      </NavigationContainer>
    </View>
  )
}

export default App
