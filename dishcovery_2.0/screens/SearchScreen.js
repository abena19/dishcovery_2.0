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

    TouchableHighlight
} from "react-native"
import Dimensions from "react-native"
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
//later dummyData will be changed to a varable likeData dictionary or something
import { Ionicons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";
import commonStyles from "../assets/styles/CommonStyles.styles";
import textStyles from "../assets/styles/TextStyles.style";
import { DishCard } from "../components";
// This is same gallery as liked page. one should make these gallery things into a component



export default class App extends React.Component {
    useEffect() {
      this.props.navigation.setOptions({
          headerLeft: () => (
                  <TouchableOpacity style={commonStyles.backbuttoncircle} onPress={() => this.props.navigation.goBack()}>
                  <Image source={icons.back} style={commonStyles.backbuttonarrow}/>
                  </TouchableOpacity>
              ),
          headerTitle: 'Recipes: Bitter Melon',
          headerTitleStyle: textStyles.subheading,
          headerStyle: {
            shadowColor: 'transparent',
            elevation: 0,
          }
      })
    }
    render() {
      this.useEffect()
      return (
              <View style={commonStyles.outerViewSearch}>
                      {/* <Text style={{marginHorizontal: SIZES.padding, ...FONTS.h2}}>
                          Countries visited through recipes:
                      </Text> */}
                  <FlatList vertical showsVerticalScrollIndicator={false} numColumns={2} data={dummyData.bitterMelonRecipes} 
                  renderItem={({ item, index }) => {
                      return (
                  //         <TouchableHighlight onPress={() => this.props.navigation.navigate("Recipe Screen", { recipe: item})}>
      
                  //         <View style={[styles.container, {
                  //                   marginLeft: index == 0 || index == 2 ? 25 : 10
                  //               }]}>
                  //           <ImageBackground style={styles.photo} imageStyle={styles.imagephoto} resizeMode="cover" source={item.image} >
                  //           <View
                  //     style={{
                  //         position: 'absolute',
                  //         margin:7,
                  //         paddingHorizontal: SIZES.radiussmall,
                  //         paddingVertical: 5,
                  //         backgroundColor: "white",
                  //         borderRadius: SIZES.radius,
                  //         flexDirection:'row',
                  //         alignItems:'center'
                  //     }}>
                  //     <CountryFlag isoCode={item.countryicon} size={8} />
                  //     <Text style={{ color: COLORS.dishcoveryNearBlack, fontFamily:'Inter-SemiBold', fontSize:11 }}>  {item.country}</Text>
                  // </View>
      
                  //           <View style = {{flexDirection:'row-reverse'}}>
                  //           <View style = {styles.heartButton}><Ionicons name="heart" size={17} color= {COLORS.dishcoveryOrange} /></View>
                  //           </View>
                  //           </ImageBackground>
      
                  //             <View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  //             <Text style={{        
                  //                 fontSize: 11,
                  //                 textTransform:'uppercase',
                  //                 fontFamily: 'Inter-SemiBold',
                  //                 textAlign: 'center',
                  //                 color: '#444444',
                  //                 // marginTop: 3,
                  //                 marginHorizontal: 5,marginVertical:2}}>{item.name}</Text>
                  //                 <View style={{ flexDirection:'row'}}>
                  //                     <Ionicons name="cellular" size={10} color= {COLORS.dishcoveryOrange} />
                  //                     <Text style={styles.category}> {item.difficulty} </Text>
                  //                     <Ionicons name="time" size={10} color= {COLORS.dishcoveryOrange} />
                  //                     <Text style={styles.category}> {item.duration} </Text>
                  //                     {/* <Ionicons name="location" size={10} color= {COLORS.dishcoveryOrange} />
                  //                     <Text style={styles.category}> {item.country}</Text> */}
                  //                 </View>
                  //             </View>
                  //         </View>
                  //       </TouchableHighlight>
                  <DishCard
                      containerStyle = {{
                          ...styles.container
                      }}
                      recipeItem={item}
                      onPress={() => this.props.navigation.navigate("Recipe Screen", { recipe: item})}
                      likeCard={true}
                    />
                      )
                  }}
                  keyExtractor={item => `${item.id}` } />
              </View>
          )
        }
    }
    
    const SCREEN_WIDTH = 330
    const recipeNumColums = 2
    const RECIPE_ITEM_MARGIN = 0
    const RECIPE_ITEM_HEIGHT = 130
    
    const styles = StyleSheet.create({
        container: {
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center',
            // //margin: 6,
            // //marginRight: 12,
            // marginLeft: '6%',
            marginBottom: '5%',
            // width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
            // height: RECIPE_ITEM_HEIGHT + 55,
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
            flex: 1,
            alignItems: 'center',
            marginLeft: '5%',
          },
          buttonContainer:{
            flexDirection:'row-reverse',
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
          photo: {
            width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
            height: RECIPE_ITEM_HEIGHT,
            resizeMode:'cover'
          },
          imagephoto:{
            borderRadius: SIZES.padding,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0
          },
          title: {
            flex:1,
            fontSize: 11,
            textTransform:'uppercase',
            fontFamily: 'Inter-SemiBold',
            textAlign: 'center',
            color: COLORS.dishcoveryNearBlack,
            // marginTop: 3,
            marginHorizontal: 5,
          },
          category: {
            fontSize: 11,
            color:COLORS.dishcoveryNearBlack,
            marginBottom: 3
          }
      });
      
