import { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavIcon } from '../../atoms'
import { grey700 } from '../../../assets/constants/colors'

const ScreenNav = (): JSX.Element => {
  const fontAwesome = 'FontAwesome' as const
  const fontAwesome5 = 'FontAwesome5' as const

  const [activeIndex, setActiveIndex] = useState(0)

  const handleIconPress = (index: number): void => {
    setActiveIndex(index)
  }

  const icons = [
    { iconPack: fontAwesome, faIconName: 'line-chart', text: 'Progress' },
    { iconPack: fontAwesome5, faIconName: 'dumbbell', text: 'Workouts' },
    { iconPack: fontAwesome, faIconName: 'gear', text: 'Settings' }
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
          handlePress={() => handleIconPress(index)}
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
