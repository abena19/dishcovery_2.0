
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

export default function LoginScreen({ navigation }) {
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

    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [username, onChangeUID] = useState("");

    const signUpUser = async () => {
        //const auth = getAuth();
        if (email.length === 0 || password.length === 0) {
            return;
        } try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await addDoc(collection(db, 'users'), {
                name: username, 
                email: userCredential.user.email,
                picture: image
            })
            console.log(email);
            userCredential.user.displayName = username;
            userCredential.user.photoURL = image;
            navigation.navigate('Home Screen');
        } catch(err) {
            Alert.alert(
                "Error",
                err.code,
                [
                    {
                        text: "Ok",
                        onPress: () => console.log(err.code),
                    }
                ]
            )
        }
    }




    return (
        <SafeAreaView style={commonStyles.whiteBackground}>
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            {/* <SafeAreaView style={styles.backButton}> */}
          <View>
          <TouchableOpacity
              style={CloseButton.closeButtonContainer}
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
            <View style={styles.inputContainer}>
                {image && <Image style={styles.image} source={{uri : image}}/>}
                {/* {image && <Image source={{uri : image}}/>} */}
                <Pressable  style={styles.button} onPress={pickImage}>
                    <Text style={styles.caption}>upload a profile picture</Text>
                </Pressable>
                <Text style={styles.caption}>Username</Text>
                <TextInput 
                    placeholder="E.g. dishlover123..."
                     value={username}
                     onChangeText={text => onChangeUID(text)}
                    style={styles.input}
                />
                <Text style={styles.caption}>Email</Text>
                <TextInput 
                    placeholder="E.g. dishlover@dish.com"
                     value={email}
                     onChangeText={text => onChangeEmail(text)}
                    style={styles.input}
                />
                <Text style={styles.caption}>Password</Text>
                <TextInput 
                    placeholder="Enter your password here."
                     //value={}
                    // onChangeText={text => }
                    style={styles.input}
                    secureTextEntry
                />
                <Text style={styles.caption}>Confirm Password</Text>
                <TextInput 
                    placeholder="Enter your password here."
                     value={password}
                     onChangeText={text => onChangePassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Account Picture and Name") }
                    onPressIn={signUpUser}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Next  →</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

// export default LoginScreen

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
        marginTop: 35
    },
    pageTitle: {
        alignSelf: 'center',
        fontSize: 36,
        marginBottom: 12,
        marginTop: 40
    },
    pageCaption: {
        fontSize: 18,
        color: '#BBBBBB',
    },
    inputContainer: {
        width: '90%',
        marginTop: 30
    },
    input: {
        backgroundColor: 'white',
        borderColor: '#DD6135',
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flex: 0.6,
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom:100
    },
    button: {
        backgroundColor: '#DD6135', 
        width: '100%', 
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 26
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

})

