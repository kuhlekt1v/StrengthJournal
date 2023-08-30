import { render, fireEvent } from '@testing-library/react-native'
import { NavigationContainer } from '@react-navigation/native'
import type { ReactTestInstance } from 'react-test-renderer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import ScreenNav from './ScreenNav'
import WorkoutScreen from '../../screens/workout-screen/WorkoutScreen'
import ProgressScreen from '../../screens/progress-screen/ProgressScreen'
import SettingsScreen from '../../screens/settings-screen/SettingsScreen'

import { primary } from '../../../assets/constants/colors'

const Stack = createNativeStackNavigator()

// Mock the useNavigation hook.
const mockedNavigate = jest.fn()
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native')
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate
    })
  }
})

describe('ScreenNav component', () => {
  it('changes active index & navigates on press', async () => {
    const { getByTestId } = render(
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
    )

    const getActiveStyle = (element: ReactTestInstance) =>
      element.props.style.color === primary

    const firstIcon = getByTestId('Progress-ID')
    const secondIcon = getByTestId('Workouts-ID')
    const thirdIcon = getByTestId('Settings-ID')

    // Default case.
    expect(getActiveStyle(firstIcon)).toBeTruthy()
    expect(getActiveStyle(secondIcon)).toBeFalsy()
    expect(getActiveStyle(thirdIcon)).toBeFalsy()

    fireEvent.press(secondIcon)
    expect(mockedNavigate).toHaveBeenCalledWith('Workouts')

    expect(getActiveStyle(firstIcon)).toBeFalsy()
    expect(getActiveStyle(secondIcon)).toBeTruthy()
    expect(getActiveStyle(thirdIcon)).toBeFalsy()

    fireEvent.press(thirdIcon)
    expect(mockedNavigate).toHaveBeenCalledWith('Settings')

    expect(getActiveStyle(firstIcon)).toBeFalsy()
    expect(getActiveStyle(secondIcon)).toBeFalsy()
    expect(getActiveStyle(thirdIcon)).toBeTruthy()
  })
})
