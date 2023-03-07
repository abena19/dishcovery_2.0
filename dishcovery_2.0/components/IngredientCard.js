import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const IngredientCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.column}>
        <View style={styles.row}>
          <Text style={styles.ingredientName}>Lamb leg</Text>
          <Text style={styles.ingredientAmount}>2 lbs.</Text>
        </View>
        <Text style={styles.ingredientDetails}>
          Trimmed of excess fat and sliced into thin strips
        </Text>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.ingredientName}>Olive oil</Text>
          <Text style={styles.ingredientAmount}>1/4 Cup</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.ingredientName}>Red wine vinegar</Text>
          <Text style={styles.ingredientAmount}>1/4 Cup</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.ingredientName}>Garlic</Text>
          <Text style={styles.ingredientAmount}>3 cloves</Text>
        </View>
        <Text style={styles.ingredientDetails}>Minced</Text>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.ingredientName}>Dried oregano</Text>
          <Text style={styles.ingredientAmount}>1 tbsp</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.ingredientName}>Salt and pepper</Text>
          <Text style={styles.ingredientAmount}>As desired</Text>
        </View>
        <Text style={styles.ingredientDetails}>To taste</Text>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.ingredientName}>Tzatziki sauce</Text>
          <Text style={styles.ingredientAmount}>As desired</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.row}>
          <Text style={styles.ingredientName}>Pita bread</Text>
          <Text style={styles.ingredientAmount}>For serving</Text>
        </View>
        <Text style={styles.ingredientDetails}>For serving</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFE7DF",
    borderRadius: 20,
    flexDirection: "row",
    marginHorizontal: 20,
    padding: 20,
  },
  column: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  ingredientName: {
    fontSize: 19,
    fontFamily: "Montserrat-Regular",
    marginTop: 5,
    marginBottom: 5,
  },
  ingredientDetails: {
    fontSize: 13,
    color: "#7E7E7E",
  },
  ingredientAmount: {
    fontSize: 15,
    fontWeight: "bold",
    fontFamily: "Inter-Bold",
    textAlign: "right",
    marginTop: 5,
  },
  divider: {
    borderBottomColor: "#EDCACA",
    borderBottomWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});

export default IngredientCard;
