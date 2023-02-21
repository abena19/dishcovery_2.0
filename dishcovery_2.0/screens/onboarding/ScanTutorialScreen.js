import React ,{useState, useEffect} from "react"
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




const ScanTutorialScreen = ({ navigation }) => {

    const [fontsLoaded] = useFonts({
        'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
    });


    const [text, setText] = useState("Click on “Begin Scan”");
    const [image, setImage] = useState(require('../../assets/images/onboardingimages/scantutorial1.png'));

    useEffect(() => {
    setTimeout(() => {
        setText("Use our AI recognition feature to identify your food ingredient!");
        setImage(require('../../assets/images/onboardingimages/scantutorial2.png'));
    }, 5000);
    }, []);

  return (
    <SafeAreaView style={commonStyles.whiteBackground}>
      <TouchableOpacity
              style={[CloseButton.closeButtonContainer, { marginTop: 20, marginLeft: 20 }]}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="ios-arrow-back" size={30} color="#DD6135" />
            </TouchableOpacity>
          <View style={commonStyles.outerView}>
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <Image source={image} style={styles.imageStyle}/>
              </View>
              <View  style={{ flex: 1,  marginLeft:50 }}>
                <Text style={{fontSize: 15,textAlign: 'center',fontFamily: 'Inter-Regular', color: "#DD6135",}}>{text}</Text>
              </View>  
            </View>

            <View style={{marginTop:20 }}>
                <Text style={styles.onboardingHeading}>Scan an ingredient</Text>
                <Text style={styles.TextStyle}>Use our AI recognition feature to identify your food ingredient!</Text>
            </View>

            <View style={{ alignSelf: "center", flexDirection: "row", marginTop:-50 }}>
                <Text style={{ fontSize: 100, color: "#DD6135" }}>.</Text>
                <Text style={{ fontSize: 100, color: "#D9D9D9" }}>..</Text>
            </View>

            <TouchableOpacity style={styles.buttonContainer} activeOpacity = { .5 } onPress={ () => navigation.navigate("Context Tutorial Screen")}>
                <Text style={styles.ButtonTextStyle}>  Next -&gt; </Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  );
};

export default ScanTutorialScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
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
        height:'90%',
        display:'inline',
        flexDirection: 'column',
        alignContent: 'center',
        // paddingBottom: 50,
      },
      imageStyle: {
        flex: 1,
        width: 190,
      },
      TextStyle: {
        fontSize: 15,
        textAlign: 'center',
        fontFamily: 'Inter-Regular',
        // color: "#DD6135",
      },
      onboardingHeading: {
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
