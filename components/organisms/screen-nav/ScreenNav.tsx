import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavIcon } from '../../atoms'
import { grey700 } from '../../../assets/constants/colors'
import { useNavigation } from '@react-navigation/native'

const ScreenNav = (): JSX.Element => {
  const fontAwesome = 'FontAwesome' as const
  const fontAwesome5 = 'FontAwesome5' as const

  const [activeIndex, setActiveIndex] = useState(0)
  const navigation = useNavigation()

  const handleIconPress = (index: number, text: string): void => {
    setActiveIndex(index)
    // @ts-expect-error Unknown error.
    // Text must match an existing NavigatorScreen.
    navigation.navigate(text)
  }

  const icons = [
    {
      iconPack: fontAwesome,
      faIconName: 'line-chart',
      text: 'Progress',
      testID: 'Progress-ID'
    },
    {
      iconPack: fontAwesome5,
      faIconName: 'dumbbell',
      text: 'Workouts',
      testID: 'Workouts-ID'
    },
    {
      iconPack: fontAwesome,
      faIconName: 'gear',
      text: 'Settings',
      testID: 'Settings-ID'
    }
  ]

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => (
        <NavIcon
          key={index}
          iconPack={icon.iconPack}
          faIconName={icon.faIconName}
          text={icon.text}
          active={index === activeIndex}
          handlePress={() => handleIconPress(index, icon.text)}
          testID={icon.testID}
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 85,
    width: '100%',
    paddingTop: 10,
    paddingBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: grey700
  }
})

export default ScreenNav
