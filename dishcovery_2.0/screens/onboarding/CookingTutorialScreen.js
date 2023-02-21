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




const CookingTutorialScreen = ({ navigation }) => {

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
          <View style={commonStyles.outerView}>
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/images/onboardingimages/cookingtutorial.png')} style={styles.imageStyle}/>
            </View>

            <View style={{marginTop:20 }}>
                <Text style={styles.onboardingHeading}>Have fun dishcovering!</Text>
                <Text style={styles.TextStyle}>Follow our authentic recipes to your dream dish. Yum!</Text>
            </View>

            <View style={{ alignSelf: "center", flexDirection: "row", marginTop:-50 }}>
                <Text style={{ fontSize: 100, color: "#D9D9D9" }}>..</Text>
                <Text style={{ fontSize: 100, color: "#DD6135" }}>.</Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer} activeOpacity = { .5 } onPress={ () => navigation.navigate("Login or Sign Up")}>
              <Text style={styles.ButtonTextStyle}> Let's go! -&gt; </Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};

export default CookingTutorialScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
      },
      buttonContainer:{
        height:55,
        // marginBottom:0,
        marginBottom:60,
        padding:0,
        justifyContent:'center',
        backgroundColor:'#DD6135',
        borderRadius:20,
        flexDirection:'column'
      },
      imageContainer: {
        flex:1,
        height: 300,
        // width: 300,
        alignItems: 'center',
        // display:'inline',
        flexDirection: 'column',
      },
      imageStyle: {
        flex: 1,
        width: 300,
        // height: 100,
        resizeMode:'contain',
        // borderTopRightRadius:20,
        // borderTopLeftRadius:20,
      },
      onboardingHeading: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
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
