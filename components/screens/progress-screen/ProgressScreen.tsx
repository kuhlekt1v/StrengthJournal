import { View, Text, StyleSheet } from 'react-native'
import { Content } from '../../templates'
import { Select, Selector, Title } from '../../atoms'
import { primary } from '../../../assets/constants/colors'
import ViewArea from '../../atoms/view-area/ViewArea'

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
      <ViewArea>
        <Text>Placeholder</Text>
      </ViewArea>
      <Selector size={24} quantity={3} color={primary} padding={10} />
    </Content>
  )
}

export default ProgressScreen
