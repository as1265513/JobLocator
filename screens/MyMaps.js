import { Text } from "native-base";
import React, { useEffect } from "react"
import Geolocation from 'react-native-geolocation-service';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {Button} from "react-native-paper"
navigator.geolocation = require('@react-native-community/geolocation');

const MyMaps =()=>{
  useEffect(()=>{
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
       
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  ); 
  },[])

  return(
    <>
    <GooglePlacesAutocomplete
      placeholder='Search Here'
     style={{width:'100%', height:'100%'}}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data);
       
      }}
      query={{
        key: 'AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg',
        language: 'en',
      }}
      currentLocation={true}
      currentLocationLabel='Current location'
        />
        
       <Button style={{marginBottom:190,elevation:160, backgroundColor:'skyblue',width:'80%',marginLeft:30}}>
        <Text style={{color:'#fff', fontSize:22}}>Press me</Text> 
         </Button>
    </>
  )
}
export default MyMaps