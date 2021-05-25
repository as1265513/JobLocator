// import React from 'react'
// import { View, Text, StyleSheet, Dimensions , Image } from 'react-native'



// export const HomeScreen = () => {
    
//     return (
//         <View style={styles.container}>
//             <View style={styles.navigation}> 
//                 <Text>Navigation </Text> 
//             </View>
//             <View style={styles.body}>
//                 <Text> Home Screen </Text>
//             </View>
//             <View style={styles.footer}>
//                 <Text> Footer </Text>
//             </View>import React, { useEffect,useState } from 'react';
// import {StyleSheet, Text,TextInput,View,Animated,Dimensions, Platform,} from "react-native";
// import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
// import image from "../assets/map_marker.png"
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
// import { markers, mapDarkStyle, mapStandardStyle } from '../model/mapData';
// import StarRating from '../components/StarRating';

// //import AsyncStorage from '@react-native-async-storage/async-storage';
// import Geocoder from 'react-native-geocoding';

// // Initialize the module (needs to be done only once)
// Geocoder.init("AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg"); // use a valid API key


// const { width, height } = Dimensions.get("window");
// const CARD_HEIGHT = 220;
// const CARD_WIDTH = width * 0.8;
// const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

// const ExploreScreen = ({navigation}) => {


//   const[city,setCity]= useState('Lahore')
//     const[long, setLong]= useState()
//     const[lat, setLat]= useState()
    
//     const FetchCity=(text)=>{
//          setCity(text)
        
//         fetch("https://api.weather.com/v3/location/search?apiKey=6532d6454b8aa370768e63d6ba5a832e&language=en-US&query="+text+"&locationType=city&format=json")    
//       .then(res=>res.json())    
//       .then(data=>{    
//        setCities(data.location.address.slice(0,9))
//        console.log(data.location.address.slice(0,9))
//     })

//     }
//     const ShowResult =()=>{
//       Geocoder.from(city, {
//         southwest: {lat: 36.05, long: -115.25},
//         northeast: {lat: 36.16, long: -115.10}})
//         .then(json => {
//           var location = json.results[0].geometry.location;
//           console.log(location);
//           console.log(location.lat)
//           setLong(location.lng)
//           setLat(location.lat)
//           console.log('my lat',lat)
//         })
//         .catch(error => console.warn(error));
    
//     // Search by geo-location (reverse geo-code)
//     Geocoder.from(33.6844,73.0479)
//         .then(json => {
//                 var addressComponent = json.results[0].address_components[0];
//           console.log(addressComponent);
//         })
//         .catch(error => console.warn(error));
//         console.log("my city  ", city)
        
//     }

//     const btnClick=  ()=>{
//       setItem("newcity", city)
//       navigation.navigate("Home", {city:city})
//     }
//     const cityList= async (cityname)=>{
//      setItem("newcity", cityname)
//       setCity(cityname)
//       navigation.navigate("Home",{city:cityname})
      
//     }
 

  
    

//   return (
//     <View >
//       <View>
//       <MapView
//     initialRegion={{
//       latitude: 33.6844,
//       longitude: 73.0479,
//       latitudeDelta: 0.0922,
//       longitudeDelta: 0.0421,
//     }}
//   />
      
//       </View>
       
     
//       <View style={styles.searchBox}>
//         <GooglePlacesAutocomplete
//       placeholder='Search'
//       minLength={2}
//       Value={city}
//       onChangeText={(text)=>setCity(text)}
      
//       query={{
//         key: 'AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg',
//         language: 'en',
//       }}
//     />
//     <TextInput placeholder="search here" value={city} onChangeText={(tex)=>setCity(tex)}/>
//         <Ionicons onPress={()=>ShowResult()} name="ios-search" size={20} />
//       </View>
//      </View>
//   );
// };

// export default ExploreScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   searchBox: {
//    position:'absolute',
//     marginTop: Platform.OS === 'ios' ? 40 : 25, 
//     flexDirection:"row",
//     backgroundColor: '#fff',
//     width: '90%',
//     alignSelf:'center',
//     borderRadius: 9,
//     padding: 10,
//     shadowColor: '#ccc',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   searchBox1: {
//     zIndex:0,
//     marginBottom:-900,
//      marginTop: Platform.OS === 'ios' ? 40 : 25, 
//      flexDirection:"row",
//      backgroundColor: '#fff',
//      width: '90%',
//      alignSelf:'center',
//      borderRadius: 9,
//      padding: 10,
//      shadowColor: '#ccc',
//      shadowOffset: { width: 0, height: 3 },
//      shadowOpacity: 0.5,
//      shadowRadius: 5,
//      elevation: 10,
//    },
//   chipsScrollView: {
//     position:'absolute', 
//     top:Platform.OS === 'ios' ? 90 : 80, 
//     paddingHorizontal:10
//   },
//   chipsIcon: {
//     marginRight: 5,
//   },
//   chipsItem: {
//     flexDirection:"row",
//     backgroundColor:'#fff', 
//     borderRadius:20,
//     padding:8,
//     paddingHorizontal:20, 
//     marginHorizontal:10,
//     height:35,
//     shadowColor: '#ccc',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.5,
//     shadowRadius: 5,
//     elevation: 10,
//   },
//   scrollView: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     paddingVertical: 10,
//   },
//   endPadding: {
//     paddingRight: width - CARD_WIDTH,
//   },
  
//   textContent: {
//     flex: 2,
//     padding: 10,
//   },
//   cardtitle: {
//     fontSize: 12,
//     // marginTop: 5,
//     fontWeight: "bold",
//   },
//   cardDescription: {
//     fontSize: 12,
//     color: "#444",
//   },
//   markerWrap: {
//     alignItems: "center",
//     justifyContent: "center",
//     width:50,
//     height:50,
//   },
//   marker: {
//     width: 30,
//     height: 30,
//   },
//   button: {
//     alignItems: 'center',
//     marginTop: 5
//   },
//   signIn: {
//       width: '100%',
//       padding:5,
//       justifyContent: 'center',
//       alignItems: 'center',
//       borderRadius: 3
//   },
//   textSign: {
//       fontSize: 14,
//       fontWeight: 'bold'
//   }
// });

//         </View>
//     )

// }


// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         backgroundColor: 'green'
//     },
//     navigation: {
//         flex: 2,
//         backgroundColor: 'red'
//     },
//     body: {
//         flex: 9,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: 'yellow'
//     },
//     footer: {
//         flex: 1,
//         backgroundColor: 'cyan'
//     }

// })