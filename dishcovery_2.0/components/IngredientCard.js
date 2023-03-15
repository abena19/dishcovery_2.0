import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import codegenNativeCommands from "react-native/Libraries/Utilities/codegenNativeCommands";
import { SIZES, COLORS, FONTS, icons } from "../constants";

const IngredientCard =  ({ingredients, ingredientDetails, ingredientAmounts}) => {//(props) => {//{ingredients, ingredientDetails, ingredientAmounts}) => {//, ingredientDetails, IngredientAmounts}) => {
  //  console.log(ingredients);
  //  console.log(ingredientDetails);
  //  console.log(ingredientAmounts);
  

//  setIngredientAssortment(ingredients);
//  console.log(ingredientAssortment);
//  console.log(ingredients);

// const prepareIngredients = async => {
//   try{
//   setIngredientAssortment(ingredients);
//   setIngredientAmountList(ingredientAmounts);
//   setIngredientDetailList(ingredientDetails);
// } catch (err){
//   console.log("Error" + err);
// }
// }

// useEffect(() => {   
//   prepareIngredients();
//   console.log(ingredientAssortment);
// }, [] );
  
  
  //console.log(ingredients);
  // console.log(ingredients[0]);
  //console.log(ingredientDetails);
  // let ingredientArray = [

  // ];
  // const [currentIngredient, setCurrentIngredient] = React.useState(0);
  // const handleLeftPress = () => setCurrentIngredient(currentIngredient - 1);
  // const handleRightPress = () => setCurrentIngredient(currentIngredient + 1);
  // const isLastStep = currentIngredient === ingredients.length - 1;
  // const isFirstStep = currentIngredient === 0;
  // const ingredientNumber = currentIngredient + 1;
  // const ingredientNum = ingredients.length;
const ingredientArray = [
  "Lamb leg",
  "Olive oil",
  "Red wine vinegar",
  "Garlic",
  "Dried oregano",
  "Salt and pepper",
  "Tzatziki sauce",
  "Pita bread",


];


const ingredientAmountArray = [
  "2lbs",
  "1/4 cup",
  "1/4 cup",
  "3 cloves",
  "1 tbsp",
  "As desired", 
  "As desired",
  "For serving"
]

const ingredientDetailsArray = [
  "Trimmed of excess fat and sliced into thin strips",
  "",
  "",
  "Minced",
  "",
  "To taste",
  "",
  "For serving"
];
 const [ingredientAssortment, setIngredientAssortment] = useState([]);
    const [ingredientDetailList, setIngredientDetailList] = useState([]);
    const [ingredientAmountList, setIngredientAmountList] = useState([]);

// const {ingr, ingrDetails, ingrAmts} = props;
 const [loading, setLoading] = useState(true);

let tempList = [];
const getIngredients = async() => {
try{

  setIngredientAssortment(ingredients);
  setIngredientDetailList(ingredientDetails);
  setIngredientAmountList(ingredientAmounts);
  setLoading(false);
  }catch (err) {
  console.log("Error" + err);
  }

}
useEffect(() => {   
getIngredients();
//console.log(recipesList);
}, [ingredients, ingredientDetails, ingredientAmounts] );


 function renderDetails(i){
  return (
    <View style={styles.row}>
    {ingredientDetailList[i] === ""  ? null
           : <Text style={styles.ingredientDetails}>{ingredientDetailList[i]}</Text>
      }
      </View>
  );
}

console.log()

let ingredientList = [];
const ingredientNum = ingredientArray.length;
for (let i = 0; i < ingredientNum; i++){
  ingredientList.push(
    //<View style={styles.column}>
    <View style={styles.column}>
    <View style={styles.row}>
    {ingredientAssortment && (<Text style={styles.ingredientName}>
      {ingredientAssortment[i]}</Text>)}

     {ingredientAmountList && (<Text style={styles.ingredientAmount}>
      {ingredientAmountList[i]}</Text>)}
     </View>
     
      {/* {ingredientDetailsArray[i] === ""  ? null
           : <Text style={styles.ingredientDetails}>{ingredientDetailsArray[i]}</Text>
      } */}
      {ingredientDetailList && (
        renderDetails(i)
      )}
        {/* <Text style={styles.ingredientDetails}>
            {ingredientDetailsArray[i]}
         </Text> */}
      <View style={styles.divider} />

    {/* </View> */}
    {/* <View style={styles.divider} /> */}
    </View>
    )
    // console.log(ingredientList);
}


return(
  <View  style={styles.card}>
    <View style={styles.column}>

      {ingredientList}
    </View>

  </View>
);
  // return (
  //   <View style={styles.card}>
  //     <View style={styles.column}>
  //       <View style={styles.row}>
  //         <Text style={styles.ingredientName}>Lamb leg</Text>
  //         <Text style={styles.ingredientAmount}>2 lbs.</Text>
  //       </View>
  //       <Text style={styles.ingredientDetails}>
  //         Trimmed of excess fat and sliced into thin strips
  //       </Text>
  //       <View style={styles.divider} />
  //       <View style={styles.row}>
  //         <Text style={styles.ingredientName}>Olive oil</Text>
  //         <Text style={styles.ingredientAmount}>1/4 Cup</Text>
  //       </View>
  //       <View style={styles.divider} />
  //       <View style={styles.row}>
  //         <Text style={styles.ingredientName}>Red wine vinegar</Text>
  //         <Text style={styles.ingredientAmount}>1/4 Cup</Text>
  //       </View>
  //       <View style={styles.divider} />
  //       <View style={styles.row}>
  //         <Text style={styles.ingredientName}>Garlic</Text>
  //         <Text style={styles.ingredientAmount}>3 cloves</Text>
  //       </View>
  //       <Text style={styles.ingredientDetails}>Minced</Text>
  //       <View style={styles.divider} />
  //       <View style={styles.row}>
  //         <Text style={styles.ingredientName}>Dried oregano</Text>
  //         <Text style={styles.ingredientAmount}>1 tbsp</Text>
  //       </View>
  //       <View style={styles.divider} />
  //       <View style={styles.row}>
  //         <Text style={styles.ingredientName}>Salt and pepper</Text>
  //         <Text style={styles.ingredientAmount}>As desired</Text>
  //       </View>
  //       <Text style={styles.ingredientDetails}>To taste</Text>
  //       <View style={styles.divider} />
  //       <View style={styles.row}>
  //         <Text style={styles.ingredientName}>Tzatziki sauce</Text>
  //         <Text style={styles.ingredientAmount}>As desired</Text>
  //       </View>
  //       <View style={styles.divider} />
  //       <View style={styles.row}>
  //         <Text style={styles.ingredientName}>Pita bread</Text>
  //         <Text style={styles.ingredientAmount}>For serving</Text>
  //       </View>
  //       <Text style={styles.ingredientDetails}>For serving</Text>
  //     </View>
  //   </View>
  // );
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

