import React from 'react'
import { View } from 'react-native'
import { render, fireEvent } from '@testing-library/react-native'
import Select from './Select'

jest.spyOn(View.prototype, 'measureInWindow').mockImplementation((cb) => {
  // eslint-disable-next-line
  cb(18, 113, 357, 50)
})

describe('Select component', () => {
  const testData = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ]

  it('renders the component with provided data', async () => {
    const { getByText } = render(
      <Select data={testData} placeholder='Select item' />
    )

    // Open dropdown.
    fireEvent.press(getByText('Select item'))

    // Confirm each item in testData exists.
    testData.forEach((option) => {
      const item = getByText(option.label)
      expect(item).toBeTruthy()
    })
  })

  it('updates the selected value on change', () => {
    const { getByText } = render(
      <Select data={testData} placeholder='Select item' />
    )

    // Open dropdown & select an item.
    fireEvent.press(getByText('Select item'))
    fireEvent.press(getByText('Option 2'))

    const selectedValue = testData.find(
      (item) => item.label === getByText('Option 2').props.children
    )?.value

    expect(selectedValue).toBe('2')
  })
})
