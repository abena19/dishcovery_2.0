// Importing necessary components from React and React Native libraries
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Text,
  ImageBackground,
  Platform,
  StyleSheet,
  Animated,
} from "react-native";

// Importing other necessary components from project files and libraries
import { SIZES, COLORS, FONTS, icons } from "../constants";
import { Ionicons } from "@expo/vector-icons";

// Defining constants used for styling
const galleryWidth = 240;
const containerHeight = 280;
const galleryHeight = 240;
const infoBoxHeight = galleryHeight / 2.52;
const marginInfoBox = galleryHeight / 1.66;

// Declaring a new functional component called DishCard that receives props and returns JSX elements
const DishCard = ({ containerStyle, recipeItem, onPress }) => {
  // Setting up an animation to trigger when the user presses the card
  const [scaleValue] = useState(new Animated.Value(1));

  // Setting scaleValue to 0.95, changes size slightly
  const animateIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  // Brings DishCard to original size.
  const animateOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  // Returning JSX code for the component with necessary styling and components
  return (
    <TouchableWithoutFeedback
      onPressIn={animateIn}
      onPressOut={animateOut}
      onPress={onPress}
    >
      <Animated.View
        style={{
          height: containerHeight,
          width: galleryWidth,
          marginTop: SIZES.paddingsmall,
          marginRight: galleryWidth / 20,
          marginLeft: galleryWidth / 20,
          borderRadius: SIZES.radius,
          ...containerStyle,
          activeOpacity: 0.7,
          transform: [{ scale: scaleValue }],
          paddingBottom: 40,
        }}
        onPress={onPress}
      >
        <ImageBackground
          source={recipeItem.image}
          resizeMode="cover"
          style={{ flex: 1, width: galleryWidth, height: galleryHeight }}
          imageStyle={{ borderRadius: SIZES.radius - 10 }}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]}
            start={[0, 0]}
            end={[0, 1]}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "100%",
              borderBottomRightRadius: SIZES.radius - 10,
              borderBottomLeftRadius: SIZES.radius - 10,
            }}
          />

          <View
            style={{
              flex: 1,
              flexDirection: "row-reverse",
              justifyContent: "space-between",
            }}
          >
            <View style={styles.heartButton}>
              <Ionicons
                name="heart"
                size={25}
                color={COLORS.dishcoveryOrange}
              />
            </View>
          </View>

          <View
            style={{
              marginTop: marginInfoBox,
              flexDirection: "column",
              justifyContent: "flex-end",
              paddingHorizontal: marginInfoBox / 10,
              paddingVertical: infoBoxHeight / 12,
              height: infoBoxHeight,
              width: galleryWidth,
              borderBottomRightRadius: SIZES.radius - 10,
              borderBottomLeftRadius: SIZES.radius - 10,
            }}
          >
            <Text
              style={{
                fontFamily: "Inter-SemiBold",
                fontSize: recipeItem.name.length > 12 ? 20 : 25,
                lineHeight: recipeItem.name.length > 12 ? 20 : 25,
                color: "white",
                // Move text up by 30.
                //marginBottom: 30,
                marginLeft: 5,
              }}
            >
              {recipeItem.name}
            </Text>

            <View style={{ height: 6 }} />

            <Text
              style={{
                fontFamily: "Inter-Medium",
                fontSize: 16,
                lineHeight: 16,
                marginLeft: 5,
                marginBottom: 10,
                color: "rgba(255, 255, 255, 0.7)",
              }}
            >
              {"40 min   Greece"}
            </Text>
          </View>
        </ImageBackground>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

// Defining styles used for the component
const styles = StyleSheet.create({
  heartButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: SIZES.base + 15,
    marginTop: SIZES.base + 15,
    opacity: 0.7,
    transform: [{ scale: 1.5 }],
  },
});

export default DishCard;
