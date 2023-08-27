import { View } from 'react-native'
import WorkoutScreen from './components/screens/workout-screen/WorkoutScreen'
import ProgressScreen from './components/screens/progress-screen/ProgressScreen'
import SettingsScreen from './components/screens/settings-screen/SettingsScreen'

import { ScreenNav } from './components/organisms'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = (): JSX.Element => {
  return (
    <View style={{ flex: 1 }}>
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
          <Stack.Screen
            name='Settings'
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
        <ScreenNav />
      </NavigationContainer>
    </View>
  )
}

export default App
