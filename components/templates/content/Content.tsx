import { View, StyleSheet } from 'react-native'

interface IContent {
  testID: string
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
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default Content
