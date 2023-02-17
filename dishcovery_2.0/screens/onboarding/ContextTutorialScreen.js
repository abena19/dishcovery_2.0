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




const ContextTutorialScreen = ({ navigation }) => {

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
                <Image source={require('../../assets/images/onboardingimages/contexttutorial.png')} style={styles.imageStyle} />
            </View>

            <View style={{marginTop:20 }}>
                <Text style={styles.onboardingHeading}>Learn about ingredient</Text>
                <Text style={styles.TextStyle}>Explore the various contexts within which the dish is used!</Text>
            </View>

            <View style={{alignSelf: "center", flexDirection: "row", marginTop:-50}}>
                <Text style={{ fontSize: 100, color: "#D9D9D9" }}>.</Text>
                <Text style={{ fontSize: 100, color: "#DD6135" }}>.</Text>
                <Text style={{ fontSize: 100, color: "#D9D9D9" }}>.</Text>
            </View>


            <TouchableOpacity style={styles.buttonContainer} activeOpacity = { .5 } onPress={ () => navigation.navigate("Cooking Tutorial Screen")}>
            <Text style={styles.ButtonTextStyle}>  Next -&gt; </Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};

export default ContextTutorialScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
      },
      buttonContainer:{
        height:55,
        marginBottom:100,
        padding:0,
        justifyContent:'center',
        backgroundColor:'#DD6135',
        borderRadius:20,
        flexDirection:'column'
      },
      imageContainer: {
        flex:1,
        height: 300,
              alignItems: 'center',
        flexDirection: 'column',
      },
      imageStyle: {
        flex: 1,
        width: 300,
        resizeMode:'contain',
      },
      onboardingHeading: {
        fontSize: 28,
        textAlign: 'center',
        fontFamily: 'Inter-Bold',
      },
      TextStyle: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
      },
      ButtonTextStyle: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Inter-Regular',
      }
  });
