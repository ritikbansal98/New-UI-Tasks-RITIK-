import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";
import { shadow } from "../../../styles/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:16,
        backgroundColor:colors.White,
        ...shadow
    },
    topheader:{
        marginTop:20,
        borderRadius: 4,
        backgroundColor: colors.White,
        // paddingHorizontal: 15,
        paddingVertical: 20,
        height:180,
        paddingTop:5,
        paddingBottom:25,
        ...shadow
    },
    header:{
        flexDirection: "row",
        // flex:1,
        justifyContent:'space-between',
        paddingHorizontal: 15,
        marginTop:25,
        marginBottom: 15,
    },
    ImgStyle:{
        height:70, 
        width:70,
         borderRadius:10
    },
    ImgStyle2:{
        height:35, 
        width:35, 
        borderRadius:18
    },
    txtStyle:{
        marginLeft:16,
    },
    bottomheardr:{
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 12,
        justifyContent: 'space-between',
        borderTopWidth:0.02,
        borderTopColor:colors.DARK_GREY,
        paddingTop:6,
        paddingHorizontal: 15,

      }
})
