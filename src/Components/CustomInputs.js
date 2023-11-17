import { View, Text, TouchableOpacity, StyleSheet, TextInput,Image } from "react-native";
import React from "react";
import colors from "../../styles/colors";
import imgPath from "../constants/imgPath";

  export default ({
    placeholder,
    value = '',
    onChangeText = () => {},
    keyboard,
    maxLength,
    showDropDwn = false
    
  }) => {
    return (
        <>
      <View style={[styles.container]}>
            <TextInput
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                keyboardType={keyboard}
                maxLength={maxLength}
                placeholderTextColor={ colors.Black }
                style={[styles.input, styles.lightLabel ]}
            />
            {showDropDwn &&
            <Image style={{height:20, width:20}} source={imgPath.ic_Dropdown}/>
          }
      </View>
      </>
    );
  };
  const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    
        alignItems: "center",
     
        borderBottomWidth:1,
        borderBottomColor:colors.DARK_GREY

    },
    input: {
        fontSize: 16,  
        flex:1 
    },
    

    lightLabel:{ 
        color:colors.Black
    },
    darkLabel:{ 
        color:colors.White
    }
  });