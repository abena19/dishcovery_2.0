import React from 'react';
//import { View, Text, StyleSheet } from 'react-native';
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
import commonStyles from "../assets/styles/CommonStyles.styles";


import { icons, COLORS, SIZES } from "../constants";

const AboutScreen = ({ navigation, route }) => {
    //const { recipe } = route.params;
    return (
      <SafeAreaView style={commonStyles.whiteBackground}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icons.backArrow} resizeMode="contain" style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>About lamb gyro</Text>
          <View style={{ width: 32 }} />
        </View>
  
        {/* Description */}
        <View style={styles.description}>
          <Text style={styles.descriptionTitle}>
            We’re giving you the variety eaten in{" "}
            <Text style={styles.highlight}>Greece!</Text>
          </Text>
          <Text style={styles.descriptionText}>
            Gyro meat is made by marinating slices of meat (typically lamb, but sometimes beef or pork) in a blend of herbs and spices, then stacking the slices on a vertical spit and roasting them slowly on all sides as the spit rotates. The meat is then shaved off in thin slices and served in a warm pita with tomatoes, onions, and tzatziki sauce.
          </Text>
        </View>
  
        {/* Add-ons */}
        <View style={styles.addons}>
          <View style={styles.addon}>
            <View style={styles.addonIcon}>
              <TouchableOpacity>
                <Text style={styles.addonIconText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.addonTitle}>Nutrition Facts</Text>
          </View>
  
          <View style={styles.addon}>
            <View style={styles.addonIcon}>
              <TouchableOpacity>
                <Text style={styles.addonIconText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.addonTitle}>Similar Recipes</Text>
          </View>
  
          <View style={styles.addon}>
            <View style={styles.addonIcon}>
              <TouchableOpacity>
                <Text style={styles.addonIconText}>+</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.addonTitle}>Rate This Recipe</Text>
          </View>
        </View>
  
        {/* Back Button */}
        <View style={styles.backButton}>
          <TouchableOpacity
            style={styles.backButtonTouchable}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Back to recipe</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  export default AboutScreen;
  
  const styles = StyleSheet.create({
    header: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingTop: 16,
    },
    backIcon: {
      height: 24,
      width: 24,
      tintColor: COLORS.primary,
    },
    headerTitle: {
      fontFamily: "Inter-SemiBold",
      fontSize: 16,
      lineHeight: 24,
      textTransform: "uppercase",
      color: COLORS.primary,
    },
    description: {
      paddingHorizontal: 16,
      paddingTop: 16,
      paddingBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: COLORS.lightGray,
    },
    descriptionTitle: {
      fontFamily: "Inter-SemiBold",
      fontSize: 15,
      lineHeight: 24,
      color: COLORS.primary,
    },
    highlight: {
      color: COLORS.orange,
      fontFamily: "Inter-SemiBold",
    },
})