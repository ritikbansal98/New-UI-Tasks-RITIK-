import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../styles/colors'
import HeaderComp from '../../Components/HeaderComp'
import navigationStrings from '../../constants/navigationStrings'

const Chats = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.White }}>
      <HeaderComp text={navigationStrings.CHATS}
        showNotify={false} showBack={false} />

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Chats</Text>
      </View>

    </View>
  )
}

export default Chats

const styles = StyleSheet.create({})