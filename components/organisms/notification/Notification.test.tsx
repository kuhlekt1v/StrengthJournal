import React from 'react'
import { render, waitFor } from '@testing-library/react-native'
import Notification from './Notification'

const NotificationComponent = () => {
  return render(
    <Notification title='Test Title' body='Test Body' type='info' />
  )
}

describe('Notification Component', () => {
  it('renders without errors', () => {
    NotificationComponent()
  })

  it('renders with correct title, body, and type', async () => {
    const { getByText } = NotificationComponent()

    const title = await waitFor(() => getByText('Test Title'))
    const body = await waitFor(() => getByText('Test Body'))

    expect(title).toBeTruthy()
    expect(body).toBeTruthy()
  })

  it('applies correct style based on type', async () => {
    const { getByText, getByTestId } = NotificationComponent()
    const notification = getByTestId('notification')
    const title = await waitFor(() => getByText('Test Title'))

    expect(notification.props.children.props.style[1].backgroundColor).toBe(
      '#E5F6FD'
    )
    expect(title.props.style.color).toBe('#054664')
  })
})
