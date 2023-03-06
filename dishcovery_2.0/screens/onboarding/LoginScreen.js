
import {useState} from "react"
import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, Alert, Image } from 'react-native';
import { auth } from '../../constants/Firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity, ScrollView} from 'react-native'
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';
import CloseButton from '../../assets/styles/CloseButton.style';
import { Ionicons } from '@expo/vector-icons';
import CommonStylesStyles from "../../assets/styles/CommonStyles.styles";
import commonStyles from "../../assets/styles/CommonStyles.styles";




const storage = getStorage();

export default function LoginScreen({ navigation }) {
    

    const [email, onChangeEmail] = useState("");
    const [password, onChangePassword] = useState("");
    const [username, onChangeUID] = useState("");

    const signUpUser = async () => {
        //const auth = getAuth();
        if (email.length === 0 || password.length === 0) {
            return;
        } try {
            let userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // await addDoc(collection(db, 'users'), {
            //     name: username, 
            //     email: userCredential.user.email,
            //     picture: image
            // })
            await addDoc(collection(db, 'users'), {
                uid: username,

                name: username, 
                email: email,
                password: password,
                //picture: image
            })
            console.log(email);
            //userCredential.user.displayName = username;
            //userCredential.user.photoURL = image;
            navigation.navigate('Account Picture and Name');
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
             <TouchableOpacity
              style={styles.backButtonContainer}
              onPress={() => navigation.goBack()}
            >
            
              <Ionicons name="ios-arrow-back" size={30} color="#DD6135" />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
            // keyboardVerticalOffset={100}
        >
          {/* <View style={styles.backButtonContainer}> */}
         
          {/* </View> */}

            {/* <View style={styles.title}> */}
                <Text style={styles.pageTitle}>Account Information</Text>
                <Text style={styles.pageCaption}>Let's create your unique login.</Text>
            {/* </View> */}

        
            {/* <View style={styles.inputContainer}> */}

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
                {/* </KeyboardAwareScrollView> */}
            {/* </View> */}

            {/* <View style={styles.buttonContainer}> */}
                <TouchableOpacity
                    onPress={() => navigation.navigate("Account Picture and Name") }
                    onPressIn={signUpUser}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Next  →</Text>
                </TouchableOpacity>
            {/* </View> */}
  
        </KeyboardAvoidingView>
        </ScrollView>
        </SafeAreaView>
    )
}

// export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'black'
        // padding: 20,
    },
    title: {
        // flex: 0.35,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '6%',
        // position: "fixed",
    },
    pageTitle: {
        alignSelf: 'center',
        fontSize: '36%',
        // marginBottom: 12,
        marginTop: '-10%'
    },
    pageCaption: {
        fontSize: '18%',
        color: '#BBBBBB',
        marginBottom: '8%'
    },
    caption: {
        fontSize: '15%',
        // color: '#BBBBBB',
        marginBottom: '0.5%',
        alignSelf: "left",
        marginLeft: '9%'
    },
    inputContainer: {
        width: '90%',
        marginTop: '2%',
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
        width: '85%',
        // position: 'fixed',
    },
    buttonContainer: {
        flex: 1,
        width: '90%',
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        bottom: 0,
        // marginBottom:60,
        marginBottom: '15%',
        flexGrow: 1,
    },
    backButtonContainer: {
        // justifyContent:'flex-start',
        alignItems:'flex-start',
        width: '100%',
        marginLeft:15,
        marginTop:10,
    },
    button: {
        height:'7.5%',
        // marginBottom:0,
        
        borderRadius: '17%',
        flexDirection:'column',
        backgroundColor: '#DD6135', 
        width: '86%', 
        // padding: 15,
        justifyContent:'center',
        // borderRadius: 10,
        alignItems: 'center',
        // marginBottom: 30,
        marginBottom: '10%',
        // position: 'absolute',
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
        // marginBottom: 0.1,
    },
    buttonOutlineText: {},
    imageStyle: {
        width:'100%',
        height: '70%',
    },

})

