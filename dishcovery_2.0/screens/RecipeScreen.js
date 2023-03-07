RecipeScreen;
import React, { useState, useRef } from "react";
import IngredientCard from ".././components/IngredientCard";
//import AboutScreen from "./AboutScreen";
import RecipeCard from ".././components/RecipeCard";
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
  Animated,
  Pressable,
} from "react-native";

import { icons, COLORS, SIZES } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import commonStyles from "../assets/styles/CommonStyles.styles";
import CountryFlag from "react-native-country-flag";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { db, auth } from "../constants/Firebase";
import {
  updateDoc,
  where,
  query,
  collection,
  getDocs,
  arrayUnion,
} from "firebase/firestore";

const marginInfoBox = 200;
const gallerywidth = 280;
const infoboxheight = 85;

// Dummy recipe data
const instructions = [
  'Preheat oven to 350°F (180°C).',
  'In a large bowl, whisk together flour, baking powder, and salt.',
  'In a separate bowl, cream together butter and sugar until light and fluffy.',
  'Add eggs one at a time, beating well after each addition.',
  'Gradually mix in dry ingredients, alternating with milk and vanilla.',
  'Pour batter into greased and floured baking pan.',
  'Bake for 35-40 minutes or until a toothpick inserted in the center comes out clean.',
  'Let cool before serving.',
];


