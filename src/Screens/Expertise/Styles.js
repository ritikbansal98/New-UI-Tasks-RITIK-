import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.White
        // paddingHorizontal:16
    },
    container2: {
        paddingHorizontal: 16,
    },
    boxStyle: {
        marginTop: 28,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        alignItems: 'center',
        height: 65,
        paddingBottom: 12,
        borderBottomColor: colors.DARK_GREY,
        justifyContent: 'space-between'
    },

    imgStyle: {
        flexDirection: 'row',
        alignItems:'center'
    },

    imgEdtstyle: {
        height: 30,
        width: 30,
    },

    imgDelstyle: {
        height: 20,
        width: 20
    },
    txtStyle: {
        fontSize: 18,
        marginBottom: 6
    }
})