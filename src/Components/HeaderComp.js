import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import imgPath from '../constants/imgPath'
import { shadow } from '../../styles/colors'


const HeaderComp = ({
  goBack = () => { },
  text,
  text1,
  onPress=()=>{ },
  showBack = true,
  showNotify = true
}) => {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 32, 
      ...shadow,
      paddingHorizontal: 16
    }}>
      {showBack && (
        <TouchableOpacity onPress={goBack}>
          <Image style={{ height: 15, width: 15 }} source={imgPath.ic_Back} />
        </TouchableOpacity>)}
      <Text style={{ fontSize: 16, flex: 1, textAlign: 'center' }}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
      <Text style={{ fontSize: 14 }}>{text1}</Text>
      </TouchableOpacity>
      { showNotify &&
      <TouchableOpacity>
        <Image style={{ height: 20, width: 20 }} source={imgPath.ic_Notify}/>
      </TouchableOpacity>
    }
    </View>
  )
}

export default HeaderComp

