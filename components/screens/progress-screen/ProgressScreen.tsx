import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Content } from '../../templates'
import { Select, Selector, Title } from '../../atoms'
import { primary } from '../../../assets/constants/colors'
import ViewArea from '../../atoms/view-area/ViewArea'
import { SQLResultSet, openDatabase } from 'expo-sqlite'
import { databaseName } from '../../../utils/dbService'
import type { IData } from '../../../types/IData'
import { GET_ALL } from '../../../utils/apiService'
import useDatabaseQuery from '../../../hooks/useDatabaseQuery'

// Will eventually be fetched from database.
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

// Move to own components
const Graph1 = () => (
  <View>
    <Text>Graph 1</Text>
  </View>
)

const Graph2 = () => (
  <View>
    <Text>Graph 2</Text>
  </View>
)

const graphComponents = [Graph1, Graph2]

const ProgressScreen = (): JSX.Element => {
  const { data, error } = useDatabaseQuery('GET_ALL', 'exercise')
  const [selectedGraphIndex, setSelectedGraphIndex] = useState<number>(0)

  const dropdownData: IData[] = data?.map((item) => ({
    value: item.id.toString(),
    label: item.description
  }))

  const handleGraphSelect = (index: number) => {
    setSelectedGraphIndex(index)
  }

  return (
    <Content>
      <Title type='h1'>Progress</Title>
      {error ? (
        <Text>{error.message}</Text>
      ) : (
        <>
          <Select data={dropdownData} placeholder='Select exercise' />
          <Title type='h2'>Max Weight Lifted</Title>
          <View
            style={{
              marginVertical: 10,
              borderBottomColor: primary,
              borderBottomWidth: StyleSheet.hairlineWidth
            }}
          />
          <ViewArea>{graphComponents[selectedGraphIndex]()}</ViewArea>
          <Selector
            size={24}
            quantity={graphComponents.length}
            color={primary}
            padding={10}
            onSelect={handleGraphSelect}
          />
        </>
      )}
    </Content>
  )
}

export default ProgressScreen
