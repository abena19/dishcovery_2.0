import React from 'react';
import pumpkinsoup from '../../assets/images/scanpage/pumpkinsoup.jpg'
import {
    View,
    Text,
    TouchableOpacity,
    Image, 
    StyleSheet,
    SafeAreaView
} from 'react-native';
import { useFonts } from 'expo-font';


// import styles from '../../assets/styles/ScanFlow.style.js'
import commonStyles from '../../assets/styles/CommonStyles.styles';
  
const ScanIntroScreen = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
      });
    return (
        <SafeAreaView style={commonStyles.whiteBackground}>
          <View style={commonStyles.outerView}>
            <View style={styles.imageBox}>
                <Image source={pumpkinsoup} style = {styles.image}></Image>
            </View>
            <View style={styles.imageText}>
            <Text style={styles.TextStyle}>Place your item within the frame and click to scan.</Text>
            </View>
            
            <TouchableOpacity style={styles.buttonContainer} activeOpacity = { .5 } onPress={ () => navigation.navigate("Scan Screen")}>
            <Text style={styles.ButtonTextStyle}> Begin Scan </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    )
}

export default ScanIntroScreen


const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
      },
      imageBox:{
        flex: 8,
        //marginLeft:30,
        //marginRight:30,
        //marginTop:30,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        // borderWidth: 1,
        // borderColor: 'blue',        
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 15,
      },
      image:{
        flex: 1,
        width: '100%',
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        },
      imageText:{
        flex: 1,
        //marginLeft:30,
        //marginRight:30,
        marginBottom:30,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        padding:20,
        // borderWidth: 1,
        // borderColor: 'red',
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.2,
        shadowRadius: 15,
    },
      buttonContainer:{
        height:55,
        //marginLeft:30,
        //marginRight:30,
        marginBottom:140,
        padding:0,
        justifyContent:'center',
        backgroundColor:'#DD6135',
        borderRadius:20,
        flexDirection:'column'
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
      }
  });
