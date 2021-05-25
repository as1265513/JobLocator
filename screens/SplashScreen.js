import React from 'react';
import {View, Text,TouchableOpacity,Dimensions,StyleSheet,StatusBar,Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';

const SplashScreen = ({navigation}) => {
    const { colors } = useTheme();

    return (
      <View style={styles.container}>
         <StatusBar backgroundColor='#000000' barStyle="light-content" />
        <View style={styles.header}>
            <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/aro.png')}
            style={styles.logo}
         
            />
            
        </View>
        <View style={{borderWidth:3, borderColor:'#3F0000'}}></View>
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: "#000"
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: "#fff"
            }]}>HELPING YOU FIND A JOB WITHOUT LOOKING!</Text>
            <Text style={styles.text}> Already have an Account? <Text onPress={()=>navigation.navigate("LoginScreen")} style={{fontWeight:'bold', color:'#0E8AF1'}}>Sign In</Text>  </Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('BusinessRegistration')}>
                <LinearGradient
                    colors={['#5C636A', '#5C636A']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}> as Business</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                    
                </LinearGradient>
            </TouchableOpacity>
            </View>
            <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('CustomerRegistration')}>
                <LinearGradient
                    colors={['#5C636A', '#5C636A']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}> as Customer</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                    
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("window");
const height_logo = height * 0.38;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000000'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
          height:188, 
          width:'90%',      
        justifyContent:'center',
        alignItems:'center'
  },
  title: {
      color: '#05375a',
      fontSize: 25,
      fontWeight: 'bold'
  },
  text: {
      color: '#fff',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 10
  },
  signIn: {
      width: 180,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});
// abc@khan password of app
