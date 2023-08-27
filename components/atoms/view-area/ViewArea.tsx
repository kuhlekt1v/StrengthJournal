import React from 'react'
import { View, StyleSheet } from 'react-native'
import { primary } from '../../../assets/constants/colors'

interface IViewArea {
  children: React.ReactNode | null
}

const ViewArea = ({ children }: IViewArea) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: primary,
    height: '60%',
    marginTop: 15,
    marginBottom: 20
  }
})

export default ViewArea
