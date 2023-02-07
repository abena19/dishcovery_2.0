import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';



export default StyleSheet.create({
    buttonContainer:{
        height:55,
        marginLeft:30,
        //marginRight:30,
        marginBottom:130,
        marginTop: 5,
        padding:0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#DD6135',
        borderRadius:20,
        flexDirection:'column',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    TextStyle: {
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Inter-Regular'
    },
    ButtonTextStyle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Inter-Regular',
    },
    filterGroupContainer:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        //marginLeft: 15,
        marginBottom: 15,
        marginTop: 10
    },
    filterContainer:{
        height:40,
        marginTop: 5,
        marginRight:10,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#DD6135',
        borderRadius:20,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0,
        shadowRadius: 5,
    },
    addMoreView: {
        alignItems: 'flex-end'
    },
    mainView: {
        flexDirection: 'column',
    }
});