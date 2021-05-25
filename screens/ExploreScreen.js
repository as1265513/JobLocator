import React, { useEffect,useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Geocoder from 'react-native-geocoding';
import { StyleSheet,TextInput, View,Animated,Dimensions,Platform,PermissionsAndroid,FlatList,TouchableOpacity,Modal,ActivityIndicator } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { markers, } from '../model/mapData';
import { Card, Title, Paragraph } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import Map from 'react-native-vector-icons/FontAwesome';
import Geolocation from 'react-native-geolocation-service';
import { Button, Text } from 'native-base';
import FB from "react-native-vector-icons/FontAwesome"

navigator.geolocation = require('@react-native-community/geolocation');


const { width, } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

Geocoder.init("AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg");

const ExploreScreen = ({navigation}) => {
 
  const[skills, setSkills]= useState('web developer')
   const[city,setCity]= useState('')
  const[LONGITUDE, setLong]= useState(73.0479)
  const[LATITUDE, setLat]= useState(33.6844)
  const[data, setData]= useState()
  const[IsLoading, setIsLoading]=useState(false)
  let mylat=33.6844
  let mylng=73.0479

let date= new Date().getFullYear;
  useEffect( async()=>{
   
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    if((granted === PermissionsAndroid.RESULTS.GRANTED))
    {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log(position);
          setLong(position.coords.longitude)
          setLat(position.coords.latitude)
          console.log(position.coords.latitude)
          console.log(position.coords.longitude)
          console.log("Granted inside ", granted)
  }
      )
    }
    else {
      console.log("Denied Access!!!!");
    }
    
 },[])

  const ShowResult =async()=>{
        setIsLoading(true)
         await Geocoder.from(city, {
            southwest: {lat: 36.05, long: -115.25},
            northeast: {lat: 36.16, long: -115.10}})
            .then(json => {
              var location = json.results[0].geometry.location
              setLong(location.lng)
              mylat=location.lat
             mylng=location.lng
             setLat(location.lat)
             setLong(location.lng)
             setLat(location.lat)
              GetJob()
             setIsLoading(false)
            })
            .catch(error => console.log(error));
        
        // Search by geo-location (reverse geo-code)
        Geocoder.from(33.6844,73.0479)
            .then(json => {
                    var addressComponent = json.results[0].address_components[0];
              console.log(addressComponent);
            })
            .catch(error => console.warn(error));
            console.log("my city  ", city)
        }
     
        const GetJob =async()=>{
         setIsLoading(true)
          await fetch('https://thejoblocator.co.uk/api/RestJobs',{
            method:'post',
            headers:{
              'Content-Type':'application/json'
            },
            body:JSON.stringify({
              longitude:mylng,
              latitude:mylat,
              keyword:skills
            })
          }).then(res=>res.json())
          .then( async result=>{
            setData(result.Jobs)
              console.log(result.Jobs)
              setIsLoading(false)
          }).catch(err=>{
            console.log("Get Job error is ",err)
          }) 
        }

  const initialMapState = {
    markers,
  };

  const [state, setState] = React.useState(initialMapState);
  let mapAnimation = new Animated.Value(0);

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20); 
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  }

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

const val =(data)=>{
  return(
    <Card style={{borderColor:'#3F0000',marginHorizontal:5}}>
    <Card.Content>
      <Title>{data.title}</Title>
      <Paragraph numberOfLines={1}>{data.description}</Paragraph>
      <Button onPress={()=>{
                   let GetData=[]
                   GetData=data
                 navigation.navigate("ApplyScreen",GetData)
      }} info style={{borderRadius:9, marginLeft:30}}>
            <Text >Apply</Text>
          </Button>
    </Card.Content>
  </Card>
  
  )
}
            
  return (
  <>
  <Modal 
  visible={IsLoading}
  animationType='slide'
  transparent={true}
   >
      <View style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop:100
                    
                }} >
                    <View style={{ flexDirection: 'row' }}>
                        <ActivityIndicator size="large" color="black" />
                       
                    </View>
                </View>

  </Modal>
