import { View, StyleSheet } from 'react-native'
import { Content } from '../../templates'
import { Select, Title } from '../../atoms'
import { primary } from '../../../assets/constants/colors'

const data = [
  {
    label: 'Squat',
    value: '1'
  },
  {
    label: 'Bench',
    value: '2'
  },
  {
    label: 'Dead Lift',
    value: '3'
  },
  {
    label: 'Press',
    value: '4'
  },
  {
    label: 'Power Clean',
    value: '5'
  }
]

const ProgressScreen = (): JSX.Element => {
  return (
    <Content>
      <View
        style={{
          width: '100%',
          height: '90%'
        }}
      >
        <Title type='h1'>Progress</Title>
        <Select data={data} placeholder='Select exercise' />
        <Title type='h2'>Max Weight Lifted</Title>
        <View
          style={{
            marginVertical: 10,
            borderBottomColor: primary,
            borderBottomWidth: StyleSheet.hairlineWidth
          }}
        />
      </View>
    </Content>
  )
}

export default ProgressScreen
