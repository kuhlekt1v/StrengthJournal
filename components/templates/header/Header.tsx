import { View, StyleSheet } from 'react-native'

interface IHeader {
  children: React.ReactNode
}

const Header = ({ children }: IHeader): JSX.Element => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    paddingBottom: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Header
