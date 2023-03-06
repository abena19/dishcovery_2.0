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
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
//later dummyData will be changed to a varable likeData dictionary or something
import { Ionicons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";
import commonStyles from "../assets/styles/CommonStyles.styles";
import { DishCard } from "../components";
import { db, auth } from '../constants/Firebase';
import { getDocs, collection, query, where } from 'firebase/firestore';

// TODO back button from recipe does not come back here because it is in a different stack navigator. need to fix
const countriesvisited = [...new Set(dummyData.likedRecipes.map(recipe => recipe.countryicon))];





const LikedScreen = ({ navigation }) => {


    const [userLikes, setUserLikes] = useState([]);

    const getLiked = async () => {
      const user = auth.currentUser.email;
      const q = query(collection(db, "users"), where("email", "==", user));
      const querySnapshot = await getDocs(q);
      let liked;
      querySnapshot.forEach((doc) => {
        liked = doc.data["likes"];
      })
      setUserLikes(liked);
    }
  
    return (
        <SafeAreaView style={commonStyles.whiteBackground}>
          <View style={commonStyles.outerView}>
            {/* <Text style={styles.subheading}>
              Countries Dishcovered:
            </Text> */}
            {/* countries dishcovered */}
            {/* <View style ={{flexDirection:'row', marginBottom:10 ,justifyContent:'center'}}>
            {countriesvisited.map(isocode => <CountryFlag isoCode={isocode} size={13} style={{margin:3,borderWidth:0.5,borderColor: "light-grey"}}/>)}
            </View> */}
            
            <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={dummyData.likedRecipes} 
              renderItem={({ item }) => {
                return (
                  // <TouchableHighlight onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}>
                  //   <View style={styles.container}>
                  //     <ImageBackground style={styles.photo} imageStyle={styles.imagephoto} resizeMode="cover" source={item.image} >
                  //       <View style={{flexDirection: 'row'}}>
                  //           <View
                  //             style={{
                  //               //position: 'absolute',
                  //               margin:7,
                  //               paddingHorizontal: SIZES.radiussmall,
                  //               paddingVertical: 5,
                  //               backgroundColor: "white",
                  //               borderRadius: SIZES.radius,
                  //               flexDirection:'row',
                  //               alignItems:'center',
                  //             }}>
                  //             <CountryFlag isoCode={item.countryicon} size={8} />
                  //             <Text style={{ color: COLORS.dishcoveryNearBlack, fontFamily:'Inter-SemiBold', fontSize:11 }}>  {item.country}</Text>
                  //           </View>

                  //         <View style = {{position:'absolute', right:0}}>
                  //             <View style = {styles.heartButton}><Ionicons name="heart" size={17} color= {COLORS.dishcoveryOrange} /></View>
                  //         </View>



                  //       </View>

                  //       <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center', marginTop:50, backgroundColor:"rgba(0, 0, 0, 0.5)", textAlign:'left', borderBottomRightRadius: SIZES.radius - 20,
                  //   borderBottomLeftRadius: SIZES.radius - 20}}>
                  //         <Text style={{        
                  //             fontSize: 11,
                  //             textTransform:'capitalise',
                  //             fontFamily: 'Inter-SemiBold',
                  //             textAlign: 'left',
                  //             color: COLORS.dishcoveryLightGrey,
                  //             // marginTop: 3,
                  //             marginHorizontal: 5,marginVertical:2}}>
                  //               {item.name}
                  //         </Text>
                  //         <View style={{ flexDirection:'row'}}>
                  //             <Ionicons name="cellular" size={10} color= {COLORS.dishcoveryOrange} />
                  //             <Text style={styles.category}> {item.difficulty} </Text>
                  //             <Ionicons name="time" size={10} color= {COLORS.dishcoveryOrange} />
                  //             <Text style={styles.category}> {item.duration} </Text>
                  //             {/* <Ionicons name="location" size={10} color= {COLORS.dishcoveryOrange} />
                  //             <Text style={styles.category}> {item.country}</Text> */}
                  //         </View>
                  //     </View>

                  //     </ImageBackground>

                      
                      
                      
                  //   </View>
                  // </TouchableHighlight>
                  <DishCard
                      containerStyle = {{
                          ...styles.container
                      }}
                      recipeItem={item}
                      onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}
                      likeCard={true}
                    />
                )
              }}

              keyExtractor={item => `${item.id}` } />
          <View style={{height:'11%'}}></View>
          </View>
        </SafeAreaView>
    )
}


export default LikedScreen

const SCREEN_WIDTH = 330
const recipeNumColums = 2
const RECIPE_ITEM_MARGIN = 0.8
const RECIPE_ITEM_HEIGHT = 170

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginLeft: 6,
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 3,
    // width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    // height: RECIPE_ITEM_HEIGHT,
    // borderColor: '#cccccc',
    // borderWidth: 0.5,
    // borderRadius: SIZES.padding,
    // backgroundColor: 'white',
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // shadowOpacity: 0.2,
    // shadowRadius: 10,
  },
  subheading:{
    textAlign:'center',
    marginBottom:10,
    color: COLORS.dishcoveryOrange,
    // color: 'white',
    fontFamily:'Inter-SemiBold',
    textTransform:'uppercase',
    fontSize:13
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    resizeMode:'cover'
  },
  imagephoto:{
    borderRadius: SIZES.padding - 10,
    // borderBottomLeftRadius: 0,
    // borderBottomRightRadius: 0
  },
  heartButton:{
    fles:1,
    borderRadius:99,
    height:30,
    width:30,
    margin:5,
    backgroundColor:'white',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  category: {
    fontSize: 11,
    // color:COLORS.dishcoveryNearBlack,
    // color: COLORS.dishcoveryLightGrey,
    color: 'white',
    marginBottom: 3
  }
})
