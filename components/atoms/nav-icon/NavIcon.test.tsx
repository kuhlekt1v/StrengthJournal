import React, { useState } from 'react'
import NavIcon from './NavIcon'
import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { grey500, primary } from '../../../assets/constants/colors'

const fontAwesome = 'FontAwesome' as const

const TestComponent = () => {
  const [isActive, setIsActive] = useState(true)
  const handlePress = (): void => setIsActive(!isActive)

  return (
    <NavIcon
      iconPack={fontAwesome}
      faIconName='line-chart'
      text='Test Icon'
      active={isActive}
      handlePress={handlePress}
      testID='test-icon'
    />
  )
}

describe('Navigation icon component', () => {
  const renderNavIconComponent = () => {
    return render(<TestComponent />)
  }

  it('Icon is visible.', () => {
    const { getByText } = renderNavIconComponent()
    const label = getByText('Test Icon')

    expect(label).toBeTruthy()
  })

  it('State changes on click', async () => {
    const { getByTestId } = renderNavIconComponent()
    const iconComponent = getByTestId('icon-component')

    // Icon color changes based on state.
    expect(iconComponent.props.style[0].color).toBe(primary)

    fireEvent.press(iconComponent)

    // Wait for component to update after fire event.
    await waitFor(() => {
      expect(iconComponent.props.style[0].color).toBe(grey500)
    })
  })
})