const RecipeScreen = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);
  const [showContext, setShowContext] = useState(true);
  const [showRecipe, setShowRecipe] = useState(false);
  const [showIngredients, setShowIngredients] = useState(true);

  console.log(selectedRecipe?.country);
  React.useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);
  // Toggle animation
  const toggleAnimation = useRef(new Animated.Value(0)).current;
  <TouchableOpacity
    style={styles.toggleButton}
    onPress={() => {
      if (showContext) {
        setShowContext(false);
        Animated.timing(toggleAnimation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }).start();
      } else {
        setShowContext(true);
        Animated.timing(toggleAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }).start();
      }
    }}
  >
    <Animated.View
      style={[
        styles.toggleIndicator,
        {
          left: toggleAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ["2%", "50%"],
          }),
        },
      ]}
    ></Animated.View>
    <Text style={styles.toggleText}>
      {showContext ? "Context" : "Ingredients"}
    </Text>
  </TouchableOpacity>;

  const [isLiked, setIsLiked] = useState(false);

  const addLike = async (recipe) => {
    setIsLiked(!isLiked);
    let curUser = auth.currentUser.email;
    let q = query(collection(db, "users"), where("email", "==", curUser));
    const querySnapshot = await getDocs(q);
    let doc = querySnapshot.docs[0].ref;
    await updateDoc(doc, {
      likes: arrayUnion(recipe),
    });
  };

  return (
    <SafeAreaView style={commonStyles.whiteBackground}>
      <View style={commonStyles.imageView}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={{ paddingBottom: "10%" }}
        >
          <ImageBackground
            style={styles.recipeImage}
            resizeMode={"cover"}
            source={selectedRecipe?.image}
          >
            {/* Back button TODO - doesn't go to right page if from Liked or Scan screen */}
            <TouchableOpacity
              style={styles.backbuttoncircle}
              onPress={() => navigation.goBack()}
            >
              <Image source={icons.back} style={styles.backbuttonarrow} />
            </TouchableOpacity>

            {/* INGREDIENT BUTTON */}
            <Pressable
              style={styles.heartButton}
              onPress={() => {
                addLike(selectedRecipe);
              }}
            >
              <Ionicons
                name={isLiked ? "heart" : "heart-outline"}
                size={25}
                color={COLORS.dishcoveryOrange}
              />
            </Pressable>
          </ImageBackground>
          <View style={{ marginBottom: "2%", marginTop: "2%" }}>
            <Text style={styles.title}> {selectedRecipe?.name} </Text>
            <Text style={styles.subtitle}>
              {" "}
              {selectedRecipe?.duration} {selectedRecipe?.country}{" "}
            </Text>
          </View>
          {/* Recipe Image Background */}
          {/* Toggle Recipe Info - 2 buttons :-) */}
          <View style={styles.buttonContainer}>
            {/* INGREDIENT BUTTON */}
            <TouchableOpacity
              style={
                showIngredients
                  ? styles.recipeInfoButtonOn
                  : styles.recipeInfoButtonOff
              }
              onPress={() => {
                setShowIngredients(true);
                setShowRecipe(false);
              }}
            >
              <Text style={styles.recipeInfoButtonText}>Ingredients</Text>
            </TouchableOpacity>

            {/* RECIPE BUTTON */}
            <TouchableOpacity
              style={
                showRecipe
                  ? styles.recipeInfoButtonOn
                  : styles.recipeInfoButtonOff
              }
              onPress={() => {
                setShowIngredients(false);
                setShowRecipe(true);
              }}
            >
              <Text style={styles.recipeInfoButtonText}>Recipe</Text>
            </TouchableOpacity>
          </View>

          {showIngredients ? (
            <>
              <View style={{ marginVertical: 10 }}>
                <IngredientCard ingredients={selectedRecipe?.ingredients} />
              </View>
            </>
          ) : null}

          {showRecipe ? (
            <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
              <RecipeCard instructions={instructions} />
            </View>
          ) : null}
          <View
            style={{
              alignItems: "center",
              marginTop: "5%",
              marginBottom: "20%",
            }}
          >
            <TouchableOpacity
              style={{
                width: 307,
                height: 56,
                backgroundColor: "#DD6135",
                borderRadius: "18%",
                alignItems: "center",
                justifyContent: "center",
              }}
              onPress={() => navigation.navigate(AboutScreen)}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontWeight: "600",
                  // textTransform: "uppercase",
                  fontSize: "18%",
                }}
              >
                About This Dish
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default RecipeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: "19%",
    letterSpacing: 1,
    textTransform: "uppercase",
    fontFamily: "Inter-Bold",
    textAlign: "center",
    color: COLORS.dishcoveryNearBlack,
    marginRight: 5,
    marginLeft: 5,
    marginVertical: 12,
  },
  subtitle: {
    fontSize: "12%",
    letterSpacing: "0.5%",
    textTransform: "uppercase",
    fontFamily: "Inter-SemiBold",
    textAlign: "center",
    color: COLORS.dishcoveryNearBlack,
    marginRight: "10%",
    marginLeft: "10%",
    marginTop: "-1%",
    marginBottom: "5%",
  },
  heartButton: {
    alignSelf: "flex-end",
    //position: 'absolute',
    bottom: 0,
    borderRadius: 99,
    height: 50,
    width: 50,
    marginRight: 7,
    marginTop: "48%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  backbuttoncircle: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    height: 35,
    width: 35,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.lightGray,
    backgroundColor: "white",
    color: "black",
    margin: 20,
  },
  backbuttonarrow: {
    position: "absolute",
    width: 15,
    height: 15,
    tintColor: "black",
    color: "black",
  },
  recipeImage: {
    width: "100%",
    height: 250,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0DDD6",
    borderRadius: "20%",
    height: 45,
    //width:200,
    marginHorizontal: "6%",
  },
  recipeInfoButtonOn: {
    width: "50%",
    height: 45,
    flex: 0.95,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15%",
    height: "80%",
  },
  recipeInfoButtonOff: {
    width: "45%",
    height: "100%",
    backgroundColor: "#F0DDD6",
    borderRadius: "20%",
    alignItems: "center",
    justifyContent: "center",
  },
  recipeInfoButtonText: {
    textTransform: "uppercase",
    fontSize: "12.5%",
    fontFamily: "Inter- SemiBold",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  // Toggle button settings:
  toggleButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  toggleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.black,
  },
  toggleIndicator: {
    position: "absolute",
    top: 2,
    width: "46%",
    height: 36,
    borderRadius: 20,
    backgroundColor: COLORS.dishcoveryOrange,
  },
  servingsContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: SIZES.padding * 1.5,
    marginTop: SIZES.padding * 2,
  },
  servingsText: {
    fontFamily: "Montserrat-Regular",
    fontSize: SIZES.body4,
    color: "#DD6135",
  },
  servingsAdjustment: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: SIZES.padding * 2,
  },
  servingsButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  servingsButtonText: {
    fontSize: SIZES.h4,
    fontWeight: "bold",
    color: "white",
  },
  servingsNumber: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: SIZES.body4,
    color: "#000",
    marginHorizontal: SIZES.padding,
  },
});
