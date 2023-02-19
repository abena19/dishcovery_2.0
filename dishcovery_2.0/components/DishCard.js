import React from "react";
import {
    View, 
    TouchableOpacity, 
    Image,
    Text, 
    ImageBackground,
    Platform, 
    StyleSheet
} from 'react-native';
// import { BlurView } from "@react-native-community/blur";
import { SIZES, COLORS, FONTS, icons } from "../constants";
import { Ionicons } from '@expo/vector-icons';
import CountryFlag from "react-native-country-flag";

const gallerywidth = 240
const containerheight = 280
const galleryheight = 240
const infoboxheight = galleryheight/ 2.52
const marginInfoBox = galleryheight / 1.66


const DishCard = ({containerStyle, recipeItem, onPress}) => {
    return (
        <TouchableOpacity
        style={{
            height: containerheight,
            width: gallerywidth,
            marginTop: SIZES.paddingsmall,
            marginRight: gallerywidth / 20,
            marginLeft: gallerywidth / 20,
            borderRadius: SIZES.radius,
            ...containerStyle,
            activeOpacity: 0.9
        }}
        onPress={onPress}
        >

        <View 
            style={{flexDirection:'column',        
                justifyContent: 'center',
                alignItems: 'center',
                marginHorizontal:30,
                position:'relative',
                }}>
             {/* Background Image   */}
            <ImageBackground source={recipeItem.image} resizeMode="cover" style={{flex:1,width: gallerywidth, height: galleryheight}}
                imageStyle={{ borderRadius: SIZES.radius - 10}}>
                {/* Like icon */}
                {/* <View style={{ osition: "absolute", top: 0, left: 0, bottom: 0, right: 0, backgroundColor: "rgba(0, 0, 0, 0.5)" }} /> */}
                <View style = {{flex:1,flexDirection: 'row-reverse',justifyContent: 'space-between'}}>
                    {/* <Image source={recipeItem.isBookmarked ? icons.bookmarkFilled : icons.bookmark}
                    style={{width: 20,height: 20,marginRight: SIZES.base,tintColor: COLORS.darkGreen}}/> */}
                    <View style = {styles.heartButton}><Ionicons name="heart" size={25} color= {COLORS.dishcoveryOrange} /></View>
                </View>
                
                <View
                style={{
                    marginTop:marginInfoBox,
                    flexDirection:'center',        
                    justifyContent: 'center',
                    paddingHorizontal:marginInfoBox / 10,
                    paddingVertical: infoboxheight / 12,
                    height:infoboxheight,
                    width:gallerywidth,
                    backgroundColor:"rgba(0, 0, 0, 0.5)",
                    borderBottomRightRadius: SIZES.radius - 10,
                    borderBottomLeftRadius: SIZES.radius - 10,
                    shadowColor: "#000",
                    textAlign: 'left',
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 0.05,
                    shadowRadius: 15,
                }}>
                    <Text style={styles.title}>{recipeItem.name}</Text>
                    <View style={{ flex:1, flexDirection:'row', paddingHorizontal:marginInfoBox / 50}}>
                        {/* <Ionicons name="cellular" size={14} color= {COLORS.dishcoveryOrange} /> */}
                        <Text style={styles.info}> {recipeItem.duration}   </Text>
                        <Text style={styles.info}> {recipeItem.difficulty}   </Text>
                        {/* <Ionicons name="time" size={14} color= {COLORS.dishcoveryOrange} /> */}
                        
                        {/* <Ionicons name="location" size={13} color= {COLORS.dishcoveryOrange} /> */}
                        {/* <CountryFlag isoCode={recipeItem.countryicon} size={10} style = {{marginTop:3, borderWidth:0.5,borderColor: "light-grey"}}/>
                        <Text style={styles.info}> {recipeItem.country}</Text> */}
                    </View>
            </View>

            </ImageBackground>
            
            
        </View>
        </TouchableOpacity>
    )
}

const styles= StyleSheet.create({
    recipeCardContainer:{
        position: 'absolute',
        bottom: 10,
        left: 10, 
        right: 10,
        height: 100,
        paddingVertical: SIZES.radius,
        // paddingHorizontal: SIZES.base,
        borderRadius: SIZES.radius
    },
    heartButton:{
        fles:1,
        borderRadius:99,
        height:50,
        width:50,
        margin:10,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    title: {
        fontSize: 15,
        letterSpacing: 1,
        textTransform:'capitalise',
        fontFamily: 'Inter-Bold',
        textAlign: 'left',
        // color:COLORS.dishcoveryNearBlack,
        color: 'white',
        marginRight: 5,
        // marginLeft: 5,
        marginVertical:8,
    },
    info: {
        fontSize: 13,
        fontWeight:"bold",
        // color:COLORS.dishcoveryNearBlack,
        color: 'white',
        // marginBottom: 5
    }})

export default DishCard;