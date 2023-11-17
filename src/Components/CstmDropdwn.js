import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CancelBtn, SaveBtn } from './BtnComp'

const CstmDropdwn = () => {
  return (
    <View style={{
        height: 160,
        paddingBottom: 4,
        backgroundColor:'black',
       }}>
        <View style={{
          paddingHorizontal:16, 
          flex:1, 
          justifyContent:'space-evenly'}}>
             <Text style={{color:'white'}}>PRICE</Text>
             <Text style={{fontWeight:'bold', color:'white', fontSize:24,}}>$50.00</Text>
             <View style={{flexDirection:'row', justifyContent:'space-between',}}> 
               <CancelBtn/>
              <SaveBtn/>
            </View>
        </View>
    </View>
  )
}

export default CstmDropdwn

    
  
