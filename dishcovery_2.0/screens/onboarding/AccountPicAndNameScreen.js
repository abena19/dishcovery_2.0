

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




const storage = getStorage();


const AccountPicAndNameScreen = ({ navigation }) => {

    const [image, setImage] = useState(null);
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1
        });
        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };
    
    const [name, onChangeName] = useState("");


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
            <Text style={styles.pageTitle}>Account Information</Text>
            <Text style={styles.pageCaption}>Let's create your unique login.</Text>
        </View>

        <View style={styles.imageStyle}>
                 {/* {image && <Image style={{width: '60%', height: '60%', backgroundcolor:'green', borderColor: 'red', borderRadius:'100%', alignSelf: 'center'}} source={{uri : image}}/>} */}
                
                 <Image style={{width: 200, height: 200, backgroundcolor:'green', borderColor: 'red', borderRadius:'100%', alignSelf: 'center'}} source={{uri : image ? image : (require('./../../lemongrass.png'))}}/>
                <View>
                    <Pressable style={styles.editButton} onPress={pickImage}>
                        <Text style={styles.buttonText}>{image ? 'Edit' : 'Upload'} profile picture</Text>
                    </Pressable>
                </View>        
        </View>

        <View style={styles.inputContainer}>
            <Text style={styles.caption}>Your first name</Text>
            <TextInput 
                placeholder="E.g. James"
                 value={name}
                 onChangeText={text => onChangeName(text)}
                style={styles.input}
            />
            
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Dietary Preferences", {passedImage:image}) }
                
                style={styles.button}
            >
                <Text style={styles.buttonText}>Next  →</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    </SafeAreaView>
)
}

export default AccountPicAndNameScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'row',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '3%',
        marginBottom:'0.5%',
    },
    pageTitle: {
        // flex: 1,
        alignSelf: 'center',
        fontSize: 36,
        // marginBottom: 12,
        // marginTop: 40
    },
    pageCaption: {
        fontSize: 18,
        color: '#BBBBBB',
    },
    caption: {
        fontSize: '15%',
        // color: '#BBBBBB',
        marginBottom: '0.5%',
        alignSelf: "left",
        marginLeft: '5%'
    },
    inputContainer: {
        width: '90%',
        marginTop: '5%',
        alignItems: 'center',
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#DD6135',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: '3%',
        marginBottom: '5%',
        width: '90%',
    },
    buttonContainer: {
        flex: 0.6,
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom:10,
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
        width: '93%', 
        padding: 15,
        justifyContent:'center',
        // borderRadius: 10,
        alignItems: 'center',
        // marginBottom: 20
    },
    editButton: {
        height:55,
        // marginBottom:0,
        // flex: 1,
        borderRadius:20,
        flexDirection:'column',
        backgroundColor: '#DD6135', 
        width: 200, 
        padding: 15,
        justifyContent:'center',
        // borderRadius: 10,
        position: 'fixed',
        alignItems: 'center',
        marginTop: '5%',
        marginBottom: '8%',
        bottom: 0,
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
    imageStyle: {
        flex: 1,
        width:'80%',
        height: '90%',
        marginTop: '5%',
        marginBottom: '5%',
        alignItems: 'center',
    },
})

