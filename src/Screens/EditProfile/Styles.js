import { StyleSheet } from "react-native";
import colors from "../../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16

    },
    inptStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    labelStl: {
        marginTop: 40
    },
    btnStyle: {
        backgroundColor: colors.Black,
        height: 50,
        justifyContent: 'center',
        borderRadius: 4
    },
    txtStyle: {
        color: colors.White,
        alignSelf: 'center',
        fontSize: 16
    },
    ImgStyle: {
        height: 80,
        width: 80,
        borderRadius: 40
    }
})