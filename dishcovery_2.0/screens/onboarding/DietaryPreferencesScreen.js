

import {useState} from "react"
import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, Alert, Image } from 'react-native';
import { auth, db } from '../../constants/Firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import CloseButton from '../../assets/styles/CloseButton.style';
import { Ionicons } from '@expo/vector-icons';
import CommonStylesStyles from "../../assets/styles/CommonStyles.styles";
import commonStyles from "../../assets/styles/CommonStyles.styles";
import { AccountPicAndNameScreen } from "./AccountPicAndNameScreen";
import { useRoute } from '@react-navigation/native';
import { getDocs, where, query, collection } from 'firebase/firestore'


const storage = getStorage();


export default function DietaryPreferencesScreen({ navigation}) {

    const [image, setImage] = useState("blank image");
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const [recipes, setRecipes] = useState([]);
    const getRecipes  = async () => {
        // const q = query(collection(db, "Recipes"), where("region", "==", "Mediterranean"));
        // const querySnapshot = await getDocs(q);
        // if (querySnapshot.length > 0) {
        //     querySnapshot.forEach((doc) => {

        //     })
        // }
        console.log("before")
        const q = query(collection(db, "Recipes"), where("region", "==", "Mediterranean"));
        const querySnapshot = await getDocs(q);
        //console.log(querySnapshot);
        //if (querySnapshot.length > 0) {
            console.log("after");

            querySnapshot.forEach((doc) => {
                console.log(doc.data());

                setRecipes([...recipes, doc.data()]);

            
            })
       // }
        //console.log(recipes);
        //console.log("after if statement2");

        // console.log("Mediterranean");
        // const recipeRef = db.collection('Recipes').get();
        // const snapshot = await recipeRef.where('region', '==', 'Mediterranean').get();


        // if (snapshot.empty) {
        //     console.log('No matching documents.');
        //     return;
        //   }  
          
        //   snapshot.forEach(doc => {
        //     console.log(doc.id, '=>', doc.data());
        //   });

        }   

      //  console.log(recipes);


        //const db = firebase.firestore();

        // console.log("before");
        // const recRef = doc(db, "Recipes", "Chiles en Nogada");
        // const docSnap = await getDoc(recRef);
        // //const recipeRef = db.collection('Recipes').doc('Chiles en Nogada');
        // console.log("after")
        // //const doc = await recipeRef.get();
        // if (!docSnap.exists) {
        // console.log('No such document!');
        // } else {
        // console.log('Document data:', docSnap.data());


        
       

        //navigation.navigate("Explore");
        // const recipes = await firestore().collection('Recipes').doc('Origins').collection('Greece').get();
        // console.log(recipes);
        //}


    const [name, onChangeName] = useState("");

    const route = useRoute();
    const passedImage = route.params.passedImage;

    const [selected1, setSelected1] = useState(false);
    const onPressHandler1 = () => {
        setSelected1(!selected1);
    }
    const [selected2, setSelected2] = useState(false);
    const onPressHandler2 = () => {
        setSelected2(!selected2);
    }
   
    const [selected3, setSelected3] = useState(false);
    const onPressHandler3 = () => {
        setSelected3(!selected3);
    }

    const [selected4, setSelected4] = useState(false);
    const onPressHandler4 = () => {
        setSelected4(!selected4);
    }

    const [selected5, setSelected5] = useState(false);
    const onPressHandler5 = () => {
        setSelected5(!selected5);
    }

    const [selected6, setSelected6] = useState(false);
    const onPressHandler6 = () => {
        setSelected6(!selected6);
    }

    const [selected7, setSelected7] = useState(false);
    const onPressHandler7 = () => {
        setSelected7(!selected7);
    }

    const [selected8, setSelected8] = useState(false);
    const onPressHandler8 = () => {
        setSelected8(!selected8);
    }

    const [selected9, setSelected9] = useState(false);
    const onPressHandler9 = () => {
        setSelected9(!selected9);
    }

    const [selected10, setSelected10] = useState(false);
    const onPressHandler10 = () => {
        setSelected10(!selected10);
    }
    const [selected11, setSelected11] = useState(false);
    const onPressHandler11 = () => {
        setSelected11(!selected11);
    }
    const [selected12, setSelected12] = useState(false);
    const onPressHandler12 = () => {
        setSelected12(!selected12);
    }
    const [selected13, setSelected13] = useState(false);
    const onPressHandler13 = () => {
        setSelected13(!selected13);
    }
    const [selected14, setSelected14] = useState(false);
    const onPressHandler14 = () => {
        setSelected14(!selected14);
    }
    const [selected15, setSelected15] = useState(false);
    const onPressHandler15 = () => {
        setSelected15(!selected15);
    }
    const [selected16, setSelected16] = useState(false);
    const onPressHandler16 = () => {
        setSelected16(!selected16);
    }
    const [selected17, setSelected17] = useState(false);
    const onPressHandler17 = () => {
        setSelected17(!selected17);
    }

    const [selected18, setSelected18] = useState(false);
    const onPressHandler18 = () => {
        setSelected18(!selected18);
    }

    const [selected19, setSelected19] = useState(false);
    const onPressHandler19 = () => {
        setSelected19(!selected19);
    }

    const [selected20, setSelected20] = useState(false);
    const onPressHandler20 = () => {
        setSelected20(!selected20);
    }
   // console.log("HEY THIS IS THE ONE " + recipes);


return (
    <SafeAreaView style={commonStyles.whiteBackground}>
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >
        {/* <SafeAreaView style={styles.backButton}> */}
    <View style={styles.backButtonContainer}>
        <TouchableOpacity
            style={styles.backButtonContainer}
            onPress={() => navigation.goBack()}
        >
        
            <Ionicons name="ios-arrow-back" size={30} color="#DD6135" />
        </TouchableOpacity>
        </View>
      {/* </SafeAreaView> */}
        <View style={styles.title}>
            <Text style={styles.pageTitle}>Looking Good {name}!</Text>
            {/* <Text style={styles.pageCaption}>Now to food</Text> */}
        </View>
        <View style={styles.title}>
        <Image style={{width: 200, height: 200, backgroundcolor:'green', borderColor: 'red', borderRadius:'100%', alignSelf: 'center'}} source={{uri : passedImage}}/>
                
        </View>
        <View style={styles.title}>
            <Text style={styles.pageCaption}>Do you have any dietary preferences?</Text>
        </View>
        <View style={styles.inputContainer}>
            <Text style={styles.caption}>Animal Products</Text>
            
        </View>
        <View style={styles.dietarySelectioncontainer}>
        <TouchableOpacity 
            style={selected1 ? styles.selectedButton : styles.unselectedButton}
            onPress= {onPressHandler1}
            >
                <Text style= {selected1 ? styles.selectedButtonText : styles.unselectedButtonText}>
                    {selected1 ?  'Vegan ✓' : 'Vegan'} </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={selected2 ? styles.selectedButton : styles.unselectedButton}
            onPress= {onPressHandler2}
            >
                <Text style= {selected2 ? styles.selectedButtonText : styles.unselectedButtonText}>
                    {selected2 ?  'Vegetarian ✓' : 'Vegetarian'} </Text>
            </TouchableOpacity>

          
            <TouchableOpacity 
            style={selected3 ? styles.selectedButton : styles.unselectedButton}
            onPress= {onPressHandler3}
            >
                <Text style= {selected3 ? styles.selectedButtonText : styles.unselectedButtonText}>
                    {selected3 ?  'Pescetarian ✓' : 'Pescetarian'} </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={selected4 ? styles.selectedButton : styles.unselectedButton}
            onPress= {onPressHandler4}
            >
                <Text style= {selected4 ? styles.selectedButtonText : styles.unselectedButtonText}>
                    {selected4 ?  'Flexitarian ✓' : 'Flexitarian'} </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={selected5 ? styles.selectedButton : styles.unselectedButton}
            onPress= {onPressHandler5}
            >
                <Text style= {selected5 ? styles.selectedButtonText : styles.unselectedButtonText}>
                    {selected5 ?  'No Red Meat ✓' : 'No Red Meat'} </Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={selected6 ? styles.selectedButton : styles.unselectedButton}
            onPress= {onPressHandler6}
            >
                <Text style= {selected6 ? styles.selectedButtonText : styles.unselectedButtonText}>
                    {selected6 ?  'Dairy Free ✓' : 'Dairy Free'} </Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={selected7 ? styles.selectedButton : styles.unselectedButton}
            onPress= {onPressHandler7}
            >
                <Text style= {selected7 ? styles.selectedButtonText : styles.unselectedButtonText}>
                    {selected7 ?  'Meatless Mondays ✓' : 'Meatless Mondays'} </Text>
            </TouchableOpacity>
  
            
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.caption}>Allergies & Sensitivities</Text>
            
        </View>
        <View style={styles.dietarySelectioncontainer}>

            <TouchableOpacity 
                style={selected8 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler8}
                >
                  <Text style= {selected8 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected8 ?  'Gluten ✓' : 'Gluten'} </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={selected9 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler9}
                >
                  <Text style= {selected9 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected9 ?  'Dairy ✓' : 'Dairy'} </Text>
            </TouchableOpacity>
           

            <TouchableOpacity 
                style={selected10 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler10}
                >
                  <Text style= {selected10 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected10 ?  'Lactose ✓' : 'Lactose'} </Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={selected11 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler11}
                >
                  <Text style= {selected11 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected11 ?  'Shellfish ✓' : 'Shellfish'} </Text>
            </TouchableOpacity>
           
            {/* <TouchableOpacity 
                style={selected12 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler12}
                >
                  <Text style= {selected12 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected12 ?  'Garlic ✓' : 'Garlic'} </Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity 
                style={selected13 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler13}
                >
                  <Text style= {selected13 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected13 ?  'Banana ✓' : 'Banana'} </Text>
            </TouchableOpacity> */}
            <TouchableOpacity 
                style={selected14 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler14}
                >
                  <Text style= {selected14 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected14 ?  'Peanuts ✓' : 'Peanuts'} </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity 
                style={selected15 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler15}
                >
                  <Text style= {selected15 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected15 ?  'Strawberries ✓' : 'Strawberries'} </Text>
            </TouchableOpacity> */}

            {/* <TouchableOpacity 
                style={selected16 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler16}
                >
                  <Text style= {selected16 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected16 ?  'Apple ✓' : 'Apple'} </Text>
            </TouchableOpacity> */}
            <TouchableOpacity 
                style={selected17 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler17}
                >
                  <Text style= {selected17 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected17 ?  'Soy ✓' : 'Soy'} </Text>
            </TouchableOpacity>
        
            
            {/* <TouchableOpacity 
                style={selected18 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler18}
                >
                  <Text style= {selected18 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected18 ?  'Tree nuts ✓' : 'Tree nuts'} </Text>
            </TouchableOpacity> */}

            <TouchableOpacity 
                style={selected19 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler19}
                >
                  <Text style= {selected19 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected19 ?  'Fish ✓' : 'Fish'} </Text>
            </TouchableOpacity>
            {/* <TouchableOpacity 
                style={selected20 ? styles.selectedButton : styles.unselectedButton}
                onPress= {onPressHandler20}
                >
                  <Text style= {selected20 ? styles.selectedButtonText : styles.unselectedButtonText}>
                      {selected20 ?  'Sesame ✓' : 'Sesame'} </Text>
            </TouchableOpacity> */}
            
        </View>

        

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPressIn={getRecipes}
                onPress={() => navigation.navigate("Explore", {screen: "Explore Screen", params: {recipes: "passedRecipes"}}) }
                
                style={styles.button}
            >
                <Text style={styles.buttonText}>Next  →</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
)
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    },
    pageTitle: {
        alignSelf: 'center',
        fontSize: 36,
        marginBottom: 12,
        marginTop: '-15%',
    },
    pageCaption: {
        fontSize: 15,
        color: '#BBBBBB',
        marginTop: '12%',
    },
    caption: {
        fontSize: '15%',
        // color: '#BBBBBB',
        marginBottom: '0.5%',
        alignSelf: "left",
        marginLeft: '3%'
    },
    inputContainer: {
        width: '90%',
        marginTop: 3,
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#DD6135',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5
    },
    buttonContainer: {
        flex: 0.6,
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom:20
    },
    backButtonContainer: {
        // justifyContent:'flex-start',
        alignItems:'flex-start',
        width: '100%',
        marginTop:10,
        marginLeft: 15,
    },
    button: {
        height:55,
        // marginBottom:0,
        
        borderRadius:20,
        flexDirection:'column',
        backgroundColor: '#DD6135', 
        width: '100%', 
        padding: 15,
        justifyContent:'center',
        // borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText: {
        fontSize: 15,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'Inter-Regular',
    },
    buttonOutline: {
        backgroundColor: 'white'
    },

    backButton: {
        alignItems: 'left',
        justifyContent: 'left',
        flex: 1,
        marginBottom: 0.1,
    },
    buttonOutlineText: {},
    dietarySelectioncontainer:{
        flex: 1,
        //width: '90%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        justifyContent: 'left',
        alignItems: 'flex-start',
        padding:5,
        marginLeft: '5%',
        marginBottom:'13%',
    },
    unselectedButton: {
        backgroundColor: 'white',
        borderColor: '#DD6135',
        borderWidth: 2.8, 
        padding: 5,
        borderRadius: 20,
        alignItems: 'flex-end',
        marginBottom: '3%',
        marginRight: '1%',
    },
    unselectedButtonText: {
        color: '#DD6135',
        fontSize: 13,
        fontWeight: 'bold'
    },

    preferenceText: {
        fontSize: 15,
    },
    selectedButton: {
        backgroundColor: '#DD6135',
        borderColor: '#DD6135',
        borderWidth: 2.8, 
        padding: 5,
        borderRadius: 20,
        alignItems: 'flex-end',
        marginBottom: '2%',
        marginRight: '1.5%',
    },
    selectedButtonText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }

})

