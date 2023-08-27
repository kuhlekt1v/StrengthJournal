import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import {
  charcoal,
  grey400,
  grey600,
  primary,
  secondary
} from '../../../assets/constants/colors'

interface IData {
  label: string
  value: string
}

interface ISelect {
  data: IData[]
  placeholder: string
}

const Select = ({ data, placeholder }: ISelect) => {
  const [value, setValue] = useState<string | null>(null)

  const lineColor = value === null ? primary : charcoal
  const borderColor = value === null ? primary : secondary
  const backgroundColor = value === null ? grey600 : secondary

  return (
    <Dropdown
      iconColor={lineColor}
      iconStyle={styles.iconStyle}
      activeColor={secondary}
      style={[styles.dropdown, { backgroundColor, borderColor }]}
      containerStyle={{ backgroundColor: grey400 }}
      placeholderStyle={{ color: primary }}
      selectedTextStyle={{ color: lineColor }}
      data={data}
      value={value}
      labelField='label'
      valueField='value'
      placeholder={placeholder}
      onChange={(item) => {
        setValue(item.value)
      }}
    />
  )
}

const styles = StyleSheet.create({
  dropdown: {
    color: primary,
    borderColor: primary,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 50,
    marginVertical: 10
  },
  iconStyle: {
    width: 30,
    height: 30
  }
})

export default Select
