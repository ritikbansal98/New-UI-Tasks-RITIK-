import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../styles/colors'

const Label = ({onPress, text, color, style, size}) => {
  return (
      <Text onPress={onPress} 
      style={[styles.label, style, color &&{color:color}, size &&{fontSize:size}]}>{text}</Text>
  )
}


const styles = StyleSheet.create({
    label:{
        fontSize:13,
        color: colors.DARK_GREY,
    },
    light:{
        color:colors.Black
    },
    dark:{
        color:colors.White
    }
})
export default Label