import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { primary } from '../../../assets/constants/colors'

import type { IIcon } from '../../../types/IIcon'

interface IIconTitle {
  iconPosition: 'start' | 'end'
  icon: IIcon
  text: string
  color?: string
}

const Icon = ({ icon, color }: { icon: IIconTitle['icon']; color: string }) => {
  const { iconPack, faIconName } = icon
  const IconComponent = iconPack === 'FontAwesome' ? FontAwesome : FontAwesome5

  return (
    <IconComponent
      name={
        faIconName as
          | keyof typeof FontAwesome.glyphMap
          | keyof typeof FontAwesome5.glyphMap
      }
      size={30}
      color={color}
      testID='icon-img'
    />
  )
}

const IconTitle = ({
  text,
  icon,
  color = primary,
  iconPosition = 'start'
}: IIconTitle) => {
  return (
    <View
      style={{
        flexDirection: iconPosition === 'end' ? 'row-reverse' : 'row',
        alignItems: 'center'
      }}
      testID='icon-title'
    >
      <Icon icon={icon} color={color} />
      <Text
        style={{
          color,
          fontSize: 28,
          fontWeight: '500',
          marginRight: iconPosition === 'end' ? 15 : 0,
          marginLeft: iconPosition === 'start' ? 15 : 0
        }}
      >
        {text}
      </Text>
    </View>
  )
}

export default IconTitle
