import React, { useEffect, useState } from 'react';
import {
    Image, View, Text, TouchableOpacity, TextInput,
    ActivityIndicator, Platform, StyleSheet, StatusBar, Alert, Modal,LogBox
} from 'react-native';
// import NetInfo from "@react-native-community/netinfo";

import * as Animatable from 'react-native-animatable';
import Toast from "react-native-toast-message"
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';
import image from "../assets/aro.png"
import AsyncStorage from "@react-native-community/async-storage"
import axios from "axios"
import FB from "react-native-vector-icons/FontAwesome"

const LoginScreen = ({ navigation, route }) => {
    const [isLoading, setLoading] = useState(false)
    const [data, setData] = useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });

    //xyz1@gmail.com, 12345678
    // 'muneeburrehmanpakistan@gmail.com'
    let date = new Date().getFullYear()
    const [myemail, setEmail] = useState('as@123gmail.com');
    const [mypassword, setMyPassword] = useState('Pakistan')
    const [emailvalid, setEmailvalid] = useState(true)
    const [passwordvalid, setPasswordvalid] = useState(true)
    const [conInternet,setConInter] = useState('');
    let mynewdata = []
    

    LogBox.ignoreAllLogs();
    //assigning Connection is online or ofline

    // useEffect(() => {
    //     CheckConnectivity()
    // }, [])




    // // Check connectivity of internet befor sending email and password to api to login 

    // const CheckConnectivity = () => {
    //     // For Android devices
    //     if (Platform.OS === "android") {
    //       NetInfo.isConnected.fetch().then(isConnected => {
    //         if (isConnected) {
    //           Alert.alert("You are online!");
    //         } else {
    //           Alert.alert("You are offline!");
    //         }
    //       });
    //     } else {
    //       // For iOS devices
    //       NetInfo.isConnected.addEventListener(
    //         "connectionChange",
    //         handleFirstConnectivityChange
    //       );
    //     }
    //   };
    
    //   const handleFirstConnectivityChange = isConnected => {
    //     NetInfo.isConnected.removeEventListener(
    //       "connectionChange",
    //       handleFirstConnectivityChange
    //     );
    
    //     if (isConnected === false) {
    //       Alert.alert("You are offline!");
    //     } else {
    //       Alert.alert("You are online!");
    //     }
    //   };

    const ValidationFunc = (type) => {
        let emailreg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        let passwordreg = /(?=.{8,})/

        if (type === 'emailfield') {
            if (emailreg.test(myemail)) {
                setEmailvalid(true)

            }
            else {
                setEmailvalid(false)

            }
        }
        else if (type === 'passwordfield') {
            if (passwordreg.test(mypassword)) {
                setPasswordvalid(true)

            }
            else {
                setPasswordvalid(false)

            }
        }


    }
    const LoginFunc = async () => {
        if (myemail == '' || mypassword == '') {
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                { text: 'Okay' }
            ]);

        }
        else {
            setLoading(true)
            axios.post('https://thejoblocator.co.uk/api/RestLogin', {
                email: myemail,
                password: mypassword

            }).then(res => {
                console.log(res)
                setLoading(false)
                mynewdata = res.data.data
                let token = res.data.token
                let type = res.data.data.type

                if (type === 'bussines') {
                    AsyncStorage.setItem("mynewdata", JSON.stringify(mynewdata))
                    AsyncStorage.setItem("Token", token)
                    navigation.navigate("MainTabBusiness")
                    // setLoading(false)
                    
                }
                else {
                    AsyncStorage.setItem("mynewdata", JSON.stringify(mynewdata))
                    AsyncStorage.setItem("Token", token)
                    navigation.navigate("MainTabCustomer")
                    // setLoading(false)
                    
                    // AsyncStorage.setItem('firstTime',true)
                    // AsyncStorage.setItem('firstTime', true)
                    
                }

            }).catch(err => {
                Alert.alert(
                    err=="Error: Request failed with status code 422"? "Invalid Credential" : "Error",
                    err=="Error: Request failed with status code 422"? "Please enter valid Email and Password to Sign in": err,
                    [
                        {
                            text:'Try again!',
                            onPress:()=>{},
                            style:'destructive'
                        }
                    ]
                )
                setLoading(false)
                console.log("my error is ", err)
            })

        }
    }


    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isLoading}

            >
                <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop:100
                    
                }} >
                    <View style={{ flexDirection: 'row' }}>
                        <ActivityIndicator size="large" color="white" />
                       
                    </View>
                </View>
            </Modal>
            <Toast ref={(ref) => Toast.setRef(ref)} />
            <StatusBar backgroundColor='#000000' barStyle="light-content" />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <View ><Image source={image} /></View>

            </View>
            <Animatable.View
                animation="fadeInUpBig"
                style={[styles.footer, {
                    backgroundColor: "#000"
                }]}
            >
                <View style={styles.form_Div}>
                    <Text style={[styles.text_footer, {
                        color: '#fff'


                    }]}>Email:</Text>
                    <View style={styles.action}>

                        <TextInput
                            value={myemail}
                            placeholder=" Please Enter Your Email"
                            placeholderTextColor="#666666"
                            style={[styles.textInput,

                            !emailvalid ? styles.error_Style : null
                            ]}
                            autoCapitalize="none"
                            onChangeText={val => setEmail(val)}
                        />
                        {data.check_textInputChange ?
                            <Animatable.View
                                animation="bounceIn"
                            >
                                <Feather
                                    name="check-circle"
                                    color="green"
                                    size={20}
                                />
                            </Animatable.View>
                            : null}
                    </View>
                    {!emailvalid ? <Animatable.Text duration={1500} 
                    animation="bounceInLeft" style={{ color: 'red', paddingLeft: 20 }}>
                        Please Enter Valid Email</Animatable.Text> : null}
                </View>

                <View style={[styles.form_Div, { marginTop: 10, }]}>

                    <Text style={[styles.text_footer, {
                        color: '#fff'

                    }]}>Password:</Text>
                    <View style={styles.action}>

                        <TextInput
                            placeholder="Please Enter Your Password"
                            placeholderTextColor="#666666"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={[styles.textInput,
                            !passwordvalid ? styles.error_Style : null
                            ]}
                            onEndEditing={() => ValidationFunc('passwordfield')}
                            value={mypassword}
                            onChangeText={(val) => setMyPassword(val)}
                        />

                    </View>
                    {!passwordvalid ? <Animatable.Text duration={1500} animation="bounceInLeft" 
                    style={{ color: 'red', paddingLeft: 20 }}>
                        Password Length must be 8 characters</Animatable.Text> : null}
                </View>


                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => LoginFunc()}
                    >
                        <LinearGradient
                            colors={['#5C636A', '#5C636A']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
                            }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 8 }}>
                    <TouchableOpacity><Text style={{ textAlign: 'center', fontSize: 12, justifyContent: 'center', color: '#fff' }}>New user click <Text onPress={() => navigation.navigate("SplashScreen")} style={{ fontWeight: 'bold', color: '#0E8AF1' }}>Here</Text> to Register</Text></TouchableOpacity>

                </View>
                <View><Text style={{ color: '#fff', fontSize: 10, textAlign: 'center', marginTop: 50 }}>© {date} |The Job Locator All Rights Reserved.</Text></View>
                <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'center' }}>
                    <TouchableOpacity style={{ marginLeft: 15 }}><FB name="facebook" size={20} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 15 }}><FB name="pinterest" size={20} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 15 }}><FB name="linkedin" size={20} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity style={{ marginLeft: 15 }}><FB name="google-plus" size={20} color="#fff" /></TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',

    },
    header: {
        marginRight: 50,
        justifyContent: 'center',
        alignContent: 'center'
    },
    footer: {
        flex: 22,
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        position: 'absolute'

    },
    text_footer: {
        color: '#fff',
        fontSize: 18,
        marginLeft: 15,
        marginTop: 4,
        borderWidth: 4,
        marginRight: 9,
        height: 40,
        paddingLeft: 10,
        paddingTop: 5,
        borderColor: '#3F0000',

    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        marginRight: 8,
        color: '#05375a',
        marginLeft: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingLeft: 8
    },
    form_Div: {
        backgroundColor: '#000',
        borderRadius: 15,
        marginTop: 6
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    imgstyle: {
        height: 70,
        borderRadius: 20,
        marginBottom: -20
    },
    error_Style: {
        borderBottomWidth: 1,
        borderColor: '#B70000',
        borderRadius: 18

    }
});