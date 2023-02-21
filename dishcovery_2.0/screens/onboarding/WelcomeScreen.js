import React ,{useState} from "react"
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Button,
    Text,
    FlatList,
    SafeAreaView,
    TouchableHighlight
} from "react-native"
import Dimensions from "react-native"
// import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
//later dummyData will be changed to a varable likeData dictionary or something
import { Ionicons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";
import commonStyles from "../../assets/styles/CommonStyles.styles";
import CloseButton from '../../assets/styles/CloseButton.style';
import { useFonts } from 'expo-font';




const WelcomeScreen = ({ navigation }) => {

const [fontsLoaded] = useFonts({
    'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
});

  return (
    <SafeAreaView style={commonStyles.whiteBackground}>
        <TouchableOpacity
              style={CloseButton.closeButtonContainer}
              onPress={() => navigation.goBack()}
            >
            <Ionicons name="ios-arrow-back" size={30} color="#DD6135" />
        </TouchableOpacity>

        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.onboardingHeader}>Welcome</Text>
            <Text style={styles.TextStyle}>Let's start Dishcovering new food!</Text>
          </View>
            
          
        
        {/* <View style={styles.buttonContainer}> */}
          <TouchableOpacity style={styles.button} activeOpacity = { .5 } onPress={ () => navigation.navigate("Scan Tutorial Screen")}>           
            <Text style={styles.ButtonTextStyle}> Next -&gt; </Text>
          </TouchableOpacity>
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        // padding:50,
      },
      textContainer: {
        flex:1,
        flexDirection:'column',
        // justifyContent:'center',
        // padding:50,
        marginTop:300,
      },
    //   buttonContainer: {
    //     flex: 0.6,
    //     width: '90%',
    //     justifyContent: 'center',
    //     flexDirection: 'column',
    //     // alignItems: 'center',
    //     marginBottom:0,
    // },
    button: {
      height:55,
      borderRadius:20,
      flexDirection:'column',
      backgroundColor: '#DD6135', 
      width: '90%', 
      justifyContent:'center',
      alignSelf: 'center',
      marginBottom: 60,
  },
      TextStyle: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Inter-Regular'
      },
      onboardingHeader: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
      },
      ButtonTextStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Inter-Regular',
      }
  });
