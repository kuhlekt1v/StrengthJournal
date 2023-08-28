import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

interface ISelector {
  size: number
  quantity: number
  color: string
  padding: number
  onSelect: (index: number) => void
}

const Selector = ({ size, quantity, color, padding, onSelect }: ISelector) => {
  const [selected, setSelected] = useState<number | null>(0)

  const handleCirclePress = (index: number) => {
    selected === index ? setSelected(null) : setSelected(index)
    onSelect(index)
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      {Array.from({ length: quantity }, (_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCirclePress(index)}
          testID={`circle-${index}`}
        >
          <FontAwesome
            key={index}
            name={selected === index ? 'circle' : 'circle-thin'}
            size={size}
            color={color}
            style={{ paddingHorizontal: padding }}
            testID={
              selected === index
                ? `selected-circle-${index}`
                : `deselected-circle-${index}`
            }
          />
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default Selector
