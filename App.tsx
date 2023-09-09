import { useEffect, useState } from 'react'

import { View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ScreenNav } from './components/organisms'
import Notification from './components/organisms/notification/Notification'
import WorkoutScreen from './components/screens/workout-screen/WorkoutScreen'
import ProgressScreen from './components/screens/progress-screen/ProgressScreen'
import SettingsScreen from './components/screens/settings-screen/SettingsScreen'
import { initializeDatabase } from './utils/dbService'
import { grey600 } from './assets/constants/colors'

const { Screen, Navigator } = createNativeStackNavigator()

const App = (): JSX.Element => {
  const [error, setError] = useState({
    title: '',
    msg: ''
  })
  // Create tables if not exist and seed with data.
  useEffect(() => {
    initializeDatabase().catch((err) => {
      setError({ title: 'Error', msg: err.message })
    })
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        {error.title.length > 0 ? (
          <View
            style={{ flex: 1, paddingHorizontal: 20, backgroundColor: grey600 }}
          >
            <Notification title={error.title} body={error.msg} type='error' n />
          </View>
        ) : (
          <>
            <Navigator>
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
          </>
        )}
      </NavigationContainer>
    </View>
  )
}

export default App
