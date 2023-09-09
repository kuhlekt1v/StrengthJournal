import React from 'react'
import IconTitle from '../../molecules/icon-title/IconTitle'
import {
  errorLight,
  errorDark,
  warningLight,
  warningDark,
  infoLight,
  infoDark,
  successLight,
  successDark
} from '../../../assets/constants/colors'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import type { INotification } from '../../../types/INotification'

const iconMapping = {
  success: 'check-circle',
  error: 'exclamation-circle',
  warning: 'exclamation-triangle',
  info: 'info-circle'
}

const colorMapping = {
  success: {
    dark: successDark,
    light: successLight
  },
  error: {
    dark: errorDark,
    light: errorLight
  },
  warning: {
    dark: warningDark,
    light: warningLight
  },
  info: {
    dark: infoDark,
    light: infoLight
  }
}

const Notification = ({ title, body, type }: INotification) => {
  const bgColor = {
    backgroundColor: colorMapping[type].light
  }

  return (
    <View style={styles.container} testID='notification'>
      <View style={[styles.centeredView, bgColor]}>
        <IconTitle
          iconPosition='start'
          text={title}
          icon={{ iconPack: 'FontAwesome', faIconName: iconMapping[type] }}
          color={colorMapping[type].dark}
        />
        <ScrollView alwaysBounceVertical={false} style={{ marginTop: 10 }}>
          <Text>{body}</Text>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  centeredView: {
    borderRadius: 6,
    maxHeight: '95%',
    width: '100%',
    padding: 20
  }
})

export default Notification
