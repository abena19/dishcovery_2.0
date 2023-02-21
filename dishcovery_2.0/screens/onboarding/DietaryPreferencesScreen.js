

import {useState} from "react"
import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, Alert, Image } from 'react-native';
import { auth } from '../../constants/Firebase';
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

    const [name, onChangeName] = useState("");

    const route = useRoute();
    const passedImage = route.params.passedImage;

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
            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Vegan</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Vegetarian</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Pescetarian</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Flexitarian</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>No Red Meat</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Dairy-Free</Text>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Meatless Mondays</Text>
            </TouchableOpacity>
            
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.caption}>Allergies & Sensitivities</Text>
            
        </View>
        <View style={styles.dietarySelectioncontainer}>
            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Gluten</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Dairy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Lactose</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Shellfish</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Garlic</Text>
            </TouchableOpacity>  */}

            {/* <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Banana</Text>
            </TouchableOpacity>  */}

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Peanuts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Strawberries</Text>
            </TouchableOpacity>
            
            {/* <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Apple</Text>
            </TouchableOpacity> */}
            
            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Soy</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Tree nuts</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Fish</Text>
            </TouchableOpacity>
            
            {/* <TouchableOpacity style={styles.unselectedButton}>
                <Text style= {styles.unselectedButtonText}>Sesame</Text>
            </TouchableOpacity> */}
            
            
        </View>

        

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Explore") }
                
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
        marginTop: 10
    },
    pageCaption: {
        fontSize: 15,
        color: '#BBBBBB',
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
        //marginBottom:100
    },
    unselectedButton: {
        backgroundColor: 'white',
        borderColor: '#DD6135',
        borderWidth: 2.8, 
        padding: 10,
        borderRadius: 20,
        alignItems: 'flex-end',
        marginBottom: 5,
        marginRight: 2,
    },
    unselectedButtonText: {
        color: '#DD6135',
        fontSize: 13,
        fontWeight: 'bold'
    },

    preferenceText: {
        fontSize: 15,
    }

})

