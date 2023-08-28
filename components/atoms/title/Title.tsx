import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { primary } from '../../../assets/constants/colors'

interface IText {
  children: string
  type: 'h1' | 'h2'
}

const Title = ({ children, type }: IText) => {
  const titleStyle = type === 'h1' ? styles.h1 : styles.h2
  return <Text style={[styles.base, titleStyle]}>{children}</Text>
}

const styles = StyleSheet.create({
  base: {
    color: primary,
    marginVertical: 10
  },

  h1: {
    fontSize: 30,
    fontWeight: '500'
  },
  h2: {
    fontSize: 24,
    fontWeight: '300'
  }
})

export default Title
