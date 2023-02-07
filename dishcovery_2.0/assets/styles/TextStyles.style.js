import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../../constants"

export default StyleSheet.create({
    subheading:{
        fontFamily: 'Inter-Medium',
        fontSize:20,
        color:COLORS.dishcoveryNearBlack
    },
    body:{
        fontFamily: 'Inter-Regular',
        fontSize:15,
        color:'black'
    },
    linkText:{
        fontFamily: 'Inter-Regular',
        fontSize:15,
        color: COLORS.dishcoveryOrange,
        textDecorationLine: 'underline'
    },
    dishcoveryHeaderTitle: {
        fontFamily: 'Inter-SemiBold',
        textTransform: 'uppercase',
        color: COLORS.dishcoveryOrange,
        fontSize:13,
        textAlign: 'center',
        // letterSpacing: 1,
        marginBottom:2,
    },
    pageHeaderTitle: {
        fontFamily: 'Inter-SemiBold',
        textTransform: 'uppercase',
        color: COLORS.dishcoveryOrange,
        textAlign: 'center',
        fontSize:17,
        marginBottom:6,
    }
});