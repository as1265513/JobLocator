import React, { useEffect, useState } from "react"
import {View,Text,ActivityIndicator} from "react-native"
import AsyncStorage from "@react-native-community/async-storage"


const LogoutScreen =({navigation})=>{

    const [isloading,setLoading] = useState(false)

    useEffect( async()=>{
       
         //AsyncStorage.removeItem('Token', (err) => console.log('finished', err));
         await AsyncStorage.removeItem('Token', err => console.log('finished', err));
     await AsyncStorage.removeItem('mynewdata',()=>{
        console.log("ok") 
        setLoading(true)
        navigation.navigate("LoginScreen")} ,err => console.log('finished', err))
        
        
    },[])
    return(
        <View style={{justifyContent:'center',alignItems:'center'}}>
        {isloading?<ActivityIndicator color="#000" size="large" />:null
        
        }
        </View>
    )
}
export default LogoutScreen