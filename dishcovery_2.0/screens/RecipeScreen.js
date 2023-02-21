import React ,{useState} from "react"
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    ImageBackground,
    Button,
    ScrollView,
    Text,
    SafeAreaView,
    Pressable,
} from "react-native"

import {icons, COLORS, SIZES } from "../constants"
import { Ionicons } from '@expo/vector-icons';
import commonStyles from "../assets/styles/CommonStyles.styles";
import CountryFlag from "react-native-country-flag";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const marginInfoBox = 200
const gallerywidth = 280
const infoboxheight = 85



const RecipeScreen = ({ navigation, route }) => {

    const [selectedRecipe, setSelectedRecipe] = React.useState(null)
    const [showContext, setShowContext] = useState(true);
    const [showRecipe, setShowRecipe] = useState(false);
    const [showIngredients, setShowIngredients] = useState(false);

    console.log(selectedRecipe?.country)
    React.useEffect(() => {
        let { recipe } = route.params
        setSelectedRecipe(recipe)
    }, [])

    const [ isLiked, setIsLiked ] = useState(true);

    return (
    <SafeAreaView style={commonStyles.whiteBackground}>
        <ImageBackground style={styles.recipeImage} resizeMode={'cover'} source={selectedRecipe?.image}>
            {/* Back button TODO - doesn't go to right page if from Liked or Scan screen*/}
            <TouchableOpacity style={styles.backbuttoncircle} onPress={() => navigation.goBack()}>
            <Image source={icons.back} style={styles.backbuttonarrow}/>
            </TouchableOpacity>

            {/* INGREDIENT BUTTON */}
                <Pressable style = {styles.heartButton} onPress={() => setIsLiked(!isLiked)} >
                    <Ionicons name ={isLiked ? 'heart' : 'heart-outline'} size={25} color= {COLORS.dishcoveryOrange}/>
                </Pressable>
        </ImageBackground>
        <View style={commonStyles.outerView}>
            <ScrollView style={styles.container}>
                {/* Recipe Image Background */}
                {/* Toggle Recipe Info - 3 buttons :-) */}
                <View style={styles.buttonContainer}>
                    {/* CONTEXT BUTTON */}
                    <TouchableOpacity style={showContext? styles.recipeInfoButtonOn : styles.recipeInfoButtonOff} onPress={() => {setShowIngredients(false) & setShowRecipe(false) & setShowContext(true)}} >
                    <Text style={styles.recipeInfoButtonText}>Context</Text>
                    </TouchableOpacity>
                    
                    {/* INGREDIENT BUTTON */}
                    <TouchableOpacity style={showIngredients? styles.recipeInfoButtonOn : styles.recipeInfoButtonOff} onPress={() => {setShowIngredients(true) & setShowRecipe(false) & setShowContext(false)}} >
                    <Text style={styles.recipeInfoButtonText}>Ingredients</Text>
                    </TouchableOpacity>

                    {/* RECIPE BUTTON */}
                    <TouchableOpacity style={showRecipe? styles.recipeInfoButtonOn : styles.recipeInfoButtonOff} onPress={() => {setShowIngredients(false) & setShowRecipe(true) & setShowContext(false)}} >
                    <Text style={styles.recipeInfoButtonText}>Recipe</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginVertical:5}}>
                    <Text style={styles.title}> {selectedRecipe?.name} </Text>
                </View>

                    <View style={{ flex:1, flexDirection:'row',justifyContent:'center'}}>
                        <Ionicons name="cellular" size={15} color= {COLORS.dishcoveryOrange} />
                        <Text style={styles.info}> {selectedRecipe?.difficulty}   </Text>
                        <Ionicons name="time" size={15} color= {COLORS.dishcoveryOrange} />
                        <Text style={styles.info}> {selectedRecipe?.duration}   </Text>
                        {/* <Ionicons name="location" size={13} color= {COLORS.dishcoveryOrange} /> */}
                        <CountryFlag isoCode={`${selectedRecipe?.countryicon}`} size={12} style = {{marginTop:2.2, borderWidth:0.5,borderColor: "light-grey"}}/>
                        <Text style={styles.info}> {selectedRecipe?.country}</Text>
                    </View>

                {showIngredients ? (
                <Text style={{marginTop: SIZES.padding}}>  
                    <Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 cup vegetable oil
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 medium cucumber, grated and drained
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 2-3 garlic cloves, minced
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 2 tbsp extra virgin olive oil
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 tbsp chopped fresh dill
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> Salt and pepper to taste
                   
                    
                    {/* {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 cup sugar
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 cup orange juice
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 cup honey
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 tablespoon baking powder
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 teaspoon baking soda
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 teaspoon ground cinnamon
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 teaspoon ground cloves
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 teaspoon ground nutmeg
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 teaspoon vanilla extract
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 5 cups all-purpose flour
                    {"\n"}
                    {"\n"}For the syrup:
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 cup sugar
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 cup honey
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 cup water
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 cinnamon stick
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1 lemon, zested
                    {"\n"}
                    {"\n"}For the topping:
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 2 cups walnuts, finely chopped
                    {"\n"}<Ionicons name="ellipse" size={8} style={{height:10}} color= {COLORS.dishcoveryOrange} /> 1/2 cup confectioners' sugar
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"} */}
                </Text>): null}
                {showRecipe ? (
                <Text style={{marginTop: SIZES.padding}}>
                    <Icon name="numeric-1-circle" color={COLORS.dishcoveryOrange} size={17}/> In a large mixing bowl, combine the oil, sugar, orange juice, honey, baking powder, baking soda, cinnamon, cloves, nutmeg, and vanilla extract. Mix well.
                    {"\n"}
                    {"\n"}<Icon name="numeric-2-circle" color={COLORS.dishcoveryOrange} size={17} /> Mix the ingredients until they are fully combined and the texture is smooth.
                    {"\n"}
                    {"\n"}<Icon name="numeric-3-circle" color={COLORS.dishcoveryOrange} size={17} /> Adjust the seasoning to taste, if needed.
                    {"\n"}
                    {"\n"}<Icon name="numeric-4-circle" color={COLORS.dishcoveryOrange} size={17} /> Cover the tzatziki and refrigerate it for at least an hour to let the flavors meld.
                    {"\n"}
                    {"\n"}<Icon name="numeric-5-circle" color={COLORS.dishcoveryOrange} size={17} /> Serve the tzatziki cold as a dip or condiment.
                    {"\n"}
                   
                    {/* {"\n"}
                    {"\n"}<Icon name="numeric-2-circle" color={COLORS.dishcoveryOrange} size={17} /> Gradually add the flour to the wet ingredients, mixing well until the dough comes together.
                    {"\n"}
                    {"\n"}<Icon name="numeric-3-circle" color={COLORS.dishcoveryOrange} size={17} /> Preheat your oven to 350°F (180°C).
                    {"\n"}
                    {"\n"}<Icon name="numeric-4-circle" color={COLORS.dishcoveryOrange} size={17} /> Roll the dough into small balls and place them on a baking sheet lined with parchment paper.
                    {"\n"}
                    {"\n"}<Icon name="numeric-5-circle" color={COLORS.dishcoveryOrange} size={17} /> Bake the cookies for 15-20 minutes, or until they are lightly golden.
                    {"\n"}
                    {"\n"}<Icon name="numeric-6-circle" color={COLORS.dishcoveryOrange} size={17} /> Meanwhile, make the syrup by combining the sugar, honey, water, cinnamon stick, and lemon zest in a saucepan over medium heat. Bring to a boil, stirring constantly, and then reduce the heat to low and simmer for 10 minutes.
                    {"\n"}
                    {"\n"}<Icon name="numeric-7-circle" color={COLORS.dishcoveryOrange} size={17} /> Remove the cookies from the oven and let them cool slightly.
                    {"\n"}
                    {"\n"}<Icon name="numeric-8-circle" color={COLORS.dishcoveryOrange} size={17} /> Dip the cookies in the syrup and then transfer them to a plate.
                    {"\n"}
                    {"\n"}<Icon name="numeric-9-circle" color={COLORS.dishcoveryOrange} size={17} /> Sprinkle the chopped walnuts and confectioners' sugar over the top of the cookies.
                    {"\n"}
                    {"\n"}<Icon name="numeric-10-circle" color={COLORS.dishcoveryOrange} size={17} /> Serve the melomakarona warm or at room temperature. Enjoy!
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"}
                    {"\n"} */}
                    </Text>): null}
                {showContext ? (<Text style={{marginTop: SIZES.padding}}>{selectedRecipe?.culturalContext}</Text>) : null}

            </ScrollView>
        </View>
    </SafeAreaView>
    )
}
export default RecipeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection:'column'
    },
    title: {
        fontSize: 15,
        letterSpacing: 1,
        textTransform:'uppercase',
        fontFamily: 'Inter-Bold',
        textAlign: 'center',
        color:COLORS.dishcoveryNearBlack,
        marginRight: 5,
        marginLeft: 5,
        marginVertical:13,
      },
    heartButton:{
        alignSelf:'flex-end',
        //position: 'absolute', 
        bottom:0,
        borderRadius:99,
        height:50,
        width:50,
        marginRight:7,
        marginTop:'48%', 
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
    backbuttoncircle :{
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 35,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        backgroundColor: "white",
        color:"black",
        margin: 20
    },
    backbuttonarrow: {
        position: 'absolute',
        width: 15,
        height: 15,
        tintColor: "black",
        color:"black"
        },
    recipeImage:{
        width: "100%", 
        height: 250
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: COLORS.dishcoveryLightGrey,
        borderRadius:30,
        height:45,
        //width:200,
        marginHorizontal: '6%',
    },
    recipeInfoButtonOn:{
        width:95,
        height:45,
        backgroundColor:  "white",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:30,
        height:40
    },
    recipeInfoButtonOff:{
        width:95,
        height:45,
        backgroundColor:  COLORS.dishcoveryLightGrey,
        borderRadius:30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    recipeInfoButtonText:{
        textTransform:'uppercase',
        fontSize:10,
        fontFamily:'Inter-SemiBold',
        letterSpacing: 1
    }
})
    

