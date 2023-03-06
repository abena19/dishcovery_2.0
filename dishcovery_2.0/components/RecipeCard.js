import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { COLORS, SIZES } from "../constants";

const RecipeCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Lamb Souvlaki</Text>
      <Text style={styles.cardSubtitle}>Ingredients:</Text>
      {/* Ingredient list goes here */}
      <View style={styles.divider} />
      <Text style={styles.cardSubtitle}>Instructions:</Text>
      <View style={styles.instruction}>
        <Icon
          name="numeric-1-circle"
          color={COLORS.dishcoveryOrange}
          size={17}
        />
        <Text style={styles.instructionText}>
          In a mixing bowl, combine the Greek yogurt, grated and drained cucumber, minced garlic, extra virgin olive oil, red wine vinegar, chopped fresh dill, salt, and pepper.
        </Text>
      </View>
      <View style={styles.instruction}>
        <Icon
          name="numeric-2-circle"
          color={COLORS.dishcoveryOrange}
          size={17}
        />
        <Text style={styles.instructionText}>
          Mix the ingredients until they are fully combined and the texture is smooth.
        </Text>
      </View>
      <View style={styles.instruction}>
        <Icon
          name="numeric-3-circle"
          color={COLORS.dishcoveryOrange}
          size={17}
        />
        <Text style={styles.instructionText}>
          Adjust the seasoning to taste, if needed.
        </Text>
      </View>
      <View style={styles.instruction}>
        <Icon
          name="numeric-4-circle"
          color={COLORS.dishcoveryOrange}
          size={17}
        />
        <Text style={styles.instructionText}>
          Cover the tzatziki and refrigerate it for at least an hour to let the flavors meld.
        </Text>
      </View>
      <View style={styles.instruction}>
        <Icon
          name="numeric-5-circle"
          color={COLORS.dishcoveryOrange}
          size={17}
        />
        <Text style={styles.instructionText}>
          Serve the tzatziki cold as a dip or condiment.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFE7DF",
    borderRadius: 20,
    marginHorizontal: 20,
    padding: 20,
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  cardSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
  instruction: {
    flexDirection: "row",
    marginBottom: 10,
  },
  instructionText: {
    flex: 1,
    marginLeft: 5,
  },
  divider: {
    borderBottomColor: "#EDCACA",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default RecipeCard;
