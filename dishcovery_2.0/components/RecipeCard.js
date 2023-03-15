import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SIZES, COLORS, FONTS, icons } from "../constants";

const RecipeCard = ({ }) => {//instructions }) => {
  const [currentStep, setCurrentStep] = React.useState(0);
  const handleLeftPress = () => setCurrentStep(currentStep - 1);
  const handleRightPress = () => setCurrentStep(currentStep + 1);
  const isLastStep = currentStep === instructions.length - 1;
  const isFirstStep = currentStep === 0;
  const stepNumber = currentStep + 1;

  const instructions = [
    "Step One",
    "Step Two",
    "Step Three",
    "Step Four"
  ]

  return (
    <TouchableOpacity
      onPress={isLastStep ? undefined : handleRightPress}
      activeOpacity={0.8}
      style={styles.container}
    >
      <View style={styles.card}>
        <View style={styles.stepNumber}>
          <Icon
            name={`numeric-${stepNumber}-circle`}
            color={COLORS.dishcoveryOrange}
            size={40}
          /> 
        </View>
        {/* <Text style={styles.text}>{instructions[currentStep]}</Text> */}
        <Text style={styles.text}>{instructions[currentStep]}</Text>
      </View>
      <TouchableOpacity
        onPress={isFirstStep ? undefined : handleLeftPress}
        activeOpacity={0.8}
        style={[styles.half, styles.leftHalf]}
      />
      <TouchableOpacity
        onPress={isLastStep ? undefined : handleRightPress}
        activeOpacity={0.8}
        style={[styles.half, styles.rightHalf]}
      />
      <View style={styles.progress}>
        {instructions.map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressIndicator,
              currentStep === index ? styles.progressHighlight : styles.progressDefault
            ]}
          />
        ))}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    backgroundColor: '#FFE7DF',
    borderRadius: 15,
    overflow: 'hidden',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  stepNumber: {
    position: 'absolute',
    top: 16,
    left: 16,
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
  half: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '50%',
  },
  leftHalf: {
    left: 0,
  },
  rightHalf: {
    right: 0,
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 24,
    paddingHorizontal: 16,
  },
  progressIndicator: {
    flex: 1,
    height: '20%',
    marginHorizontal: 4,
    marginBottom: 20,
    borderRadius: 5,
  },
  progressDefault: {
    backgroundColor: "#C1C1C1",
  },
  progressHighlight: {
    backgroundColor: COLORS.dishcoveryOrange,
  },
});

export default RecipeCard;
