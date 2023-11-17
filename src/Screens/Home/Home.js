import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../styles/colors'
import HeaderComp from '../../Components/HeaderComp'

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.White }}>
      <HeaderComp text={'Home'}
        showNotify={false} showBack={false} />

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text>Home</Text>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})