import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown'
import {
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
}

const Select = ({ data }: ISelect) => {
  const [value, setValue] = useState<string | null>(null)

  return (
    <Dropdown
      iconColor={primary}
      activeColor={secondary}
      style={styles.dropdown}
      containerStyle={{ backgroundColor: grey400 }}
      placeholderStyle={{ color: primary }}
      selectedTextStyle={{ color: primary }}
      data={data}
      value={value}
      labelField='label'
      valueField='value'
      placeholder='Select exercise'
      onChange={(item) => {
        setValue(item.value)
      }}
    />
  )
}

const styles = StyleSheet.create({
  dropdown: {
    color: primary,
    backgroundColor: grey600,
    borderColor: primary,
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    height: 50
  }
})

export default Select
