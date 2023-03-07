import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../../constants"

export default StyleSheet.create({
    headerView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    outerView: {
        flex: 1,
        //backgroundColor: 'blue',
        marginTop: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        paddingLeft: '1%',
        paddingRight: '1%',
        paddingTop: '1%',
    },
    imageView: {
        flex: 1,
        //backgroundColor: 'blue',
        marginTop: '0%',
        marginLeft: '0%',
        marginRight: '0%',
        paddingLeft: '0%',
        paddingRight: '0%',
        paddingTop: '0%',
    },
    outerViewSearch: {
        flex: 1,
        //backgroundColor: 'blue',
        //marginTop: '5%',
        //marginLeft: '2%',
        //marginRight: '2%',
        //paddingLeft: '1%',
        //paddingRight: '1%',
        //paddingTop: '1%',
    },
    outerViewScroll: {
        flex: 1,
        //backgroundColor: 'blue',
        marginTop: '5%',
        //paddingLeft: '1%',
        //paddingRight: '1%',
        paddingTop: '1%',
    },
    whiteBackground: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    backbuttoncircle :{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 35,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        backgroundColor: "white",
        color:"black",
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    backbuttonarrow: {
        position: 'absolute',
        width: 15,
        height: 15,
        tintColor: "black",
        color:"black"
        },
});