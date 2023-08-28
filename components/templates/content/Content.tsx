import { View, StyleSheet } from 'react-native'
import { grey600 } from '../../../assets/constants/colors'

interface IContent {
  testID?: string
  children: React.ReactNode
}

const Content = ({ children }: IContent): JSX.Element => {
  return (
    <View testID='content-component' style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: grey600,
    flex: 1
  }
})

export default Content
