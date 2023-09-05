import { View } from 'react-native'
import WorkoutScreen from './components/screens/workout-screen/WorkoutScreen'
import ProgressScreen from './components/screens/progress-screen/ProgressScreen'
import SettingsScreen from './components/screens/settings-screen/SettingsScreen'

import { ScreenNav } from './components/organisms'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useEffect } from 'react'
import { initializeDatabase } from './utils/dbService'

const { Screen, Navigator } = createNativeStackNavigator()

const App = (): JSX.Element => {
  // Create tables if not exist and seed with data.
  useEffect(() => {
    initializeDatabase()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Navigator initialRouteName='Progress'>
          <Screen
            name='Progress'
            component={ProgressScreen}
            options={{ headerShown: false }}
          />
          <Screen
            name='Workouts'
            component={WorkoutScreen}
            options={{ headerShown: false }}
          />
          <Screen
            name='Settings'
            component={SettingsScreen}
            options={{ headerShown: false }}
          />
        </Navigator>
        <ScreenNav />
      </NavigationContainer>
    </View>
  )
}

export default App