<View style={styles.container}>
  <View style={[{flex:2, backgroundColor:'#000'}]}>
     <View style={[styles.action]}>
               <FontAwesome                
                   name="ios-text"
                   color="#757575"
                   size={25}  
                   style={{marginLeft:7}}                 
               />
               <TextInput 
                 value={skills}
                 onChangeText={(text)=>setSkills(text)}
                   placeholder=" Job title keywords, or Company"
                   placeholderTextColor="#666666"
                   style={[styles.textInput, {
                       backgroundColor:'#fff'
                   }]}
                   autoCapitalize="none"  
               />
           </View>
           
           <View style={styles.action}>
               <Ionicons   name="location-on"
               color="#757575"
               size={30}
               style={{marginTop:10}}
               />
              
               <GooglePlacesAutocomplete
              placeholder='City, region'
              minLength={2}
              style={styles.autoSearch_style}

              onPress={(data) => {
                // 'details' is provided when fetchDetails = true
                setCity(data.description)                           
            }}
                query={{
                  key: 'AIzaSyBVdH9tirYEiM148xU93SamT_h6WYo3phg',
                  language: 'en',
                }}
                currentLocationLabel="Current Location"
                currentLocation={true}
    />         
         </View>                    
           <View style={{position:'absolute'}}>
          
             <Map onPress={ShowResult} style={{marginLeft:350, marginTop:66, borderLeftWidth:2, paddingLeft:4,paddingTop:3}} name="location-arrow" size={40} />
           </View>
     </View>  
     <View style={{flex:7,zIndex:0}}>
    
      <MapView
         provider={PROVIDER_GOOGLE}
         style={styles.map}
        
         region={{
           latitude:LATITUDE,
           longitude: LONGITUDE,
           latitudeDelta: 0.6358723958820065,
           longitudeDelta: 0.6250270688370961,
           
         }}
       >

     {
       data && data.length ? data.map((item) => {
           return (
             <MapView.Marker 
             key={item.id}
             coordinate={{
               latitude: parseFloat(item.latitude),
               longitude:parseFloat (item.longitude),
           }}
         title={item.title}
         description={item.description}
         onPress={ ()=>{
           let GetData=[]
           GetData=item
         
         navigation.navigate("ApplyScreen",GetData)
         }}
        
       
       />  )
 
       })  : <MapView.Marker 
          coordinate={{
           latitude:LATITUDE,
           longitude: LONGITUDE,
             }}
             title="Job Locator"
             description="Islamabad"
      
   />  
   }
  
</MapView>
 </View>
   </View>
   <View style={{height:'15%'}}>
     {data && data.length ?  <FlatList
          horizontal={true}
        data={data}
        renderItem={({item})=>val(item)}
        keyExtractor={item => item.id}
      />:<View style={{backgroundColor:'#000',height:'100%'}}>
         <View><Text style={{ color: '#fff', fontSize: 12, textAlign: 'center',marginTop:20  }}>© {date} |The Job Locator All Rights Reserved.</Text></View>
                <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'center' }}>
                    <TouchableOpacity style={styles.iconStyle}><FB name="facebook" size={20} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity style={styles.iconStyle}><FB name="pinterest" size={20} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity style={styles.iconStyle}><FB name="linkedin" size={20} color="#fff" /></TouchableOpacity>
                    <TouchableOpacity style={styles.iconStyle}><FB name="google-plus" size={20} color="#fff" /></TouchableOpacity>
                </View>
      </View> }
  
   </View>
  </>
 
   );
}
export default ExploreScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:8
  },
  searchBox: {
    position:'absolute', 
    marginTop: Platform.OS === 'ios' ? 40 : 20, 
    flexDirection:"row",
    backgroundColor: '#fff',
    width: '90%',
    alignSelf:'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position:'absolute', 
    top:Platform.OS === 'ios' ? 90 : 80, 
    paddingHorizontal:10
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection:"row",
    backgroundColor:'#fff', 
    borderRadius:20,
    padding:8,
    paddingHorizontal:20, 
    marginHorizontal:10,
    height:35,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
    width:50,
    height:50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5
  },
  signIn: {
      width: '100%',
      padding:5,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 3
  },
  textSign: {
      fontSize: 14,
      fontWeight: 'bold'
  },
  text_footer: {
    color: '#05375a',
    fontSize: 28,
    marginLeft:10,
  

},
action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#3F0000',
    paddingBottom: 5,
    backgroundColor:'#fff',

    
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
    paddingLeft: 10,
    color: '#05375a',
    fontSize:18,
    borderBottomWidth:1,
    marginLeft:4
},
map: {
  height: '100%',
  zIndex:0
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
    borderRadius: 10,
    marginBottom:80,
   width:200
   
},
textSign: {
    fontSize: 22,
    fontWeight: 'bold'
},
imgstyle:{
    height:70,
    borderRadius:20,
    marginBottom:-20
},
autoSearch_style:{
  height:'100%',
  width:'100%', 
},
iconStyle:{
  marginLeft:20
}
});