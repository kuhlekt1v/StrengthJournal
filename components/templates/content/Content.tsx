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
    flex: 1,
    width: '100%',
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: grey600
  }
})

export default Content
