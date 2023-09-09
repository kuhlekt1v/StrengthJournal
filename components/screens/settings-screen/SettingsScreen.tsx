import React from 'react'
import { Content } from '../../templates'

import Notification from '../../organisms/notification/Notification'

const SettingsScreen = () => {
  return (
    <Content>
      <Notification
        title='Test Description'
        body='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        type='success'
      />
    </Content>
  )
}

export default SettingsScreen
