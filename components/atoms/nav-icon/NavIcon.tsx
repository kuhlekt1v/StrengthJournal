import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import { grey500, primary } from '../../../assets/constants/colors'

interface INavIcon {
  iconPack: 'FontAwesome' | 'FontAwesome5'
  faIconName: string
  active: boolean
  text: string
  testID: string
  handlePress: () => void
}

const NavIcon = ({
  iconPack,
  faIconName,
  active,
  text,
  handlePress,
  testID
}: INavIcon): JSX.Element => {
  const IconComponent = iconPack === 'FontAwesome' ? FontAwesome : FontAwesome5
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <IconComponent
          name={
            faIconName as
              | keyof typeof FontAwesome.glyphMap
              | keyof typeof FontAwesome5.glyphMap
          }
          size={38}
          color={active ? primary : grey500}
          testID='icon-component'
        />
        <Text style={{ color: active ? primary : grey500 }} testID={testID}>
          {text}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  }
})

export default NavIcon
