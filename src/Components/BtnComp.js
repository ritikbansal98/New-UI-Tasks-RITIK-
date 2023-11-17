import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../../styles/colors'


const BtnComp = ({
    onPress,
    text
}) => {
    return (
        <TouchableOpacity
            style={{
                height: 24, width: 80,
                backgroundColor: colors.DARK_GREY,
                justifyContent: "center",
                alignItems: 'center'
            }}
            onPress={onPress}>
            <Text style={{ fontSize: 12 }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default BtnComp;


export const SaveBtn = ({ onPress = () => {

} }) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                height: 42,
                width: 150,
                backgroundColor: colors.White,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius:2,
            }} >
            <Text>SAVE</Text>
        </TouchableOpacity>
    )
}


export const CancelBtn = ({
    onPress = () => { }
}) => {
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                height: 42,
                width: 150,
                backgroundColor: colors.Black,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius:2,
                borderColor:colors.White,
                borderWidth:2
            }}>
            <Text style={{color:colors.White}}>CANCEL</Text>
        </TouchableOpacity>
    )
}
