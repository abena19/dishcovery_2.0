
import { useState } from "react"
import { StyleSheet, Text, View, SafeAreaView, Pressable, TextInput, Alert } from 'react-native';
import { auth } from '../../constants/Firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import * as ImagePicker from 'expo-image-picker';

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
        const [image, setImage] = useState("../assets/profile.png");
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
        } catch (err) {
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
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View style={styles.title}>
                <Text style={styles.pageTitle}>Account Information</Text>
                <Text style={styles.pageCaption}>Let's create your unique login.</Text>
            </View>


            {/* <View>
                <TouchableOpacity>
                <ImagePicker>
                     source={{uri: image}} 
                    style={styles.images}
                    onPress={() => pickImage}
                        
                    
                </ImagePicker>
                </TouchableOpacity>
            </View> */}

            {/* KAYLA 147 image picker styling & code 
            
            {image && <Image style={styles.image} source={{uri : image}}/>}
                        <Pressable  style={styles.button} onPress={pickImage}>
                            <Text style={styles.caption}>upload a profile picture</Text>
                        </Pressable>  */}


            <View style={styles.inputContainer}>
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
                    onPress={() => navigation.navigate("Explore")}
                    onPressIn={signUpUser}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Next  →</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

// export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
        marginBottom: 100
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
    buttonOutlineText: {}
})
