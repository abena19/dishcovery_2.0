import React ,{useState, useRef} from "react"
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    FlatList,
    StyleSheet
} from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { FONTS, COLORS, icons, images, SIZES, dummyData } from "../constants"
import DishCard from '../components/DishCard.js';
import { TrendingCard } from "../components"
import { styles } from "react-native-expandable-listview/src/styles";
import commonStyles from '../assets/styles/CommonStyles.styles';
import textStyles from '../assets/styles/TextStyles.style';
import {
    usePopup,
    TOAST_TYPE,
    TOAST_DURATION,
    POPUP_DIRECTION,
  } from 'react-native-popup-view'; 
  import filterStyles from '../assets/styles/ExploreFilter.style';


// console.log(dummyData.trendingRecipes)

const ExploreScreen = ({ navigation, route }) => {

    console.log(route);
    const [recipes, setRecipes] = useState([]);

    const {
        showToast,
        showActionSheet,
        showFloatingView,
        showModal,
        showTooltip,
        hidePopup,
      } = usePopup();
    const toolTipAnchor = useRef(null);

    const actionsheet = () => {
        showModal({
        //   actionOptions: [
        //     {
        //       title: 'option 1',
        //       subtitle: 'detail goes here',
        //       onPress: () => {
        //         hidePopup();
        //       },
        //     },
        //     {
        //       title: 'option 2',
        //       disabled: true,
        //       actionTitleStyle: {color: 'red'},
        //       onPress: () => {
        //         hidePopup();
        //       },
        //     },
        //   ],
            // actionViews: [
            //     <View><Text>hey</Text></View>,
            // ]
            customView: 
            <View style={[{backgroundColor: "white", marginHorizontal: '1%', height: 700, borderRadius: 20}]}>
            <View style={commonStyles.outerView}>
            <View style={filterStyles.mainView}>
                <Text style={[textStyles.subheading, {textAlign: 'center', marginBottom: '5%'}]}>Filters</Text>
                <Text style={textStyles.subheading}>Occasion</Text>
                <View style={{height:'3%'}}></View>
                <View style={filterStyles.filterGroupContainer}>
                    <TouchableOpacity style={filterStyles.filterContainer} activeOpacity={0.5}>
                        <Text style={filterStyles.ButtonTextStyle}>Breakfast ✓</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={filterStyles.filterContainer} activeOpacity={0.5}>
                        <Text style={filterStyles.ButtonTextStyle}>Lunch ✓</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={filterStyles.filterContainer} activeOpacity={0.5}>
                        <Text style={filterStyles.ButtonTextStyle}>Dinner ✓</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:'2%'}}></View>
                        <View style={styles.addMoreView}><Text style={[textStyles.linkText, {textAlign: 'right'}]}>View All ›</Text></View>
                <View style={{height:'7%'}}></View>
                <Text style={textStyles.subheading}>Difficulty</Text>
                <View style={{height:'3%'}}></View>
                <View style={filterStyles.filterGroupContainer}>
                    <TouchableOpacity style={filterStyles.filterContainer} activeOpacity={0.5}>
                        <Text style={filterStyles.ButtonTextStyle}>Easy ✓</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={filterStyles.filterContainer} activeOpacity={0.5}>
                        <Text style={filterStyles.ButtonTextStyle}>Medium ✓</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={filterStyles.filterContainer} activeOpacity={0.5}>
                        <Text style={filterStyles.ButtonTextStyle}>Hard ✓</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:'2%'}}></View>
                        <View style={styles.addMoreView}><Text style={[textStyles.linkText, {textAlign: 'right'}]}>View All ›</Text></View>
                <View style={{height:'7%'}}></View>
                <Text style={textStyles.subheading}>Dietary Preferences</Text>
                <View style={{height:'3%'}}></View>
                <View style={filterStyles.filterGroupContainer}>
                    <TouchableOpacity style={filterStyles.filterContainer} activeOpacity={0.5}>
                        <Text style={filterStyles.ButtonTextStyle}>Vegetarian ✓</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={filterStyles.filterContainer} activeOpacity={0.5}>
                        <Text style={filterStyles.ButtonTextStyle}>Vegan ✓</Text>
                    </TouchableOpacity>
                </View>
                <View style={{height:'2%'}}></View>
                        <View style={styles.addMoreView}><Text style={[textStyles.linkText, {textAlign: 'right'}]}>View All ›</Text></View>
                </View>

                <TouchableOpacity style={filterStyles.buttonContainer} activeOpacity = { .5 } onPress={ () => {hidePopup(); navigation.navigate("Search Results")}}>
                    <Text style={filterStyles.ButtonTextStyle}> Show 4 Results </Text>
                </TouchableOpacity>
            </View>
        </View>
        });
      };

    function renderSearchBar() {
        const [text, setText] = useState('');

        return (
            <SafeAreaView style={{
                flexDirection: 'row', height: 60,
                width: '100%'}}>

                <View style={{
                flexDirection: 'row',
                flex:1,
                height: 45,
                //width: 360,
                alignItems: 'center',
                marginTop:15,
                paddingLeft: SIZES.paddingsmall,
                borderRadius: 10,
                //justifyContent: 'space-between',
                backgroundColor: COLORS.lightGray,
                }}>
                    <Image
                        style={{
                            width: 15,
                            height: 15,
                            tintColor: COLORS.gray,
                            marginRight:15
                        }}
                        source={icons.search}
                    />
                    <TextInput
                        style={{
                            flex:1,
                            fontFamily:'Inter-Regular',
                            fontSize:14,paddingVertical:10
                        }}
                        placeholderTextColor={COLORS.gray}
                        placeholder="Search for an ingredient, dish or cuisine"
                        clearButtonMode='while-editing'
                        onChangeText={newText => setText(newText)}
                        defaultValue={text}
                        onSubmitEditing= {() => {setText('') ; navigation.navigate("Search Results")}}
                    />
                </View>

                <TouchableOpacity style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingLeft: 10,
                paddingTop: 10,
                }}
                activeOpacity={0.5}
                onPress={actionsheet}>
                    <Ionicons name="options" size={30} color= {COLORS.dishcoveryOrange} justifyContent={'center'} alignItems={'center'} marginLeft= {30}/>
                </TouchableOpacity>
                    {/* <TouchableOpacity style = {styles.filterButton}><Ionicons name="options" size={25} color= {COLORS.black} /></TouchableOpacity> */}

            </SafeAreaView>
        )
    }

    function renderCardSection() {
                return (
                    <View
                    style={{
                        marginTop : SIZES.paddingsmall
                    }}
                    >
                    <Text style={[styles2.subheading, {marginLeft: '5%', paddingLeft: '1%'}]}>
                            Based On Your Scans
                        </Text>
                        <FlatList 
                        data={dummyData.scannedIngredientRecipes}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item, index}) => {
                            return (
                                <DishCard
                                containerStyle = {{
                                    //marginLeft: 6 // line dif than code, 54:20 
                                    marginLeft: index == 0 ? 30 : 6
                                }}
                                recipeItem={item}
                                onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}
                                />
                            )
                        }}
                        />
                    </View>
                )
            }

   function renderTrendingSection() {
        return (
            <View style={{marginTop : 0}}>
                <Text style={[styles2.subheading, {marginLeft: '5%', paddingLeft: '1%'}]}>
                    Traditional Christmas food from around the world
                </Text>
                <FlatList 
                data={dummyData.christmasRecipes}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => `${item.id}`}
                renderItem={({item, index}) => {
                    return (
                        <DishCard
                        containerStyle = {{
                            // activeOpacity: 0.2,
                            marginLeft: index == 0 ? 30 : 6
                        }}
                        recipeItem={item}
                        onPress={() => navigation.navigate("Recipe Screen", { recipe: item})}
                        likeCard={false}
                        />
                    )
                }}
                />
            </View>
        )
    }
    return (
        <SafeAreaView
            style={commonStyles.whiteBackground}
        >
            <View>
                <FlatList
                    data={dummyData.categories}
                    keyExtractor={item => `${item.id}`}
                    keyboardDismissMode="on-drag"
                    showsVerticalScrollIndicator={false}
                    ListHeaderComponent={
                        <View>
                            <View style={[commonStyles.outerView, {marginTop: 0}]}>
                            {renderSearchBar()}
                            </View>
                            {renderCardSection()}
                            {renderTrendingSection()}
                        </View>
                    }
                    ListFooterComponent={
                        <View style={{ marginBottom: 100 }}></View>
                    }
                />
            </View>
        </SafeAreaView>
    )
}

export default ExploreScreen;

const styles2 = StyleSheet.create({
    searchbar:{
        flexDirection: 'row',
        height: 45,
        alignItems: 'center',
        marginTop:15,
        //marginHorizontal: SIZES.paddingsmall,
        //paddingHorizontal: SIZES.paddingsmall,
        borderRadius: 10,
        backgroundColor: "white",
        borderColor: COLORS.dishcoveryMedGrey,
        borderWidth:1,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 0,
        },
        shadowOpacity: 0.1,
        shadowRadius: 5},
    subheading:{
        fontFamily: 'Inter-Medium',
        //marginHorizontal: SIZES.paddingsmall,
        fontSize:20,
        color:COLORS.dishcoveryNearBlack
}, filterButton:{
    flex:1,
    borderRadius:99,
    height:50,
    width:50,
    // margin:10,
    // alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 40,
    backgroundColor: COLORS.dishcoveryOrange,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.dishcoveryOrange,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
}
})